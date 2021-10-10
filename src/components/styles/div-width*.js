import { headerWidth, marginXS,  marginMed, fullSizeImage } from "./styles*"

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
    min: `calc((${headerWidth.min} - (${marginXS.min} * 2)) / 2)`,
    pef: "45%",
    max: `calc(${headerWidth.max} * 0.3)`
}

const blogPreviewArticleWidth = {
    min: "calc(100% * 0.5)",
    pef: "55%",
    max: `calc(${headerWidth.max} * 0.6)`
}

const blogPreviewDivWidth = {
    min: `calc(${headerWidth.min} - (${marginXS.min} * 2))`,
    pef: "80vw",
    max: `calc(${headerWidth.max} - (${marginXS.max} * 2))`
}

// grid / columns

const gridSection = {
    min: `calc(${headerWidth.min} - (${marginXS.min} * 2))`,
    pef: "80vw",
    max: `calc(${headerWidth.max} - (${marginXS.max} * 2))`
}

const gridDiv = {
    min: `${gridSection.min}`,
    pef: `calc((${gridSection.pef} - (${marginMed.pef} * 2)) / 4 )`,
    max: `calc((${gridSection.max} - (${marginMed.max} * 2)) / 4 )`
}

//input boxes

const inputWidth = {
    min: `calc(${fullSizeImage.min} - 20px)`,
    pef: `calc(${fullSizeImage.pef} - 50px)`,
    max: `calc(${fullSizeImage.max} - 50px)`
}

// buttons
const primBtn = {
    min: `calc(${inputWidth.min} / 2)`,
    pef: `calc(${inputWidth.pef} / 3)`,
    max: `calc(${inputWidth.max} / 3)`
}

const secondaryBtn = {
    min: `calc(${primBtn.min} / 2)`,
    pef: `calc(${primBtn.pef} / 2)`,
    max: '40px'
}

// filter menu
const filterDivWidth = {
    min: `${headerWidth.min}`,
    pef: '40vw',
    max: '450px'
}

export const width = { aboutTitleWidth, article, blogImageDivWidth, blogPreviewArticleWidth, blogPreviewDivWidth, gridSection, gridDiv, inputWidth, primBtn, secondaryBtn, filterDivWidth };