import styled from '@emotion/styled'
import { clamps, margin, flex, animation } from '../../global/global'
const ContactStyle = styled('section')`
    ${flex.flexCol}
    width: ${clamps.headerWidth};
    ${margin.center}
    ${animation.colorChange}
    h1 {
        margin-bottom: ${clamps.xsMargin};
    }
    h3 {
        margin-bottom: ${clamps.marginBottom};
        animation: colorChange 6s infinite forwards;

    }
`

export default ContactStyle