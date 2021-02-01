import { space } from './spacing'

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

const aboutTitleWidth = {
    min: headerWidth.min,
    pef: `calc(${headerWidth.pef} * 0.6)`,
    max: `calc(${headerWidth.max} * 0.7)`
}

const article = {
    min: headerWidth.min,
    pef: `calc(${headerWidth.pef} * 0.8)`,
    max: `calc(${headerWidth.max} * 0.8)`
}

// blog preview index 
const blogImageDivWidth = {
    min: "calc(100% * 0.5)",
    pef: "45%",
    max: `calc(${headerWidth.max} * 0.4)`
}
const blogPreviewArticleWidth = {
    min: "calc(100% * 0.5)",
    pef: "55%",
    max: `calc(${headerWidth.max} * 0.6)`
}

const blogPreviewDivWidth = {
    min: `calc(${headerWidth.min} - (${space.xsMargin.min} * 2))`,
    pef: "80vw",
    max: `calc(${headerWidth.max} - (${space.xsMargin.max} * 2))`
}

// grid / columns

const gridUpToFour = {
    min: `calc(${headerWidth.min} - (${space.xsMargin.min} * 2))`,
    pef: "80vw",
    max: `calc(${headerWidth.max} - (${space.xsMargin.max} * 2))`
}

const gridUpToFourDiv = {
    min: `${gridUpToFour.min}`,
    pef: `calc((${gridUpToFour.pef} - (${space.medMargin.pef} * 2)) / 4 )`,
    max: `calc((${gridUpToFour.max} - (${space.medMargin.max} * 2)) / 4 )`
}

// images
const fullSizeImage = {
    min: '220px',
    pef: '34vw',
    max: '714px'
}
export const width = { gridTwoToThree, previewDisplay, bannerImageWidth, bannerImageHeight, headerWidth, aboutTitleWidth, article, blogImageDivWidth, blogPreviewArticleWidth, blogPreviewDivWidth, gridUpToFour, gridUpToFourDiv, fullSizeImage };