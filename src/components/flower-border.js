import React from 'react';
import { css } from '@emotion/react';
import flowerMid from '../images/flower-circle-about.svg';
import flowerEnd from '../images/flower-circle-two-about.svg';
const breakpoints = [768, 1024, 1400, 1600]
const mq = breakpoints.map(
    bp => `@media (min-width: ${bp}px)`
)
const FlowerBorder = () => (
    <div className="flex-border" css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:40vw;
        margin: 0.5vh auto 1vh auto;
        ${mq[0]} {
            justify-content: center;
            img{
                padding: 0 1.5vw;
            }
        }
        ${mq[1]} {
            img{
                width: 85px;
                height: 85px;
            }
        }
        ${mq[2]} {
            img{
                width: 95px;
                height: 95px;
            }
        }
    `}>
        <img src={flowerEnd} alt="border-family" />
        <img src={flowerMid} alt="border-family" />
        <img src={flowerEnd} alt="border-family" />
    </div>
)

export default FlowerBorder;