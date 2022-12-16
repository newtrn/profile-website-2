import { ReactNode } from 'react'

export interface InfoBoxProps {
  title: string
  text: string | ReactNode
  icon: ReactNode
}
