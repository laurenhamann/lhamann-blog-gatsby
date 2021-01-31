import { space } from './spacing'
import { width } from './div-width'
import { fontSize } from './font-size'
//margins
const marginTop = `
    clamp(${space.marginTB.min}, ${space.marginTB.pef}, ${space.marginTB.max})
`

const marginBottom = `
    clamp(${space.marginTB.min}, ${space.marginTB.pef}, ${space.marginTB.max})
`

const marginLeft = `
    clamp(${space.marginRL.min}, ${space.marginRL.pef}, ${space.marginRL.max})
`

const marginRight = `
    clamp(${space.marginRL.min}, ${space.marginRL.pef}, ${space.marginRL.max})
`
const xsMargin = `
    clamp(${space.xsMargin.min}, ${space.xsMargin.pef}, ${space.xsMargin.max})
`
const medMargin =`
    clamp(${space.medMargin.min}, ${space.medMargin.pef}, ${space.medMargin.max})
`

//widths
const gridWidth =`
    clamp(${width.gridTwoToThree.min}, ${width.gridTwoToThree.pef}, ${width.gridTwoToThree.max})
`
const blogColumnWidth =`
    clamp(${width.previewDisplay.min}, ${width.previewDisplay.pef}, ${width.previewDisplay.max})
`
const heroBannerWidth =`
    clamp(${width.bannerImageWidth.min}, ${width.bannerImageWidth.pef}, ${width.bannerImageWidth.max})
`
const heroBannerHeight =`
    clamp(${width.bannerImageHeight.min}, ${width.bannerImageHeight.pef}, ${width.bannerImageHeight.max})
`
const headerWidth =`
    clamp(${width.headerWidth.min}, ${width.headerWidth.pef}, ${width.headerWidth.max})
`
const aboutTitleWidth =`
    clamp(${width.aboutTitleWidth.min}, ${width.aboutTitleWidth.pef}, ${width.aboutTitleWidth.max})
`
const articleWidth =`
    clamp(${width.article.min}, ${width.article.pef}, ${width.article.max})
`
const articleDivWidth =`
    clamp(${width.blogPreviewArticleWidth.min}, ${width.blogPreviewArticleWidth.pef}, ${width.blogPreviewArticleWidth.max})
`
const blogImageDivWidth =`
    clamp(${width.blogImageDivWidth.min}, ${width.blogImageDivWidth.pef}, ${width.blogImageDivWidth.max})
`
const blogPreviewWidth =`
    clamp(${width.blogPreviewDivWidth.min}, ${width.blogPreviewDivWidth.pef}, ${width.blogPreviewDivWidth.max})
`

const projectPreviewWidth =`
    clamp(${width.gridUpToFour.min}, ${width.gridUpToFour.pef}, ${width.gridUpToFour.max})
`
const projectPreviewDivWidth =`
    clamp(${width.gridUpToFourDiv.min}, ${width.gridUpToFourDiv.pef}, ${width.gridUpToFourDiv.max})
`
const fullSizeImage =`
    clamp(${width.fullSizeImage.min}, ${width.fullSizeImage.pef}, ${width.fullSizeImage.max})
`

//font-size
const h1Size =`
    clamp(${fontSize.h1.min},${fontSize.h1.pef}, ${fontSize.h1.max})
`

const h2Size =`
    clamp(${fontSize.h2.min},${fontSize.h2.pef}, ${fontSize.h2.max})
`

const h3Size =`
    clamp(${fontSize.h3.min},${fontSize.h3.pef}, ${fontSize.h3.max})
`

const h4Size =`
    clamp(${fontSize.h4.min},${fontSize.h4.pef}, ${fontSize.h4.max})
`

const pSize = `
    clamp(${fontSize.p.min},${fontSize.p.pef}, ${fontSize.p.max})
`

const anchorSize = `
    clamp(${fontSize.anchor.min},${fontSize.anchor.pef}, ${fontSize.anchor.max})
`

const navSize =`
    clamp(${fontSize.nav.min},${fontSize.nav.pef}, ${fontSize.nav.max})
`

const logoSize =`
    clamp(${fontSize.logo.min},${fontSize.logo.pef}, ${fontSize.logo.max})
`

const spanSize =`
    clamp(${fontSize.span.min},${fontSize.span.pef}, ${fontSize.span.max})
`

const introSize =`
    clamp(${fontSize.intro.min},${fontSize.intro.pef}, ${fontSize.intro.max})
`

const largeLinkSize =`
clamp(${fontSize.largeLink.min},${fontSize.largeLink.pef}, ${fontSize.largeLink.max})
`

export const clamps = { marginBottom, marginTop, marginLeft, marginRight, xsMargin, medMargin, gridWidth, blogColumnWidth, heroBannerWidth, heroBannerHeight, blogImageDivWidth, blogPreviewWidth, articleDivWidth, projectPreviewDivWidth, projectPreviewWidth, headerWidth, aboutTitleWidth, articleWidth, fullSizeImage, largeLinkSize, introSize, spanSize, logoSize, navSize, anchorSize, pSize, h1Size, h2Size, h3Size, h4Size };