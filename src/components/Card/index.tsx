import React from 'react'
import clsx from 'clsx'

import { CardProps } from '@/interfaces/components/Card'

import CardStyled from './styled'

const Card = ({ children, className }: CardProps) => {
  return <CardStyled className={clsx(className && className)}>{children}</CardStyled>
}

export default Card
