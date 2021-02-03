import styled from '@emotion/styled'
import { clamps, colors, margin, flex } from '../../global/global'


const FormStyle = styled('form')`
    margin: 0 auto ${clamps.marginBottom} auto;
    ${flex.flexCol}
    border: solid 1px ${colors.mainBold};
    padding: ${clamps.medMargin} 0;
    width: ${clamps.fullSizeImage};

    label {
        margin: ${clamps.xsMargin} auto;
        ${flex.flexCol}
        text-align: center;
    }

    input:not(#submit-btn),
    textarea {
        ${margin.center}
        width: ${clamps.inputWidth};
    }


`


export default FormStyle;