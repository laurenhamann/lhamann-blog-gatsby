// SPACING
const marginRL = {
    min: "10px",
    pef: "2vw",
    max: "90vw"
}

const marginTB = {
    min: "15px",
    pef: "5.3vw",
    max: "100px"
}

const sectionBtnMB = {
    min: "5px",
    pef: "1.1vw",
    max: "15px"
}

const marginXS = {
    min: "4px",
    pef: "0.5vw",
    max: "12px"
}

const marginMed = {
    min: "15px",
    pef: "2.5vw",
    max: "40px"
}


// WIDTHS
const gridTwoToThree = {
    min: "90px",
    pef: "20vw",
    max: "300px"
}
const previewDisplay = {
    min: "240px",
    pef: "75vw",
    max: "850px"
}

const bannerImageWidth = {
    min: "111px",
    pef: "12vw",
    max: "280px"
}

const bannerImageHeight = {
    min: "111px",
    pef: "12vw",
    max: "280px"
}

const headerWidth = {
    min: "250px",
    pef: "90vw",
    max: "1500px"
}
// Images
const fullSizeImage = {
    min: '220px',
    pef: '34vw',
    max: '714px'
}

// Font- Size
const  h1 = {
    min: "28px",
    pef: "4.4vw",
    max: "66px"
}

const h2 = {
    min: "24px",
    pef: "3.2vw",
    max: "52px"
}

const h3 = {
    min: "16px",
    pef: "2.39vw",
    max: "40px"
}

const h4 = {
    min: "14px",
    pef: "1.8vw",
    max: "36px"
}

const p = {
    min: "10px",
    pef: "1.5vw",
    max: "22px"
}

const nav = {
    min: "16px",
    pef: "1.8vw",
    max: "24px"
}

const anchor = {
    min: "14px",
    pef: "1.8vw",
    max: "24px"
}

const intro = {
    min: "18px",
    pef: "2.1vw",
    max: "36px"
}

const logo = {
    min: "32px",
    pef: "5.3vw",
    max: "76px"
}

const span = { 
    min: "8px",
    pef: "1.2vw",
    max: "18px"
}

const spanSmall = { 
    min: "8px",
    pef: "1.1vw",
    max: "16px"
}

const largeLink = {
    min: "12px",
    pef: "1.8vw",
    max: "34px"
}

//COLORS
const colors = {
    main_bold: '#e68590',
    main_comp: '#A86870',
    light_neutral: '#FAEFF0',
    dark_neutral: '#092421',
    accent: '#913943'
}

//MARGINS
const center = `
    margin-left: auto;
    margin-right: auto;
`

const left =`
    margin-left: 1px;
    margin-right: auto;
`

const right =`
    margin-left: auto;
    margin-right: 1px;
`
const margin =  {
    center: center,
    left: left,
    right: right
}

// FLEX BOX 

const flexRow = `
    display: flex;
    flex-direction: row;
`

const flexCol = `
    display: flex;
    flex-direction: column;
`

const justifySB = `
    justify-content: space-between;
`

const justifySA = `
    justify-content: space-around;
`

const justifyCenter = `
    justify-content: center;
`

const alignItemsCenter = `
    align-items: center;
`

const alignItemsTop = `
    align-content: flex-start;
`

const alignItemsBottom = `
    align-content: flex-end;
`

const flex = {
    alignItemsBottom: alignItemsBottom,
    alignItemsTop: alignItemsTop,
    alignItemsCenter: alignItemsCenter,
    justifyCenter: justifyCenter,
    justifySA: justifySA,
    justifySB: justifySB,
    flexCol: flexCol,
    flexRow: flexRow
}


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

export {largeLink, spanSmall, span, logo, intro, anchor, nav, p, h4, h3, h2, h1, headerWidth, fullSizeImage, bannerImageHeight, gridTwoToThree, bannerImageWidth,  previewDisplay,  marginXS, marginMed, marginRL, marginTB, sectionBtnMB, colors, margin, flex, animation}