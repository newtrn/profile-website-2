import { ReactNode } from 'react'

export interface ButtonProps {
  text: string | ReactNode
  onClick?: () => void
  className?: string
}
