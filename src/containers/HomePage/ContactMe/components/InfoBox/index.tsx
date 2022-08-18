import React from 'react'

import { InfoBoxProps } from '@/interfaces/components/InfoBox'

import InfoBoxStyled from './styled'

const InfoBox = ({ title, text, icon }: InfoBoxProps) => {
  return (
    <InfoBoxStyled className="flex items-center">
      <div className="icon-wrapper flex items-center justify-center">{icon}</div>
      <div className="info-wrapper ml-5">
        <div className="text-base">{title}</div>
        <div className="text-base font-semibold">{text}</div>
      </div>
    </InfoBoxStyled>
  )
}

export default InfoBox
