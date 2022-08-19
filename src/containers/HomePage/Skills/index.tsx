import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import Masonry from 'react-masonry-css'

import SkillTab from './components/SkillTab/loadable'
import { Card } from '@/components'

import { infocaption } from '@/constants/infocaption'
import { hardSkill, softSkill } from '@/constants/skillTabs'
import { hardSkills, softSkills } from '@/constants/skills'
import { MOBILE_SIZE } from '@/constants/screen'

import useWindowDimensions from '@/hooks/useWindowDimensions'

import SkillsStyled from './styled'

const Skills = () => {
  const [tab, setTab] = useState<string>(hardSkill)
  const [colNum, setColNum] = useState<number>(2)

  const { screenWidth } = useWindowDimensions()

  useEffect(() => {
    if (screenWidth <= MOBILE_SIZE) {
      setColNum(1)
    } else {
      setColNum(2)
    }
  }, [screenWidth])

  return (
    <SkillsStyled>
      <div className="container">
        <div className="content-wrapper flex flex-col xl:flex-row items-center">
          <div data-aos="fade-right" className="left-content-wrapper">
            <div className="flex flex-col items-center justify-content-center">
              <div className="text-2xl font-semibold uppercase mb-2">{infocaption.skillsTitle}</div>
              <SkillTab currentTab={tab} setCurrentTab={setTab} />
              <div className="text-base mt-5 xl:mt-14">{infocaption.skillsIntro}</div>
            </div>
          </div>
          <div data-aos="fade-left" className="right-content-wrapper relative">
            <div className={clsx(tab === hardSkill && 'active', 'hard-skill-content grid grid-cols-4 gap-y-10')}>
              {hardSkills.map((skill) => (
                <div className="skill-icon-wrapper text-6xl flex flex-col justify-center items-center">
                  <div className="mb-1">{skill.icon}</div>
                  <div className="text-base font-semibold">{skill.name}</div>
                </div>
              ))}
            </div>
            <div className={clsx(tab === softSkill && 'active', 'soft-skill-content')}>
              <Masonry breakpointCols={colNum} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                {softSkills.map((skill) => (
                  <Card>
                    <div className="icon text-5xl mb-4">{skill.icon}</div>
                    <div className="text-base font-bold">{skill.name}</div>
                    <div className="text-case">{skill.des}</div>
                  </Card>
                ))}
              </Masonry>
            </div>
          </div>
        </div>
      </div>
    </SkillsStyled>
  )
}

export default Skills
