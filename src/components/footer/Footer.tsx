import styleBase from '@/styles/base.module.css'
import style from './footer.module.css'

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className={styleBase.container}>
        © Все права и планета защищены
      </div>
    </footer> 
  )
}
