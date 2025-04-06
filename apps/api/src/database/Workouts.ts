import { pool } from '../db'
import dotenv from 'dotenv'
import { IExercises } from '../globals'

dotenv.config()

export async function getCurrentWorkoutNumber(userId: string) {
  const client = await pool.connect()
  const { rows } = await client.query(
    'SELECT COUNT(*)::int FROM workouts WHERE user_id = $1',
    [userId]
  )
  client.release()
  return rows
}

export const getWorkout = async (userId: string, workoutId: string) => {
  const client = await pool.connect()
  const { rows } = await client.query(
    `
    SELECT w.date, e.name, ws.set_order, ws.weight, ws.reps, ws.rpe, ws.notes
    FROM workouts AS w, workout_sets AS ws, exercises AS e
    WHERE w.user_id = $1 
    AND w.workout_id = ws.workout_id
    AND w.workout_id = $2
    AND ws.exercise_id = e.exercise_id;
    `,
    [userId, workoutId]
  )
  client.release()
  return rows
}

export const insertWorkout = async (userId: string, workout: IExercises[]) => {
  const client = await pool.connect()
  try {
    await client.query(`BEGIN`)
    const { rows } = await client.query(
      `INSERT INTO workouts (user_id, date) VALUES ($1, CURRENT_DATE) RETURNING workout_id`,
      [userId]
    )

    if (rows.length === 0) {
    }

    const workoutId = rows[0].workout_id

    for (const exercise of workout) {
      const { rows } = await client.query(
        `SELECT exercise_id FROM exercises WHERE name = $1 AND userId = $2`,
        [exercise.name, userId]
      )

      const exerciseId = rows[0].exercise_id

      for (let i = 0; i < exercise.sets.length; i++) {
        const set = exercise.sets[i]
        await client.query(
          `
        INSERT INTO workout_sets 
        (exercise_id, set_order, weight, reps, rpe, notes, workout_id)
        VALUES ($1, $2, $3, $4, $5, $6, $7);
        `,
          [exerciseId, i + 1, set.weight, set.reps, set.rpe, exercise.notes, workoutId]
        )
      }
    }
    await client.query(`COMMIT`)
  } catch (err) {
    await client.query(`ROLLBACK`)
    console.error(err)
    throw err
  } finally {
    client.release()
  }
}
