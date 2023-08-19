import styleBase from '@/styles/base.module.css'
import style from './header.module.css'
import Link from 'next/link'

export function Header() {
  return (
    <div className={style.header}>
      <div className={styleBase.container}>
        <Link href="/" className={style.header_logo}>
          ARMAGEDDON 2023
        </Link>
        <p className={style.header_description}>
          ООО “Команда им. Б. Уиллиса”. 
          <br/>Взрываем астероиды с 1998 года.
        </p>
      </div>
    </div> 
  )
}
