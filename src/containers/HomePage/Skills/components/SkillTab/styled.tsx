import styled from 'styled-components'
import { colors } from '@/constants/colors'

export default styled.div`
  padding: 5px 0;
  .tab {
    padding: 0 20px;
    color: ${colors.greyText};
    position: relative;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:first-child:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      width: 2px;
      background-color: ${colors.greyText};
    }
    &.active {
      color: ${colors.greenPrimary};
      .glow-light {
        opacity: 1;
      }
    }
    .glow-light {
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: ${colors.greenPrimary};
      margin-right: 10px;
      box-shadow: 0 0 5px 1px ${colors.greenPrimary};
      opacity: 0;
      transition: all 0.2s ease-in-out;
    }
  }
`
