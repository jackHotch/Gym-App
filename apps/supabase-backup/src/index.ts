import express from 'express'
import dotenv from 'dotenv'
import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import axios from 'axios'

dotenv.config()

const app = express()
const PORT = 4000

const DROPBOX_TOKEN = process.env.DROPBOX_TOKEN!
const SUPABASE_DB_URL = process.env.SUPABASE_DB_URL!
const BACKUP_FOLDER = '/supabase_backups'
const MAX_BACKUPS = 3

const runBackup = async () => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-')
  const filename = `supabase_backup_${timestamp}.sql`
  const filepath = path.join(__dirname, filename)

  // 1. Dump database
  console.log('🔄 Dumping database...')
  execSync(`pg_dump --format=plain ${SUPABASE_DB_URL} -F c -f ${filepath}`)

  // 2. Upload to Dropbox
  console.log('☁️ Uploading to Dropbox...')
  const fileBuffer = fs.readFileSync(filepath)

  const uploadRes = await axios.post(
    'https://content.dropboxapi.com/2/files/upload',
    fileBuffer,
    {
      headers: {
        Authorization: `Bearer ${DROPBOX_TOKEN}`,
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': JSON.stringify({
          path: `${BACKUP_FOLDER}/${filename}`,
          mode: 'add',
          autorename: true,
          mute: false,
        }),
      },
    }
  )
  console.log(`📁 Uploaded: ${filename} → Status: ${uploadRes.status}`)

  // 3. List backups
  console.log('📂 Fetching Dropbox file list...')
  const listRes = await axios.post(
    'https://api.dropboxapi.com/2/files/list_folder',
    { path: BACKUP_FOLDER },
    {
      headers: {
        Authorization: `Bearer ${DROPBOX_TOKEN}`,
        'Content-Type': 'application/json',
      },
    }
  )

  const { entries } = listRes.data
  const backups = entries
    .filter((e: any) => e.name.endsWith('.sql'))
    .sort(
      (a: any, b: any) =>
        new Date(b.server_modified).getTime() - new Date(a.server_modified).getTime()
    )

  // 4. Delete older backups
  if (backups.length > MAX_BACKUPS) {
    const toDelete = backups.slice(MAX_BACKUPS)
    for (const file of toDelete) {
      console.log(`🗑️ Deleting ${file.name}`)
      await axios.post(
        'https://api.dropboxapi.com/2/files/delete_v2',
        { path: file.path_lower },
        {
          headers: {
            Authorization: `Bearer ${DROPBOX_TOKEN}`,
            'Content-Type': 'application/json',
          },
        }
      )
    }
  }

  // Cleanup
  fs.unlinkSync(filepath)
}

app.get('/backup', async (_req, res) => {
  try {
    await runBackup()
    res.send('✅ Backup complete.')
  } catch (err) {
    console.error('❌ Backup error:', err)
    res.status(500).send('Backup failed.')
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Backup service running on port ${PORT}`)
})

if (require.main === module) {
  // If running directly (e.g., via `node dist/index.js`), do the backup
  runBackup()
    .then(() => {
      console.log('✅ Backup complete.')
      process.exit(0)
    })
    .catch((err) => {
      console.error('❌ Backup failed:', err)
      process.exit(1)
    })
}
