import Image from 'next/image'
import Link from 'next/link'
import style from './asteroidCard.module.css' 
import { AsteroidType } from '@/types/types'
import { ReactNode } from 'react'
import { renderDistanse } from '@/services/formatting'

interface AsteroidCardType extends AsteroidType {
  viewDistance: 'lunar' | 'kilometers', 
  children?: ReactNode,
} 

export function AsteroidCard({
  id,
  name,
  diameter,
  hazardous,
  distance,
  date,
  viewDistance='lunar',
  children,
}: AsteroidCardType) {

  const viewDistans = renderDistanse(viewDistance, distance[viewDistance])

  return (
    <div className={style.asteroid}>
      <span className={style.asteroid_date}>{date}</span>
      <div className={style.asteroid_content}>
        <div className={style.asteroid_distance}>
          <span className={style.asteroid_distance_value}>
            {viewDistans}
          </span>
          <span className={style.asteroid_distance_icon}><span/></span>
        </div>
        <div className={`${style.asteroid_img} ${diameter >= 100 ? style.asteroid_img__big : ''}`}>
          <Image src="/imgs/asteroid.png" alt="asteroid" fill />
        </div>
        <div className={style.asteroid_object}>
          <Link href={`/asteroids/${id}`} className={style.asteroid_name}>{name}</Link>
          <span className={style.asteroid_diameter}>Ø {diameter} м</span>
        </div>
      </div>
      <div className={style.asteroid_additionally}>
        {children}
        {hazardous && 
          <span className={style.asteroid_warning}>
            <span className={style.asteroid_warning_icon}>
              ⚠️  
            </span>
            <span className={style.asteroid_warning_text}>
              Опасен
            </span>
          </span>
        }
      </div>
    </div> 
  )
}
