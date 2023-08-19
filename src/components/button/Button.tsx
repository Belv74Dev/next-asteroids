import { ReactNode } from 'react'
import style from './button.module.css'

export function Button({
  variant='primary',
  color='orange',
  size='sm',
  handleClick,
  type='button',
  disabled=false,
  children,
}: {
    variant?: 'primary' | 'ghost',
    color?: 'orange' | 'burgundy',
    size?: 'sm' | 'xl',
    handleClick: () => void,
    type?: 'button' | 'reset' | 'submit',
    disabled?: boolean,
    children: ReactNode,
  }) {
  const renderBtnClasz = (): string => {
    let clasz = style.btn

    clasz += ' '
    if (variant === 'primary') clasz += style.btn__primary
    else clasz += style.btn__ghost

    clasz += ' '
    if (color === 'orange') clasz += style.btn__orange
    else clasz += style.btn__burgundy

    clasz += ' '
    if (size === 'sm') clasz += style.btn__sm
    else clasz += style.btn__xl

    if (disabled) clasz += ` ${style.btn__disabled}`

    return clasz
  }

  const btnClasz = renderBtnClasz()

  return (
    <button 
      className={btnClasz} 
      onClick={!disabled ? handleClick : () => {}}
      type={type}
    >
      <span className={style.btn_children}>
        {children}
      </span>
    </button> 
  )
}
