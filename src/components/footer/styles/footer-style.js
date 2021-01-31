import styled from '@emotion/styled'
import { flex } from '../../global/flex-box';
import { clamps } from '../../global/clamps';
import { colors } from '../../global/colors';

const FooterStyle = styled('footer')`
    ${flex.flexCol}
    margin-bottom: ${clamps.marginBottom};
    h1{
        margin-bottom: ${clamps.xsMargin};
    }
    & > span {
        font-size: ${clamps.pSize};
        font-family: "Elsie Swash Caps";
        color: ${colors.mainBold};
        text-align: center;
        margin-bottom: ${clamps.medMargin};
    }
    .social-links {
        color: ${colors.accent};
        align-self: center;
        font-size: ${clamps.anchorSize};
        a{
        margin-left: ${clamps.xsMargin};
        margin-right: ${clamps.xsMargin};
        }
    }
`

export default FooterStyle;