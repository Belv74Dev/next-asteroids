import { AllDatesType, AsteroidType } from '@/types/types'

export const formatingDate = (strDate: string): string => {
  const monthVariant = ['янв', 'февр', 'март', 'апр', 'май', 'июнь', 'июль', 'авг', 'сент', 'октб', 'нояб', 'дек']

  const date = new Date(strDate)
  const day = date.getDate() 
  const month = date.getMonth()
  
  const formatedDay = day < 10 ? `0${day}` : day
  const formatedMonth = monthVariant[month] 

  return `${formatedDay} ${formatedMonth} ${date.getFullYear()}`
}

export const formaingAsteroid = (
  date: string, 
  data: {[key: string]: any}
): AsteroidType => {
  return {
    id: data.id,
    name: data.name.substring(data.name.indexOf('(') + 1).replace(')', '').trim(),
    diameter: Math.round(data.estimated_diameter.meters.estimated_diameter_max),
    hazardous: data.is_potentially_hazardous_asteroid,
    distance: {
      lunar: Math.round(data.close_approach_data[0].miss_distance?.lunar),
      kilometers: Math.round(data.close_approach_data[0].miss_distance?.kilometers),
    },
    date: formatingDate(date),
  }
}

export const formatingAllDates = (
  data: {[key: string]: any}
): AllDatesType => {
  return {
    speed: Math.round(data.relative_velocity.kilometers_per_hour),
     distance: {
      lunar: Math.round(data.miss_distance?.lunar),
      kilometers: Math.round(data.miss_distance?.kilometers),
    },
    date: formatingDate(data.close_approach_date)
  }
}

export const renderDistanse = (
  viewDistance: 'kilometers' | 'lunar', 
  distance: number,
) => {
    if (viewDistance === 'kilometers')
      return `${distance} км`
   
    if (distance <= 0)
      return '< лунной орбиты'
    if (distance === 1)
      return '1 лунная орабита'
    if (distance <= 4)
      return `${distance} лунные орбиты`
    return `${distance} лунных орбит`
  }
