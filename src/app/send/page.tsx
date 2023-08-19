'use client'

import { AsteroidCard } from '@/components/asteroidCard/AsteroidCard'
import { useSend } from './useSend'
import { Loading } from '@/components/loading/Loading'

export default function Page() {
  const {asteroids, converterDistance, loading} = useSend() 

  return (
    <>
      <h1>Заказ отправлен!</h1>
      {loading
        ? <Loading />
        : <div>
          {asteroids.map(asteroid => 
            <AsteroidCard 
              key={`${asteroid.id}-${asteroid.date}`} 
              {...asteroid}
              viewDistance={converterDistance}
            />
          )}
        </div>
      }
    </> 
  )
}
