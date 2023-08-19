'use client'

import { 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  createContext, 
  useEffect, 
  useState 
} from 'react'

interface CartContextType {
  cart: Set<string>;
  setCart: Dispatch<SetStateAction<Set<string>>>;
}

export const CartContext = createContext<CartContextType>({
  cart: new Set(),
  setCart: () => {},
})

export function CartProvider({ 
  children
}: {
    children: ReactNode
  }) {
  const [cart, setCart] = useState<Set<string>>(new Set())

  useEffect(() => {
    const cartStorage = localStorage.getItem('cart')
    if (cartStorage) {
      const cart = JSON.parse(cartStorage)
      if (Array.isArray(cart)) 
        setCart(new Set(cart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify([...cart]))
  }, [cart])

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children} 
    </CartContext.Provider> 
  )
}
