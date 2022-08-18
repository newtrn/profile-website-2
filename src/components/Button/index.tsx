import React from 'react'
import clsx from 'clsx'

import { ButtonProps } from '@/interfaces/components/Button'

import ButtonStyled from './styled'

const Button = ({ text, onClick, className }: ButtonProps) => (
  <ButtonStyled onClick={onClick} className={clsx(className && className)}>
    <div className="fill"></div>
    <div className="text">{text}</div>
  </ButtonStyled>
)

export default Button
