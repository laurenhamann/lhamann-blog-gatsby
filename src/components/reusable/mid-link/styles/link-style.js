import styled from '@emotion/styled'
import { flex } from '../../../global/flex-box'
import { clamps } from '../../../global/clamps'
import { animation } from '../../../global/animation'
import { gradients } from '../../../global/gradients'
const LinkStyle = styled('section')`
${animation.strokeChange}
    .mid-link {
        margin: ${clamps.marginTop} ${clamps.marginLeft} ${clamps.marginBottom} ${clamps.marginRight};
        ${flex.flexRow}
        ${flex.justifyCenter}
        ${flex.alignItemsCenter}
        a {
            margin-top: 0;
            padding: 0 ${clamps.marginTop};
        }
    }

    svg {
        #top,
        #bottom,
        #left,
        #right {
            stroke: ${gradients.pink[0]};
        }
    }

    &:hover {
        #top {
            animation: strokeChange 1s infinite forwards;
        }
        #left {
            animation: strokeChange 1s  0.3s infinite forwards;
        }
        #bottom {
            animation: strokeChange 1s  0.6s infinite forwards;
        }
        #right {
            animation: strokeChange 1s  0.8s infinite forwards;
        }
    }


`;

export default LinkStyle;