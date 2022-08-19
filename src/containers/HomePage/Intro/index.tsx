import React from 'react'

import { Button } from '@/components/index'
import MorphLiquid from './components/MorphLiquid/loadable'
import ScrollDown from './components/ScrollDownIcon'

import { IntroProps } from '@/interfaces/containers/Intro'

import { infocaption } from '@/constants/infocaption'

import IntroStyled from './styled'

const Intro = ({ handleGoToContactMeClick }: IntroProps) => {
  return (
    <IntroStyled>
      <MorphLiquid />
      <div className="container">
        <div className="content-wrapper flex items-center">
          <div className="left-content-wrapper">
            <div data-aos="fade-right" className="text text-4xl font-bold text-space-more text-glow mb-3">
              {infocaption.introCaptionFirstLine}
              <br />
              {infocaption.introCaptionSecondLine}
            </div>
            <div data-aos="fade-right" className="text opacity-50 uppercase text-xs tracking-widest mb-9">
              {infocaption.introSubCaption}
            </div>
            <div data-aos="fade-left">
              <Button text={infocaption.introBtnText} onClick={handleGoToContactMeClick} />
            </div>
          </div>
        </div>
      </div>
      <ScrollDown />
    </IntroStyled>
  )
}

export default Intro
