import styled from 'styled-components'
import { colors } from '@/constants/colors'

export default styled.div`
  position: relative;
  padding: 12px 50px;
  width: fit-content;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 40px rgba(145, 92, 182, 0.7);
  cursor: pointer;
  .text {
    position: relative;
    z-index: 2;
    font-size: 14px;
    font-weight: bold;
  }
  .fill {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 150%;
    background-image: linear-gradient(to right, ${colors.purplePrimary}, ${colors.purpleSecondary});
    border-radius: 5px;
    transition: all 0.4s ease;
    z-index: 1;
  }
  &:hover {
    .fill {
      transform: translateX(-20%);
    }
  }
`
