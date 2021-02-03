import { clamps, colors, margin } from '../global'

const primaryButton =`
    width: ${clamps.primBtn};
    ${margin.center}
    color: ${colors.darkNeutral};
    border-radius: 10px;
    transition: all 1s;
    &:hover, 
    :focus {
        background-color: ${colors.mainBold};
        box-shadow: inset -1px 2px 4px rgba(50, 50, 50, 0.2);
        border-radius: 15px;
        color: ${colors.lightNeutral};
        font-weight: 600;
    }

`

const primary = `
    #submit-btn {
        ${primaryButton}
    }

`


export default primary