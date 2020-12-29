import React from 'react';
import { css } from '@emotion/react';
import flowerMid from '../images/flower-circle-about.svg';
import flowerEnd from '../images/flower-circle-two-about.svg';

const FlowerBorder = () => (
    <div className="flex-border" css={css`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:40vw;
        margin-left: auto;
        margin-right: auto;
    `}>
        <img src={flowerEnd} alt="border-family" />
        <img src={flowerMid} alt="border-family" />
        <img src={flowerEnd} alt="border-family" />
    </div>
)

export default FlowerBorder;