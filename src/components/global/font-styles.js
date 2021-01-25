import { colors } from './colors';
import { clamps } from './clamps';
const h1Style = `
    font-family: "Open Sans Condensed";
    font-weight: 700;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h1Size};
    text-align: center;
    margin-bottom: ${clamps.marginBottom};
    
`
const h2Style = `
    font-family: "Elsie Swash Caps";
    font-weight: 400;
    color: ${colors.accent};
    font-size: ${clamps.h2Size};
    text-align: center;
`
const h3Style = `
    font-family: "Open Sans Condensed";
    font-weight: 300;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h3Size};
    text-align: center;
`
const h4Style = `
    font-family: "Open Sans";
    font-weight: 700;
    font-style: italic;
    color: ${colors.darkNeutral};
    font-size: ${clamps.h4Size};
    text-align: center;
`

const pStyle = `
    font-family: "Open Sans";
    font-weight: 400;
    color: ${colors.darkNeutral};
    font-size: ${clamps.pSize};
`

const anchorStyle = `
    font-family: "Elsie";
    font-weight: 400;
    color: ${colors.mainBold};
    text-decoration: none;
    font-size: ${clamps.anchorSize};
    &:hover {
        font-style: italic;
    }
    &.page-links {
        text-decoration: underline;
        font-size: ${clamps.spanSize};
    }
`
const navStyle = `
    font-family: "Open Sans";
    font-weight: 400;
    color: ${colors.darkNeutral};
    font-size: ${clamps.navSize};
    transition: all 0.3s ease-in-out;
    &:hover,
    &.active {
        font-weight: 700;
        color: ${colors.accent}
    }
`

const logoStyle = `
    font-family: "Elsie Swash Caps";
    font-weight: 900;
    color: ${colors.mainBold};
    text-decoration: none;
    font-size: ${clamps.logoSize};
`

const spanStyle = `
    font-family: "Open Sans";
    font-weight: 300;
    font-style: italic;
    color: ${colors.darkNeutral};
    font-size: ${clamps.spanSize};
`

const introStyle = `
    font-family: "Open Sans Condensed";
    font-weight: 700;
    color: ${colors.mainComp};
    font-size: ${clamps.introSize};
`

const largeLink =`
    font-family: "Open Sans";
    font-weight: 300;
    color: ${colors.accent};
    text-align: center;
    margin-top: ${clamps.marginTop};
    margin-bottom: ${clamps.xsMargin};
    font-size: ${clamps.largeLinkSize};
    &:hover {
        font-style: italic;
        text-decoration: underline;
    }
`
const typographyStyles = `
    h1 {
        ${h1Style}
    }

    h2 {
        ${h2Style}
    }

    h3 {
        ${h3Style}
    }

    h4 {
        ${h4Style}
    }

    p {
        ${pStyle}
    }

    .page-links {
        ${anchorStyle}
    }
    ul li{
        ${pStyle}
    }
    nav ul li a {
        ${navStyle}
    }

    .logo {
        ${logoStyle}
    }

    .intro {
        ${introStyle}
    }

    .small {
        ${spanStyle}
    }
    .large-link {
        ${largeLink}
    }

`
export default typographyStyles;