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
    div>ul>li::before {
        content:"\\2022";
        animation-name: colorChange;
        animation-duration: 4s;
        animation-iteration-count: infinite;
        animation-fill-mode: forwards;
    }
`

export default animation;