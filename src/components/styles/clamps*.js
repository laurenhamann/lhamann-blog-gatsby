import { width } from './div-width*';
import { h1, marginTB, marginRL, marginXS, marginMed, gridTwoToThree,  previewDisplay, bannerImageWidth, bannerImageHeight, h2, h3, h4, p,  largeLink, spanSmall, span, logo, intro, headerWidth, fullSizeImage, anchor, nav  } from './styles*';
//margins
const margin_top = `
    clamp(${marginTB.min}, ${marginTB.pef}, ${marginTB.max})
`

const margin_bottom = `
    clamp(${marginTB.min}, ${marginTB.pef}, ${marginTB.max})
`

const margin_left = `
    clamp(${marginRL.min}, ${marginRL.pef}, ${marginRL.max})
`

const margin_right = `
    clamp(${marginRL.min}, ${marginRL.pef}, ${marginRL.max})
`
const xs_margin = `
    clamp(${marginXS.min}, ${marginXS.pef}, ${marginXS.max})
`
const med_margin =`
    clamp(${marginMed.min}, ${marginMed.pef}, ${marginMed.max})
`

//widths
const grid_width =`
    clamp(${gridTwoToThree.min}, ${gridTwoToThree.pef}, ${gridTwoToThree.max})
`
const blog_column_width =`
    clamp(${previewDisplay.min}, ${previewDisplay.pef}, ${previewDisplay.max})
`
const hero_banner_width =`
    clamp(${bannerImageWidth.min}, ${bannerImageWidth.pef}, ${bannerImageWidth.max})
`
const hero_banner_height =`
    clamp(${bannerImageHeight.min}, ${bannerImageHeight.pef}, ${bannerImageHeight.max})
`
const header_width =`
    clamp(${headerWidth.min}, ${headerWidth.pef}, ${headerWidth.max})
`

const about_title_width =`
    clamp(${width.aboutTitleWidth.min}, ${width.aboutTitleWidth.pef}, ${width.aboutTitleWidth.max})
`
const article_width =`
    clamp(${width.article.min}, ${width.article.pef}, ${width.article.max})
`
const article_div_width =`
    clamp(${width.blogPreviewArticleWidth.min}, ${width.blogPreviewArticleWidth.pef}, ${width.blogPreviewArticleWidth.max})
`
const blog_img_div_width =`
    clamp(${width.blogImageDivWidth.min}, ${width.blogImageDivWidth.pef}, ${width.blogImageDivWidth.max})
`
const blog_preview_width =`
    clamp(${width.blogPreviewDivWidth.min}, ${width.blogPreviewDivWidth.pef}, ${width.blogPreviewDivWidth.max})
`

const grid_section_width =`
    clamp(${width.gridSection.min}, ${width.gridSection.pef}, ${width.gridSection.max})
`
const grid_inner_div_width =`
    clamp(${width.gridDiv.min}, ${width.gridDiv.pef}, ${width.gridDiv.max})
`
const full_size_image =`
    clamp(${fullSizeImage.min}, ${fullSizeImage.pef}, ${fullSizeImage.max})
`

const input_width =`
    clamp(${width.inputWidth.min}, ${width.inputWidth.pef}, ${width.inputWidth.max})
`
const prim_btn =`
    clamp(${width.primBtn.min}, ${width.primBtn.pef}, ${width.primBtn.max})
`
const secondary_btn =`
    clamp(${width.secondaryBtn.min}, ${width.secondaryBtn.pef}, ${width.secondaryBtn.max})
`
const filter_div_width =`
    clamp(${width.filterDivWidth.min}, ${width.filterDivWidth.pef}, ${width.filterDivWidth.max})
`

//font-size
const h1_size =`
    clamp(${h1.min},${h1.pef}, ${h1.max})
`

const h2_size =`
    clamp(${h2.min},${h2.pef}, ${h2.max})
`

const h3_size =`
    clamp(${h3.min},${h3.pef}, ${h3.max})
`

const h4_size =`
    clamp(${h4.min},${h4.pef}, ${h4.max})
`

const p_size = `
    clamp(${p.min},${p.pef}, ${p.max})
`

const anchor_size = `
    clamp(${anchor.min},${anchor.pef}, ${anchor.max})
`

const nav_size =`
    clamp(${nav.min},${nav.pef}, ${nav.max})
`

const logo_size =`
    clamp(${logo.min},${logo.pef}, ${logo.max})
`

const span_size =`
    clamp(${span.min},${span.pef}, ${span.max})
`

const intro_size =`
    clamp(${intro.min},${intro.pef}, ${intro.max})
`

const large_link_size =`
clamp(${largeLink.min},${largeLink.pef}, ${largeLink.max})
`

const cat_tags=`
    clamp(${spanSmall.min}, ${spanSmall.pef}, ${spanSmall.max})
`


export const clamps = { margin_bottom, margin_top, margin_left, margin_right, xs_margin, med_margin, grid_width, blog_column_width, hero_banner_width, hero_banner_height, blog_img_div_width, blog_preview_width, article_div_width, grid_section_width, grid_inner_div_width, header_width, about_title_width, article_width, full_size_image, input_width, prim_btn, secondary_btn, filter_div_width, intro_size, span_size, logo_size, nav_size, anchor_size, p_size, h1_size, h2_size, h3_size,  h4_size, large_link_size, cat_tags };