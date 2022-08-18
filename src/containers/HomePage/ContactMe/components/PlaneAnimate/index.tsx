// @ts-nocheck
import React from 'react'

import { ReactComponent as Plane } from '@/assets/images/paper_plane.svg'

import PlaneAimateStyled from './styled'

const PlaneAnimate = () => {

  return (
    <PlaneAimateStyled>
      <Plane className="plane plane-1" />
      <Plane className="plane plane-2" />
    </PlaneAimateStyled>
  )
}

export default PlaneAnimate
