import styled from 'styled-components'

import { MAX_WIDTH_SMALL_TABLET, MAX_WIDTH_SMALL_MOBILE } from '@/constants/screen'

export default styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  overflow: hidden;
  .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 400px;
    height: 400px;
    background: transparent;
    transform: rotate(325deg);
    transition: 0.5s;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -75%) rotate(325deg);
      background: linear-gradient(90deg, rgba(75, 43, 141, 1) 0%, rgba(146, 36, 137, 1) 25%, rgba(203, 31, 133, 1) 100%);
      border-radius: 45%;
      width: 240%;
      height: 240%;
      animation: animate 10s linear infinite;
    }
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -75%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }

  @media screen and (max-width: ${MAX_WIDTH_SMALL_TABLET}) {
    width: 350px;
    height: 350px;
    .liquid {
      width: 300px;
      height: 300px;
    }
  }

  @media screen and (max-width: ${MAX_WIDTH_SMALL_MOBILE}) {
    width: 300px;
    height: 300px;
    .liquid {
      width: 250px;
      height: 250px;
    }
  }
`
