import React from 'react'
import clsx from 'clsx'

import { PlaceholderImageProps } from '@/interfaces/components/PlaceholderImage'

import PlaceholderStyled from './styled'

const PlaceholderImage = ({ className }: PlaceholderImageProps) => {
  return (
    <PlaceholderStyled className={clsx(className && className, 'flex justify-center items-center')}>
      <span className="icon-image" />
    </PlaceholderStyled>
  )
}

export default PlaceholderImage
