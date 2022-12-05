import React from 'react'
import styled from '@emotion/styled'
import { Link }  from 'gatsby'
import SectionDivider from '../../Global/section-divider__'
import { clamps, flex, animation } from '../../Global/Styles/__global'

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
        margin: ${clamps.margin_top} ${clamps.margin_left} ${clamps.margin_bottom} ${clamps.margin_right};
        ${flex.flexRow}
        ${flex.justifyCenter}
        ${flex.alignItemsCenter}
        a {
            margin-top: 0;
            padding: 0 ${clamps.margin_top};
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

const MidLinks = () => (
    <>
        <SectionDivider />
        <LinkStyle>
            <div className="mid-link">
                <Link to="/projects" className="large-link"> Back to all Projects</Link>
            </div>
        </LinkStyle>
    </>
)

export default MidLinks;