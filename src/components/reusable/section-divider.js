import styled from '@emotion/styled';
import { colors } from '../global/colors';
import { clamps } from '../global/clamps';
const SectionDivider = styled('div')`
    border-top: solid 8px ${colors.accent};
    box-shadow: 0 -3px 9px #A8687071,
    0 6px 8px #A8687071;
    margin: ${clamps.marginTop} auto;

`

export default SectionDivider;