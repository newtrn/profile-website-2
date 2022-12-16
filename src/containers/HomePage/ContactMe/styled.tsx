import styled from 'styled-components'
import { colors } from '@/constants/colors'
import { MAX_WIDTH_MOBILE, MAX_WIDTH_SMALL_TABLET, MAX_WIDTH_TABLET } from '@/constants/screen'

export default styled.div`
  background: ${colors.blackBg};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .content-wrapper {
    display: flex;
    justify-content: center;
    height: 100%;
    .left-content,
    .right-content {
      flex: 1;
    }
    .left-content {
      z-index: 1;
      position: relative;
    }
    .right-content {
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }
  .contact-wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 600px;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 24px;
    column-gap: 36px;
  }
  @media screen and (max-width: ${MAX_WIDTH_TABLET}) {
    .content-wrapper {
      flex-direction: column-reverse;
      .left-content {
        position: relative;
      }
    }
  }
  @media screen and (max-width: ${MAX_WIDTH_SMALL_TABLET}) {
    .contact-wrapper {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  @media screen and (max-width: ${MAX_WIDTH_TABLET}) {
    height: auto;
    padding-top: 100px;
    padding-bottom: 300px;
  }
`
