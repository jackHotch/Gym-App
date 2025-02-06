export interface IExercises {
  name: string
  notes: string
  sets: ISet[]
}

export interface ISet {
  weight: string
  reps: string
  rpe: string
}

export interface IUser {
  email: string
  password: string
  firstName: string
  lastName: string
}
