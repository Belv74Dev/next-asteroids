'use client'

import { useContext } from 'react'
import { ConverterDistanceContext } from '@/providers/ConverterDistanceProvider'
import style from './converterDistance.module.css'

export function ConverterDistance() {
  const {converterDistance, setConverterDistance} = useContext(ConverterDistanceContext)
  return (
    <div className={style.converter}>
      <span
        className={style.converter_variant + {
          'lunar': '',
          'kilometers': ` ${style.converter_variant__active}`,
        }[converterDistance]}
        onClick={() => setConverterDistance('kilometers')}
      >
        в километрах
      </span>
      |
      <span 
        className={style.converter_variant + {
          'lunar': ` ${style.converter_variant__active}`,
          'kilometers': '',
        }[converterDistance]} 
        onClick={() => setConverterDistance('lunar')}
      >
        в лунных орбитах
      </span>
    </div> 
  )
}
