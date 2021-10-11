import styled from '@emotion/styled'
import { clamps, colors, flex  } from './global'

const TemplateStyle = styled('article')`
    width: ${clamps.header_width};
    margin: ${clamps.margin_top} auto;
    padding: 0 ${clamps.med_margin};
    ${flex.flexCol}
    ${flex.justifyCenter}
    .title {
        margin-bottom: ${clamps.med_margin};
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