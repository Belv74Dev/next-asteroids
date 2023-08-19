'use client'

import { 
  Dispatch, 
  ReactNode, 
  SetStateAction, 
  createContext, 
  useState 
} from 'react'

interface SendContextType {
  send: string[];
  setSend: Dispatch<SetStateAction<string[]>>;
}

export const SendContext = createContext<SendContextType>({
  send: [],
  setSend: () => {},
})

export function SendProvider({
  children
}: {
    children: ReactNode
  }) {
  const [send, setSend] = useState<string[]>([])
  return (
    <SendContext.Provider value={{send, setSend}}>
      {children}
    </SendContext.Provider> 
  )
}
