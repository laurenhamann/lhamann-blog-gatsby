import { gradients } from './gradients';

const animation = `
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

    }

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

    }

    @keyframes dash {
        to {
            stroke-dashoffset: 0;
        }
    }
    div>ul>li::before {
        content:"\\2022";
        animation-name: colorChange;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }

    .svg-border {
        svg{
            #Artboard {
                animation: 
                    strokeChange 2s forwards infinite,
                    dash 9s 3s 1 forwards;
                stroke-dasharray: 1000;
                stroke-dashoffset: 1000;
            }
        }
    }
`

export default animation;