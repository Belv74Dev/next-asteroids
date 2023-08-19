import { NextResponse } from 'next/server'

import { AsteroidType } from '@/types/types'
import { formaingAsteroid } from '@/services/formatting'

const api_key = process.env.API_KEY
const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
let link = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${year}-${month}-${day}&api_key=${api_key}`
let nextLink = link

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const page = searchParams.get('page')

  if (page === '1')
    nextLink = link

  const _request = async () => {
    const res = await fetch(nextLink)
    
    const data = await res.json()
    
    return [Object.entries(data.near_earth_objects)
      .sort((a, b) => new Date(a[0]).getTime() - new Date(b[0]).getTime())
      .map(([key, items]: [string, any])  =>
        items.map((item: any) => formaingAsteroid(key, item))
      )
      .flat(), data.links.next]
  }

  const [asteroids, next] = await _request()
  nextLink = next
  return NextResponse.json(asteroids as AsteroidType[])
}
