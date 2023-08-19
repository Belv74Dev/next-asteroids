'use client'

import { AsteroidCard } from '@/components/asteroidCard/AsteroidCard'
import { Button } from '@/components/button/Button'
import { ConverterDistance } from '@/components/converterDistance/ConverterDistance'
import { useAsteroids } from './useAsteroids'
import { Loading } from '@/components/loading/Loading'

export default function Page() {
  const {
    asteroidsDisplayed, 
    converterDistance, 
    cart, 
    loading,
    handleAddCart,
    refNextPage
  } = useAsteroids()

  return (
    <>
      <h1>Ближайшие подлёты астероидов</h1>
      <ConverterDistance />
      <div>
        {asteroidsDisplayed.map(asteroid => 
          <AsteroidCard 
            key={`${asteroid.id}-${asteroid.date}`} 
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
        )}
        {loading 
          ? <Loading /> 
          : <div ref={refNextPage} />
        }
      </div>
    </>
  )
}
