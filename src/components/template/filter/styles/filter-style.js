import styled from '@emotion/styled'
import { clamps, flex, margin, colors } from '../../../global/global'


const FilterStyle = styled('form')`
    width: ${clamps.filterDivWidth};
    ${margin.right}
    ${flex.flexCol}
    background-color: #754349;
    padding: ${clamps.medMargin} 0;
    box-shadow: -2px 1px 3px #aaa,
                2px 1px 3px #aaa ;
    position: absolute;
    right: ${clamps.xsMargin};
    top: 20px;
    z-index: 12;
    .title {
        color: ${colors.mainBold};
    }
    section {
        width: auto;
        ${margin.center}
        p{
            text-decoration: underline;
            color: ${colors.lightNeutral};
        }
        div:first-child {
            margin-top: ${clamps.xsMargin};
        }
        div {
            label {
                color: ${colors.lightNeutral};
            }
            input[checked] {
                color: ${colors.mainBold};

            }
        }
    }

`


export default FilterStyle;