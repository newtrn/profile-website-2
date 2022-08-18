import React from 'react'
import Slider from 'react-slick'

import { Card, Button, PlaceholderImage } from '@/components'

import { infocaption } from '@/constants/infocaption'
import { projects } from '@/constants/projects'
import { TABLET_SIZE, SMALL_TABLET_SIZE } from '@/constants/screen'

import ExperiencesStyled from './styled'

const Experiences = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    arrows: true,
    prevArrow: <span className="icon-angle-left" />,
    nextArrow: <span className="icon-angle-right" />,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: TABLET_SIZE,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: SMALL_TABLET_SIZE,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }
  return (
    <ExperiencesStyled>
      <div className="container">
        <div className="p-5 md:p-20 content-wrapper">
          <div data-aos="fade-up" className="text-2xl font-semibold uppercase text-center">
            {infocaption.experienceTitle}
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="text-base mt-5 xl:mt-10 px-0 xl:px-20 mb-14 text-center">
            {infocaption.skillsIntro}
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <Slider {...settings}>
              {projects.map((project) => (
                <div className="project-card-wrapper" key={project.name}>
                  <Card className="project-card">
                    <div className="project-img-wrapper">
                      {project.thumbnail ? <img src={project.thumbnail} /> : <PlaceholderImage className="img-placeholder" />}
                    </div>
                    <div className="project-info flex flex-col justify-end items-end">
                      <div className="font-semibold text-base text-center">{project.name}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <Button
              className="my-0 mx-auto mt-14"
              text={
                <div className="flex justify-items-center items-center">
                  {infocaption.aboutMeBtnText}
                  <span className="icon-arrow-right ml-3" />
                </div>
              }
            />
          </div>
        </div>
      </div>
    </ExperiencesStyled>
  )
}

export default Experiences
