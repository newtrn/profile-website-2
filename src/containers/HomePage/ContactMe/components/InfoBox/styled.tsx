import styled from 'styled-components'
import { colors } from '@/constants/colors'

export default styled.div`
  .icon-wrapper {
    font-size: 18px;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-image: linear-gradient(to right, ${colors.purplePrimary}, ${colors.purpleSecondary});
  }
  .info-wrapper div {
    user-select: text;
  }
`
