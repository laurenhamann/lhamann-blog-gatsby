import styled from '@emotion/styled'
import { flex } from '../../../global/flex-box'
import { clamps } from '../../../global/clamps'
import { colors } from '../../../global/colors'


const NavStyle = styled('nav')`
    ${flex.flexRow}

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
    ul.hidden{
        opacity: 0;
    }
    .visible {
        transition: opacity 0.6s;
        opacity: 1;
    }
    ul {
        ${props => props.width > 768 ? `
            ${flex.flexRow}
            ${flex.justifySB}
            ${flex.alignItemsCenter}
            margin-bottom: ${clamps.marginBottom};
            li {
                margin-right: ${clamps.xsMargin};
            }
        ` : `
            margin-right: ${clamps.xsMargin};
        `}
    }

`

export default NavStyle;