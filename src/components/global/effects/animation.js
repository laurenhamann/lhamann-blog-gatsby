import { gradients } from '../color/gradients';


const colorChange =`
    @keyframes colorChange {
        0% {color: ${gradients.pink[0]};}
        12.5% {color: ${gradients.pink[1]};}
        25% {color: ${gradients.pink[2]};}
        37.5% {color: ${gradients.pink[3]};}
        50% {color: ${gradients.pink[4]};}
        62.5% {color: ${gradients.pink[3]};}
        75% {color: ${gradients.pink[2]};}
        87.5% {color: ${gradients.pink[1]};}
        100% {color: ${gradients.pink[0]};}

    }`


const strokeChange =  `
    @keyframes strokeChange {
        0% {stroke: ${gradients.pink[0]};}
        12.5% {stroke: ${gradients.pink[1]};}
        25% {stroke: ${gradients.pink[2]};}
        37.5% {stroke: ${gradients.pink[3]};}
        50% {stroke: ${gradients.pink[4]};}
        62.5% {stroke: ${gradients.pink[3]};}
        75% {stroke: ${gradients.pink[2]};}
        87.5% {stroke: ${gradients.pink[1]};}
        100% {stroke: ${gradients.pink[0]};}

    }`

const strokeColor = (i) => `
    @keyframes strokeColor {
        0% {stroke: ${gradients.pink[i]}10;}
        50% {stroke: ${gradients.pink[i]}ff;}
        100% {stroke: ${gradients.pink[i]}10;}
    }
`

const dash =`
    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }
`

const rainbowFill = `
    @keyframes colorFill {
        to {
            fill-opacity: 1;
        }
    }
`


export const animation = { colorChange,
                            strokeChange,
                            dash,
                            rainbowFill,
                            strokeColor }