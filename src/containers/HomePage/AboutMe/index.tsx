import React from 'react'

import { Button } from '@/components'
import ProfileImage from './components/ProfileImage/loadable'

import { infocaption } from '@/constants/infocaption'

import AboutMeStyled from './styled'

const AboutMe = () => {
  return (
    <AboutMeStyled>
      <div className="container">
        <div className="content-wrapper flex flex-col md:flex-row items-center">
          <div className="left-content-wrapper">
            <div className="profile-img-wrapper">
              <ProfileImage />
            </div>
          </div>
          <div className="right-content-wrapper flex flex-col justify-items-center items-center">
            <div data-aos="fade-up" className="text-2xl font-semibold mb-5">
              {infocaption.fullName}
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="text-base mb-10">
              {infocaption.introSelf}
            </div>
            {/* <div data-aos="fade-up" data-aos-delay="200">
              <Button
                text={
                  <div className="flex justify-items-center items-center">
                    {infocaption.aboutMeBtnText}
                    <span className="icon-arrow-right ml-3" />
                  </div>
                }
              />
            </div> */}
          </div>
        </div>
      </div>
    </AboutMeStyled>
  )
}

export default AboutMe
