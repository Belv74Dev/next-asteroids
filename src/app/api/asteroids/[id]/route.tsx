import { formaingAsteroid, formatingAllDates } from '@/services/formatting'
import { AsteroidWithAllDatesTypes } from '@/types/types'
import { NextResponse } from 'next/server'

const api_key = process.env.API_KEY

export async function GET(
  request: Request,
  context: { 
    params: {
      id: string 
    } 
  },
) {
  const id = context.params.id
  console.log('id', id)
  const res = await fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=${api_key}`)
  const data = await res.json()

  const allDates = data.close_approach_data
    .map((date: any) => formatingAllDates(date))

  const asteroid = {
    ...formaingAsteroid(data.orbital_data.last_observation_date, data),
    allDates  
  }

  return NextResponse.json(asteroid as AsteroidWithAllDatesTypes)
}
