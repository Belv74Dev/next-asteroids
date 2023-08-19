'use client'

import { CartContext } from '@/providers/CartProvider'
import { SendContext } from '@/providers/SendProvider'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'

export function useCart() {
  const {cart, setCart} = useContext(CartContext)
  const {setSend} = useContext(SendContext)
  const router = useRouter()

  const handleSend = () => {
    if (cart.size > 0) {
      setSend([...cart])
      setCart(new Set()) 
      router.push('/send')
    }
  } 
  return { quantity: cart.size, handleSend}
}
