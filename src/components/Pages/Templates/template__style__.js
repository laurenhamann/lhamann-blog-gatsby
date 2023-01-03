import styled from '@emotion/styled'
import { clamps, colors, flex  } from '../../Global/Styles/__global'

const TemplateStyle = styled('article')`
    width: ${clamps.header_width};
    margin: ${clamps.margin_top} auto;
    padding: 0 ${clamps.med_margin};
    ${flex.flexCol}
    ${flex.justifyCenter}
    .title {
        margin-bottom: ${clamps.med_margin};
    }

    div.langs {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 3px auto;
        width: ${clamps.full_size_image};
    }

    h3 {
        margin-top: ${clamps.margin_top};
    }

    p {
        text-align: center;
    }
    .author-span {
        margin: ${clamps.xs_margin} auto;
    }
    .gatsby-resp-image-wrapper {
        width: ${clamps.full_size_image};
        margin: ${clamps.margin_top} auto;
    }

    .image-project {
        border: 2px solid #000;
    }
    code {
        color: ${colors.main_comp};
    }
    a {
        color: ${colors.main_bold};
        &:hover {
            font-style: italic;
        }
    }


`

export default TemplateStyle;