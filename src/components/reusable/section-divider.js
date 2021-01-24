import styled from '@emotion/styled';
import { colors } from '../global/colors';
import { margin } from '../global/spacing';
const SectionDivider = styled('div')`
    border-top: solid 8px ${colors.accent};
    box-shadow: 0 -3px 9px #A8687071,
    0 6px 8px #A8687071;
    margin: clamp(${margin.marginTB.min}, ${margin.marginTB.pef}, ${margin.marginTB.max}) auto;

`

export default SectionDivider;