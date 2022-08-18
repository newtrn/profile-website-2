import React from 'react'

import { infocaption } from '@/constants/infocaption'

import ProfileImageStyled from './styled'

const ProfileImage = () => {
  return (
    <ProfileImageStyled>
      <div className="img-wrapper">
        <img src="https://firebasestorage.googleapis.com/v0/b/profile-website-1.appspot.com/o/profile-img-9-16.png?alt=media&token=415e04eb-715d-4a75-8aad-458210dbeae8" />
        <div className="profile-img-caption text-xl lg:text-4xl font-black italic uppercase text-glow">{infocaption.aboutmeCaption}</div>
      </div>
    </ProfileImageStyled>
  )
}

export default ProfileImage
