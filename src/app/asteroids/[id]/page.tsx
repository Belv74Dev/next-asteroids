'use client'

import { AsteroidCard } from '@/components/asteroidCard/AsteroidCard'
import { Button } from '@/components/button/Button'
import { useAsteroid } from './useAsteroid'
import { Loading } from '@/components/loading/Loading'
import { renderDistanse } from '@/services/formatting'
import style from './page.module.css'

export default function Page({
  params
}: {
    params: {
      id: string
    }
  }) {
  const {asteroid, converterDistance, cart, handleAddCart} = useAsteroid(params.id)

  if (!asteroid)
    return <Loading />


  return (
    <>
      <h1>Астероид {asteroid.name}</h1>
      <div>
        <AsteroidCard
          key={asteroid.id} 
          {...asteroid}
          viewDistance={converterDistance}
        >
          {cart.has(asteroid.id) 
            ? <Button 
              variant="ghost" 
              handleClick={() => {}}
              color="burgundy" 
              disabled
            >
              в корзине 
            </Button>
            : <Button
              variant="ghost"
              handleClick={() => handleAddCart(asteroid.id)}
            >
              заказать
            </Button>
          }
        </AsteroidCard>
        <div className={style.all_dates}>
          <h2>Все сближения астероида</h2>
          <ul className={style.all_dates_list}>
            {asteroid.allDates.map(date => {
              const viewDistans = renderDistanse(
                converterDistance, 
                date.distance[converterDistance]
              )
              return (
                <li key={date.date} className={style.all_dates_item}>
                  <span className={style.all_dates_date}>
                    {date.date}
                  </span>
                  <ul className={style.all_dates_info}>
                    <li className={style.all_dates_info_item}>
                      <span>Скорость</span>
                      <span>{date.speed} км/с</span>
                    </li>
                    <li className={style.all_dates_info_item}>
                      <span>Растояние</span>
                      <span>{viewDistans}</span>
                    </li>
                  </ul>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>

  )
}
