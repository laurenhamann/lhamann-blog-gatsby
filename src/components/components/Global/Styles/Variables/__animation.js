// ANIMATION
const pink = ["#E68590", "#EA5D6D", "#A63F4B", "#AB071A", "#801723" ];
const pastel = ["#A86870", "#B06C74", "#B87078", "#C77780", "#E68590", "#BC5F6A", "#A74C57", "#9C434D", "#913943"];

const colorChange =`
    @keyframes colorChange {
        0% {color: ${pink[0]};}
        12.5% {color: ${pink[1]};}
        25% {color: ${pink[2]};}
        37.5% {color: ${pink[3]};}
        50% {color: ${pink[4]};}
        62.5% {color: ${pink[3]};}
        75% {color: ${pink[2]};}
        87.5% {color: ${pink[1]};}
        100% {color: ${pink[0]};}

    }`

    const pastelRainbow =`
    @keyframes pastelRainbow {
        0% {color: ${pastel[0]};}
        7% {color: ${pastel[1]};}
        14% {color: ${pastel[2]};}
        21% {color: ${pastel[3]};}
        28% {color: ${pastel[4]};}
        35% {color: ${pastel[5]};}
        42% {color: ${pastel[6]};}
        49% {color: ${pastel[7]};}
        56% {color: ${pastel[8]};}
        61% {color: ${pastel[7]};}
        68% {color: ${pastel[6]};}
        75% {color: ${pastel[5]};}
        82% {color: ${pastel[4]};}
        89% {color: ${pastel[3]};}
        95% {color: ${pastel[2]};}
        98% {color: ${pastel[1]};}
        100% {color: ${pastel[0]};}

    }`
const strokeChange =  `
    @keyframes strokeChange {
        0% {stroke: ${pink[0]};}
        12.5% {stroke: ${pink[1]};}
        25% {stroke: ${pink[2]};}
        37.5% {stroke: ${pink[3]};}
        50% {stroke: ${pink[4]};}
        62.5% {stroke: ${pink[3]};}
        75% {stroke: ${pink[2]};}
        87.5% {stroke: ${pink[1]};}
        100% {stroke: ${pink[0]};}

    }`

    
const strokeColor = (i) => `
    @keyframes strokeColor {
        0% {stroke: ${pink[i]}10;}
        50% {stroke: ${pink[i]}ff;}
        100% {stroke: ${pink[i]}10;}
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
const animation = { 
    colorChange,
    strokeChange,
    dash,
    rainbowFill,
    strokeColor,
    pastelRainbow }

export { animation}