import styled from 'styled-components'

export default styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  span {
    display: block;
    font-size: 32px;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    animation: scrolldown 1.2s ease-in-out infinite 0.15s;
    &:last-child {
      bottom: 25px;
      animation: scrolldown 1.2s ease-in-out infinite;
    }
  }

  @keyframes scrolldown {
    0% {
      transform: translateY(20%) translateX(-50%);
      opacity: 0.7;
    }
    50% {
      transform: translateY(0%) translateX(-50%);
      opacity: 0.2;
    }
    100% {
      transform: translateY(20%) translateX(-50%);
      opacity: 0.7;
    }
  }
`
