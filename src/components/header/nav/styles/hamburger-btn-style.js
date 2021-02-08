import styled from '@emotion/styled'
import { colors } from '../../../global/global'

const HamburgerStyle = styled('div')`
    .bar1,
    .bar2,
    .bar3{
        width: 15px;
        height: 2.1px;
        background-color: ${colors.darkNeutral};
        margin: 3px;
        transition: 0.4s;
    }

    .change .bar1 {
        -webkit-transform: rotate(-45deg) translate(0px, 9.5px);
        transform: rotate(-50deg) translate(-2px, 9.5px);
    }

    .change .bar2 {opacity: 0;}

    .change .bar3 {
        -webkit-transform: rotate(45deg) translate(3px, -6px);
        transform: rotate(50deg) translate(2.1px, -6px);
    }

    .change:focus,
    .container:focus {
        outline: none;
    }

`

export default HamburgerStyle