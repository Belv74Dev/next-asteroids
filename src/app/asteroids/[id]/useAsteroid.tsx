'use client'

import { CartContext } from '@/providers/CartProvider'
import { ConverterDistanceContext } from '@/providers/ConverterDistanceProvider'
import { AsteroidWithAllDatesTypes } from '@/types/types'
import { useContext, useEffect, useState } from 'react'

const fetchData = async (id: string) => {
  const res = await fetch(`api/asteroids/${id}`)
  return await res.json()
}

export function useAsteroid(id: string) {
  const [asteroid, setAsteroid] = useState<
    AsteroidWithAllDatesTypes | null
  >(null)
  const {converterDistance} = useContext(ConverterDistanceContext)
  const {cart, setCart} = useContext(CartContext)

  useEffect(() => {
    fetchData(id)
      .then(res => setAsteroid(res))
  }, [])

  const handleAddCart = (id: string) => {
    setCart(cart => new Set(cart.add(id)))
  }

  return {asteroid, converterDistance, cart, handleAddCart}
}
