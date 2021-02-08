import styled from '@emotion/styled'
import { flex, clamps } from '../../../global/global'

const NavUlStyle = styled('ul')`
        ${props => props.width > 768 ? `
            ${flex.flexRow}
            ${flex.justifySB}
            ${flex.alignItemsCenter}
            margin-bottom: ${clamps.marginBottom};
            li {
                margin-right: ${clamps.xsMargin};
            }
        ` : `
            margin-right: ${clamps.xsMargin};
        `}
`

export default NavUlStyle