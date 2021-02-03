import styled from '@emotion/styled'
import {animation, clamps, flex } from '../../../global/global'
let num;  
function color() {
    num =  Math.floor(Math.random() * 5);
    console.log(num);
}
color()
// setInterval(color, 4000) figure out how to reload the new num

const LinkStyle = styled('section')`
${animation.strokeColor(num)}
    .mid-link {
        margin: ${clamps.marginTop} ${clamps.marginLeft} ${clamps.marginBottom} ${clamps.marginRight};
        ${flex.flexRow}
        ${flex.justifyCenter}
        ${flex.alignItemsCenter}
        a {
            margin-top: 0;
            padding: 0 ${clamps.marginTop};
        }
    }

    svg {
        #top,
        #bottom,
        #left,
        #right {
            stroke: transparent;
        }
    }

        #top {
            animation: strokeColor 4s linear infinite forwards;
        }
        #left {
            animation: strokeColor 4s 1s infinite forwards;
        }
        #bottom {
            animation: strokeColor 4s 2s infinite forwards;
        }
        #right {
            animation: strokeColor 4s 3s infinite forwards;
        }


`;

export default LinkStyle;