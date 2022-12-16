import React from 'react'

import InfoBox from './components/InfoBox/loadable'
import PlaneAnimate from './components/PlaneAnimate/loadable'

import { infocaption } from '@/constants/infocaption'

import ContactMeStyled from './styled'

const ContactMe = () => {
  return (
    <ContactMeStyled id="contact-me">
      <div className="container">
        <div className="content-wrapper">
          <div className="left-content">
            <PlaneAnimate />
          </div>
          <div className="p-5 lg:p-10 right-content">
            <div data-aos="fade-up" className="text-2xl font-semibold uppercase text-center">
              {infocaption.contactMeTitle}
            </div>
            <div data-aos="fade-up" data-aos-delay="100" className="text-base mt-5 xl:mt-10 px-0 xl:px-20 mb-14 text-center">
              {infocaption.contactMeCaption}
            </div>
            <div className="contact-wrapper grid">
              <div data-aos="fade-up" data-aos-delay="200">
                <InfoBox
                  icon={<span className="icon-mobile" />}
                  title={infocaption.phoneTitle}
                  text={<a href={`tel:${infocaption.phoneNumber}`}>{infocaption.phoneText}</a>}
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <InfoBox
                  icon={<span className="icon-github" />}
                  title={infocaption.githubTitle}
                  text={
                    <a target="_blank" href={infocaption.githubLink}>
                      {infocaption.githubText}
                    </a>
                  }
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <InfoBox
                  icon={<span className="icon-at" />}
                  title={infocaption.emailTitle}
                  text={<a href={`mailto:${infocaption.emailText}`}>{infocaption.emailText}</a>}
                />
              </div>
              <div data-aos="fade-up" data-aos-delay="500">
                <InfoBox
                  icon={<span className="icon-codepen" />}
                  title={infocaption.codepenTitle}
                  text={
                    <a target="_blank" href={infocaption.codepenLink}>
                      {infocaption.codepneText}
                    </a>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContactMeStyled>
  )
}

export default ContactMe
