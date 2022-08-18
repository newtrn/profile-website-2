import styled from 'styled-components'
import { MAX_WIDTH_TABLET, MAX_WIDTH_MOBILE } from '@/constants/screen'

export default styled.div`
  background: linear-gradient(90deg, rgba(48, 24, 85, 1) 0%, rgba(13, 11, 23, 0.22454919467787116) 70%),
    url('https://firebasestorage.googleapis.com/v0/b/profile-website-1.appspot.com/o/profile-image-crop.png?alt=media&token=4217a5bd-c969-49a2-96ad-fc49d2aa1ff0');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  max-width: 100%;
  .left-content,
  .right-content {
    flex: 1 0 50%;
  }
  .left-content-wrapper {
    width: fit-content;
    .text {
      width: fit-content;
    }
  }
  .content-wrapper {
    height: 100%;
  }
  .right-content {
    height: 100vh;
  }

  @media screen and (max-width: ${MAX_WIDTH_TABLET}) {
    background: linear-gradient(90deg, rgba(48, 24, 85, 1) 0%, rgba(13, 11, 23, 0.22454919467787116) 70%),
      url('https://firebasestorage.googleapis.com/v0/b/profile-website-1.appspot.com/o/profile-image-1-1.png?alt=media&token=f0f50ef4-f02c-4bb1-bcbc-04a2f812714f');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media screen and (max-width: ${MAX_WIDTH_MOBILE}) {
    background: linear-gradient(90deg, rgba(48, 24, 85, 1) 0%, rgba(13, 11, 23, 0.22454919467787116) 70%),
      url('https://firebasestorage.googleapis.com/v0/b/profile-website-1.appspot.com/o/profile-image-3-4.png?alt=media&token=2c970227-021f-48e3-92b5-3cfadc4196c2');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`
