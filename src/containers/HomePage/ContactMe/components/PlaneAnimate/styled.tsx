import styled from 'styled-components'
import { MAX_WIDTH_TABLET, MAX_WIDTH_MOBILE } from '@/constants/screen'

export default styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2;
  .star {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .plane {
    position: absolute;
    &.plane-1 {
      width: 420px;
      top: 35%;
      left: 80px;
    }
    &.plane-2 {
      width: 200px;
      top: 30%;
      transform: rotate(20deg);
    }
  }
  @media screen and (max-width: ${MAX_WIDTH_TABLET}) {
    .plane.plane-2 {
      width: 160px;
      top: -80px;
      left: 80px;
    }
    .plane.plane-1 {
      width: 300px;
      top: 0;
      right: 120px;
    }
  }

  @media screen and (max-width: ${MAX_WIDTH_MOBILE}) {
    .plane.plane-2 {
      left: 10px;
    }
    .plane.plane-1 {
      left: 20px;
    }
  }
`
