'use client'

import { ConverterDistanceContext } from '@/providers/ConverterDistanceProvider'
import { SendContext } from '@/providers/SendProvider'
import { AsteroidType } from '@/types/types'
import { useContext, useEffect, useState } from 'react'

const getAsteroidsItem = async (send: string[]) => {
  const asteroids = send.map(id => 
    fetch(`${process.env.HOST}/api/asteroids/${id}`)
      .then(res => res.json())
  )

  return await Promise.all(asteroids)  
}

export function useSend() {
  const { converterDistance } = useContext(ConverterDistanceContext)
  const {send, setSend} = useContext(SendContext)
  const [asteroids, setAsteroids] = useState<AsteroidType[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAsteroidsItem(send) 
      .then(asteroids => {
        setAsteroids(asteroids)
        setLoading(false)
      })

    return () => setSend([])
  }, [])

  return { asteroids, converterDistance, loading }
}
