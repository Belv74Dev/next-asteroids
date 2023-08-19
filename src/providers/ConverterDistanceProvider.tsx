'use client'

import { 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  createContext, 
  useState 
} from 'react'

interface ConverterDistanceContextType {
  converterDistance: 'lunar' | 'kilometers';
  setConverterDistance: Dispatch<SetStateAction<'lunar' | 'kilometers'>>;
}

export const ConverterDistanceContext = createContext<
  ConverterDistanceContextType
>({
  converterDistance: 'lunar',
  setConverterDistance: () => {},
})

export function ConverterDistanceProvider({
  children
}: {
    children: ReactNode
  }) {
  const [converterDistance, setConverterDistance] = useState<
    'lunar' | 'kilometers'
  >('lunar')
  return (
    <ConverterDistanceContext.Provider 
      value={{converterDistance, setConverterDistance}}
    >
      {children}
    </ConverterDistanceContext.Provider> 
  )
}
