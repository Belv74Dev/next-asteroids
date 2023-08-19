'use client'

import { CartContext } from '@/providers/CartProvider'
import { ConverterDistanceContext } from '@/providers/ConverterDistanceProvider'
import { AsteroidType } from '@/types/types'
import { useContext, useEffect, useRef, useState } from 'react'

const fetchData = async (page: number) => {
  const res = await fetch(`api/asteroids?page=${page}`)
  return await res.json()
}

const itemsForPage = 20

export function useAsteroids() {
  const refNextPage = useRef(null)
  const {converterDistance} = useContext(ConverterDistanceContext)
  const {cart, setCart} = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const [asteroids, setAsteroids] = useState<AsteroidType[]>([])
  const [page, setPage] = useState(0)

  useEffect(() => {
    const fetchDataAndUpdateAsteroids = async () => {
      setLoading(true)
      const newAsteroids = await fetchData(page)
      setAsteroids(asteroids => [...asteroids, ...newAsteroids])
      setLoading(false)
    }

    const indexOfLastItem = page * itemsForPage
    if (!loading && asteroids.length < indexOfLastItem) {
      fetchDataAndUpdateAsteroids()
    }
  }, [page])

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !loading) {
          setPage(page => page + 1)
        }
      }, { rootMargin: '0px' })

    if (refNextPage.current) {
      observer.observe(refNextPage.current)
    }

    return () => {
      if (refNextPage.current) {
        observer.unobserve(refNextPage.current)
      }
    }
  })

  const handleAddCart = (id: string) => {
    setCart(cart => new Set(cart.add(id)))
  }

  const getDisplayedAsteroids = () => {
    const indexOfLastItem = page * itemsForPage
    return asteroids.slice(0, indexOfLastItem)
  }
  
  const asteroidsDisplayed = getDisplayedAsteroids()

  return {
    asteroidsDisplayed, 
    converterDistance, 
    cart, 
    loading,     
    handleAddCart,
    refNextPage,
  }
}
