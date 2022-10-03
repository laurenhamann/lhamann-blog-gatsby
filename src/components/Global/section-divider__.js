import styled from '@emotion/styled';
import { clamps, colors } from './Styles/__global';

const SectionDivider = styled('div')`
    border-top: solid 4px ${colors.accent};
    box-shadow: 0 -2px 3px #A8687071,
    0 2px 3px #A8687071;
    margin: ${clamps.margin_top} 0;

`

export default SectionDivider;