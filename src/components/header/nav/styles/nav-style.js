import styled from '@emotion/styled'
import { flex } from '../../../global/global'


const NavStyle = styled('nav')`
    ${flex.flexRow}

    ul.hidden{
        opacity: 0;
    }
    .visible {
        transition: opacity 0.6s;
        opacity: 1;
    }

`

export default NavStyle;