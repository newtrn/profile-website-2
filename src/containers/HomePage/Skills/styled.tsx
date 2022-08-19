import styled from 'styled-components'
import { MAX_WIDTH_TABLET, MAX_WIDTH_MEDIUM_MOBILE } from '@/constants/screen'
import { colors } from '@/constants/colors'

export default styled.div`
  background: ${colors.purpleBgTertiary};
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  .content-wrapper {
    width: 100%;
    height: 100%;
    .left-content-wrapper,
    .right-content-wrapper {
      flex: 1 1 0px;
    }
    .left-content-wrapper {
      padding: 0 60px;
    }
  }
  .hard-skill-content,
  .soft-skill-content {
    width: 100%;

    opacity: 0;
    transition: all 0.2s ease-in-out;
    &.active {
      opacity: 1;
    }
  }
  .soft-skill-content {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  @media screen and (max-width: ${MAX_WIDTH_TABLET}) {
    height: auto;
    .content-wrapper {
      padding: 60px 0;
      justify-content: center;
      .left-content-wrapper,
      .right-content-wrapper {
        flex: 0;
      }
    }
    .right-content-wrapper {
      width: 100%;
      .soft-skill-content {
        position: absolute;
        transform: none;
        top: 50px;
        padding: 30px;
        &.active {
          position: relative;
        }
      }
      .hard-skill-content {
        position: absolute;
        margin-top: 50px;
        row-gap: 50px;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        &.active {
          position: relative;
        }
      }
    }
  }
  @media screen and (max-width: ${MAX_WIDTH_MEDIUM_MOBILE}) {
    .content-wrapper .left-content-wrapper {
      padding: 0;
    }
  }
`
