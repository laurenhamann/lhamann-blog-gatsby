import styled from '@emotion/styled';
import { clamps, colors } from './global';

const SectionDivider = styled('div')`
    border-top: solid 4px ${colors.accent};
    box-shadow: 0 -3px 9px #A8687071,
    0 6px 8px #A8687071;
    margin: ${clamps.margin_top} 0;

`

export default SectionDivider;