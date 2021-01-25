import { margin } from './spacing'
import { width } from './div-width'
import { fontSize } from './font-size'
const marginTop = `
    clamp(${margin.marginTB.min}, ${margin.marginTB.pef}, ${margin.marginTB.max})
`

const marginBottom = `
    clamp(${margin.marginTB.min}, ${margin.marginTB.pef}, ${margin.marginTB.max})
`

const marginLeft = `
    clamp(${margin.marginRL.min}, ${margin.marginRL.pef}, ${margin.marginRL.max})
`

const marginRight = `
    clamp(${margin.marginRL.min}, ${margin.marginRL.pef}, ${margin.marginRL.max})
`
const xsMargin = `
    clamp(${margin.xsMargin.min}, ${margin.xsMargin.pef}, ${margin.xsMargin.max})
`
const medMargin =`
    clamp(${margin.medMargin.min}, ${margin.medMargin.pef}, ${margin.medMargin.max})
`
const gridWidth =`
    clamp(${width.gridTwoToThree.min}, ${width.gridTwoToThree.pef}, ${width.gridTwoToThree.max})
`
const blogColumnWidth =`
    clamp(${width.previewDisplay.min}, ${width.previewDisplay.pef}, ${width.previewDisplay.max})
`

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
export const clamps = { marginBottom, marginTop, marginLeft, marginRight, xsMargin, medMargin, gridWidth, blogColumnWidth, largeLinkSize, introSize, spanSize, logoSize, navSize, anchorSize, pSize, h1Size, h2Size, h3Size, h4Size };