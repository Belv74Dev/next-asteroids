import { ReactNode } from 'react'
import baseStyle from '@/styles/base.module.css'

export default function Layout({
  children,
}: {
    children: ReactNode
  }) {
  return (
    <main className={baseStyle.main}>
      {children}
    </main>
  )
}
