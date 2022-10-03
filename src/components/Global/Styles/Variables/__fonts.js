import { colors } from './__colors';
import { clamps } from './__clamps';

const h1Style = `
    font-family: parisine-plus-std-gris, sans-serif;
    font-weight: 400;
    color: ${colors.dark_neutral};
    font-size: ${clamps.h1_size};
    text-align: center;
    margin-bottom: ${clamps.margin_bottom};
`
const h2Style = `
    font-family: 'Elsie Swash Caps', cursive;
    font-weight: 400;
    color: ${colors.accent};
    font-size: ${clamps.h2_size};
    text-align: center;
`
const h3Style = `
    font-family: brevia, sans-serif;
    font-weight: 500;
    color: ${colors.dark_neutral};
    font-size: ${clamps.h3_size};
    text-align: center;
`
const h4Style = `
    font-family: brevia, sans-serif;
    font-weight: 300;
    font-style: italic;
    color: ${colors.dark_neutral};
    font-size: ${clamps.h4_size};
    text-align: center;
`

const pStyle = `
    font-family: brevia, sans-serif;
    font-weight: 400;
    color: ${colors.dark_neutral};
    font-size: ${clamps.p_size};
`

const anchorStyle = `
    font-family: 'Elsie', cursive;
    font-weight: 400;
    color: ${colors.main_bold};
    text-decoration: none;
    font-size: ${clamps.anchor_size};
    transition: font-weight 1s;
    &:hover {
        font-style: italic;
    }
    &.page-links {
        text-decoration: underline;
        font-size: ${clamps.span_size};
    }
`
const navStyle = `
    font-family: brevia, sans-serif;
    font-weight: 600;
    color: ${colors.dark_neutral};
    font-size: ${clamps.nav_size};
    transition: all 0.3s ease-in-out;
    &:hover,
    &.active {
        font-weight: 700;
        color: ${colors.accent}
    }
`

const logoStyle = `
    font-family: 'Elsie Swash Caps', cursive;
    font-weight: 900;
    color: ${colors.main_bold};
    text-decoration: none;
    font-size: ${clamps.logo_size};
`
const aboutSpan =`
    font-family: 'Elsie Swash Caps', cursive;
    font-weight: 400;
    color: ${colors.accent};
    font-size: calc(${clamps.h1_size} * 2);
`

const spanStyle = `
    font-family: brevia, sans-serif;
    font-weight: 300;
    font-style: italic;
    color: ${colors.dark_neutral};
    font-size: ${clamps.span_size};
`

const introStyle = `
    font-family: parisine-plus-std-gris, sans-serif;
    font-weight: 700;
    color: ${colors.main_comp};
    font-size: ${clamps.intro_size};
`

const largeLink =`
    font-family: brevia, sans-serif;
    font-weight: 400;
    color: ${colors.accent};
    text-align: center;
    margin-top: ${clamps.margin_top};
    margin-bottom: ${clamps.xs_margin};
    font-size: ${clamps.large_link_size};
    &:hover {
        font-style: italic;
        text-decoration: underline;
    }
`

const label = `
    font-family: 'Elsie', cursive;
    font-weight: 400;
    color: ${colors.dark_neutral};
    font-size: ${clamps.p_size};
    transition: color 1s;
    &:focus-within {
        font-weight: 900;
        color: ${colors.accent};
    }
`

const input =`
    font-family: brevia, sans-serif;
    font-weight: 400;
    color: ${colors.dark_neutral};
    font-size: calc(${clamps.p_size} * 0.8);
    border: none;
    background: #fffeff;
    border: solid 2px transparent;
    outline: none;
    box-shadow: -1px 2px 4px rgba(50, 50, 50, 0.2);
    transition: all 1s;
    &:focus {
        outline: ${colors.main_bold};
        border: solid 3px ${colors.main_bold};
        background: #fffdff;
        box-shadow: inset -1px 2px 4px rgba(50, 50, 50, 0.2);
    }
    &:-internal-autofill-selected {
        background: #fffdff !important;
    }
`

const categoryTag =`
    font-family: 'Elsie Swash Caps', cursive;
    font-weight: 300;
    color: ${colors.main_bold};
    font-size: ${clamps.cat_tags};
    &:hover,
    &:focus {
        animation: pastelRainbow 2s infinite;
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
    ul {
        padding-inline-start: 0px;
        li {
            ${pStyle}
        }
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

    .small,
    .author-span {
        ${spanStyle}
    }
    .large-link,
    .load-link {
        ${largeLink}
    }
    .about-font-span {
        ${aboutSpan}
    }

    label {
        ${label}
    }
    input,
    textarea {
        ${input}
    }

    .tags {
        ${categoryTag}
        margin-right: ${clamps.xsMargin};
    }
`
export default typographyStyles;