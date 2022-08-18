import styled from 'styled-components'
import { colors } from '@/constants/colors'

export default styled.div`
  width: 100%;
  height: 100%;
  background: ${colors.purpleBgQuaternary};
  font-size: 50px;
  .icon-image {
    background: linear-gradient(180deg, rgba(153, 16, 81, 1) 0%, rgba(84, 38, 138, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
