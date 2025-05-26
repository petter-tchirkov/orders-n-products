import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'

export default defineEventHandler(() => {
  const dbPath = path.join(process.cwd(), '../../db.json')

  try {
    const dbData = fs.readFileSync(dbPath, 'utf-8')
    return JSON.parse(dbData)
  }
  catch (error) {
    console.error('Error reading or parsing db.json:', error)
    return { error: 'Could not fetch data' }
  }
})
