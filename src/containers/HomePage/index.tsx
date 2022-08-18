import React, { useEffect, useRef } from 'react'
//@ts-ignore
// import fullpage from 'fullpage.js'

import Intro from './Intro/loadable'
import AboutMe from './AboutMe/loadable'
import Skills from './Skills/loadable'
import Experiences from './Experiences/loadable'
import ContactMe from './ContactMe/loadable'

import HomePageStyled from './styled'

const HomePage = () => {
  // useEffect(() => {
  //   new fullpage('#fullpage', {
  //     //options here
  //     anchors: ['intro', 'about-me', 'skills', 'experience', 'contact-me'],
  //     licenseKey: 'ABF9EE2D-86114B0A-8FBA58B4-7570DB48',
  //     afterLoad: () => {
  //       Array.from(document.querySelectorAll('.fp-table.active .aos-init')).forEach((el) => el.classList.add('aos-animate'))
  //     },
  //     scrollOverflow: true,
  //   })
  // }, [])

  const myRef = useRef(null)

  const handleGoToContactMeClick = () => {
    if (myRef.current) {
      //@ts-ignore
      myRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }
  
  return (
    <HomePageStyled>
      {/* <div id="fullpage">
        <div className="section">
          <Intro />
        </div>
        <div className="section">
          <AboutMe />
        </div>
        <div className="section">
          <Skills />
        </div>
        <div className="section">
          <Experiences />
        </div>
        <div className="section">
          <ContactMe />
        </div>
      </div> */}
      <Intro handleGoToContactMeClick={handleGoToContactMeClick} />
      <AboutMe />
      <Skills />
      <Experiences />
      <div ref={myRef}>
        <ContactMe />
      </div>
    </HomePageStyled>
  )
}

export default HomePage
