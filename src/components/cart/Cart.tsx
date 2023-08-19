'use client'

import { useCart } from './useCart'
import { Button } from '@/components/button/Button'
import styleBase from '@/styles/base.module.css'
import style from './cart.module.css'

export function Cart() {
  const { quantity, handleSend } = useCart()

  const renderText = () => {
    if (quantity === 0)
      return '0 астероидов'
    if (quantity === 1)
      return '1 астероид'
    if (quantity <= 4)
      return `${quantity} астероида`
    return `${quantity} астероидов`
  }

  const qountText = renderText()

  return (
    <div className={style.cart}>
      <div className={styleBase.container}>
        <div className={style.cart_content}>
          <div>
            <span className={style.cart_title}>Корзина</span>
            <span className={style.cart_qount}>{qountText}</span>
          </div>
          <Button handleClick={handleSend} size='xl'>
            Отправить
          </Button>
        </div>
      </div>
    </div> 
  )
}
