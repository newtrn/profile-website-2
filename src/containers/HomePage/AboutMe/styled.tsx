import styled from 'styled-components'
import { colors } from '@/constants/colors'
import { MAX_WIDTH_TABLET, MAX_WIDTH_MOBILE, MAX_WIDTH_SMALL_TABLET } from '@/constants/screen'

export default styled.div`
  background: ${colors.purpleBgPrimary};
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  .content-wrapper {
    height: 100%;
  }
  .left-content-wrapper,
  .right-content-wrapper {
    flex: 1 1 0px;
  }
  .profile-img-wrapper {
    width: 60%;
    height: 100%;
    padding: 40px 0;
  }

  @media screen and (max-width: ${MAX_WIDTH_MOBILE}) {
    height: auto;
    padding: 40px;
    .left-content-wrapper {
      flex: 0;
      max-height: 60vh;
      .img-wrapper {
        height: 100%;
      }
      .profile-img-wrapper {
        max-height: 100%;
        max-width: 350px;
      }
    }
    .profile-img-wrapper {
      margin: 0 auto;
    }
  }
`
