import styled from 'styled-components'
import { colors } from '@/constants/colors'
import { MAX_WIDTH_SMALL_MOBILE } from '@/constants/screen'

export default styled.div`
  background: ${colors.purpleBgQuaternary};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .slick-track {
    overflow: visible;
  }

  .slick-prev {
    left: -50px;
    width: 50px;
    height: 50px;
    &:before {
      content: '\\e900';
      font-family: 'icomoon' !important;
      speak: never;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;

      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 50px;
    }
  }

  .slick-next {
    width: 50px;
    height: 50px;
    right: -50px;
    text-align: right;
    &:before {
      content: '\\e901';
      font-family: 'icomoon' !important;
      speak: never;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;

      /* Better Font Rendering =========== */
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 50px;
    }
  }

  .slick-list {
    .slick-track {
      overflow: visible;
    }
    .slick-slide {
      transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
      &:hover {
        z-index: 99 !important;
        position: relative;
      }
    }
  }
  .project-card-wrapper {
    padding: 30px;
    .project-card {
      background: transparent;
      box-shadow: none;
      padding: 0;
      padding-top: 75%;
      position: relative;
      border-radius: 10px;
      .project-img-wrapper {
        position: absolute;
        padding-top: 75%;
        width: 100%;
        top: 0;
        left: 0;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.8) 0px 10px 20px, rgba(0, 0, 0, 0.5) 0px 6px 6px;
        transition: all 0.2s ease-in-out;
        z-index: 2;
        .img-placeholder {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          border-radius: 10px;
        }
        img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          object-fit: cover;
          border-radius: 10px;
        }
      }
      .project-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all 0.2s ease-in-out;
        background: linear-gradient(180deg, rgba(153, 16, 81, 1) 0%, rgba(84, 38, 138, 1) 100%);
        padding: 8px;
        border-radius: 10px;
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.8) 0px 10px 20px, rgba(0, 0, 0, 0.5) 0px 6px 6px;
      }
      &:hover {
        .project-img-wrapper {
          transform: translate(-20px, -20px);
        }
        .project-info {
          transform: translate(20px, 20px);
        }
      }
    }
  }
  @media screen and (max-width: ${MAX_WIDTH_SMALL_MOBILE}) {
    .slick-prev {
      left: -25px;
      width: 25px;
      height: 25px;
      &:before {
        font-size: 25px;
      }
    }
    .slick-next {
      right: -25px;
      width: 25px;
      height: 25px;
      &:before {
        font-size: 25px;
      }
    }
    .project-card-wrapper {
      padding: 20px;
      .project-card {
        .project-img-wrapper {
          box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 10px, rgba(0, 0, 0, 0.5) 0px 6px 6px;
        }
        .project-info {
          box-shadow: rgba(0, 0, 0, 0.8) 0px 5px 10px, rgba(0, 0, 0, 0.5) 0px 6px 6px;
        }
      }
    }
  }
`
