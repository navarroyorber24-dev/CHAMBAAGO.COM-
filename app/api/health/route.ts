import { NextResponse } from 'next/server'
import { Pool } from 'pg'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET() {
  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { status: 'degraded', app: 'CHAMBAAGO.COM', database: 'not_configured' },
      { status: 503 },
    )
  }

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 4000,
    max: 1,
    ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
  })

  try {
    await pool.query('SELECT 1')
    return NextResponse.json({
      status: 'ok',
      app: 'CHAMBAAGO.COM',
      database: 'connected',
      timestamp: new Date().toISOString(),
    })
  } catch {
    return NextResponse.json(
      { status: 'degraded', app: 'CHAMBAAGO.COM', database: 'unavailable' },
      { status: 503 },
    )
  } finally {
    await pool.end().catch(() => undefined)
  }
}
