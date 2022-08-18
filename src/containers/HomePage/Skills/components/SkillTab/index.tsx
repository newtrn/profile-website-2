import React from 'react'
import clsx from 'clsx'

import { SkillTabProps } from '@/interfaces/components/SkillTab'

import { hardSkill, softSkill } from '@/constants/skillTabs'

import SkillTabStyled from './styled'

const SkillTab = ({ currentTab, setCurrentTab }: SkillTabProps) => {
  const handleSetCurrentTabHardSkill = () => {
    setCurrentTab(hardSkill)
  }
  const handleSetCurrentTabSoftSkill = () => {
    setCurrentTab(softSkill)
  }
  return (
    <SkillTabStyled className="flex">
      <div
        className={clsx(hardSkill === currentTab && 'active', 'tab flex items-center justify-content-center')}
        onClick={handleSetCurrentTabHardSkill}
      >
        <div className="glow-light" />
        <div className="text">{hardSkill}</div>
      </div>
      <div
        className={clsx(softSkill === currentTab && 'active', 'tab flex items-center justify-content-center')}
        onClick={handleSetCurrentTabSoftSkill}
      >
        <div className="glow-light" />
        <div className="text">{softSkill}</div>
      </div>
    </SkillTabStyled>
  )
}

export default SkillTab
