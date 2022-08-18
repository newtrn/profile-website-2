import styled from 'styled-components'
import { MAX_WIDTH_TABLET, MAX_WIDTH_MOBILE } from '@/constants/screen'

export default styled.div`
  width: 100%;
  height: 100%;
  .img-wrapper {
    position: relative;
    padding: 15px;
    &:after {
      content: '';
      width: 180px;
      height: 200px;
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      background: linear-gradient(0deg, rgba(153, 16, 81, 1) 0%, rgba(84, 38, 138, 1) 100%);
      z-index: 1;
      animation: expand 14s ease-in-out infinite;
    }
    &:before {
      content: '';
      width: 180px;
      height: 200px;
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
      background: linear-gradient(180deg, rgba(153, 16, 81, 1) 0%, rgba(84, 38, 138, 1) 100%);
      z-index: 1;
      animation: expand 14s ease-in-out infinite 2s;
    }
    img {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
    .profile-img-caption {
      z-index: 3;
      position: absolute;
      right: -80px;
      top: 50px;
      max-width: 150px;
      &:after {
        content: '';
        position: absolute;
        width: 60px;
        height: 5px;
        bottom: -15px;
        left: 0;
        background: white;
      }
    }
  }

  @keyframes expand {
    0% {
      width: 180px;
      height: 200px;
    }
    50% {
      width: 280px;
      height: 120px;
    }
    100% {
      width: 180px;
      height: 200px;
    }
  }

  @media screen and (max-width: ${MAX_WIDTH_TABLET}) {
    .img-wrapper {
      &:after {
        content: '';
        width: 120px;
        height: 150px;
      }
      &:before {
        content: '';
        width: 120px;
        height: 150px;
      }
    }

    @keyframes expand {
      0% {
        width: 120px;
        height: 150px;
      }
      50% {
        width: 80px;
        height: 100px;
      }
      100% {
        width: 120px;
        height: 150px;
      }
    }
  }

  @media screen and (max-width: ${MAX_WIDTH_MOBILE}) {
    .img-wrapper .profile-img-caption {
      right: -50px;
      top: 25px;
      max-width: 100px;
    }
  }
`
