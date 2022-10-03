// FLEX BOX 

const flexRow = `
    display: flex;
    flex-direction: row;
`

const flexCol = `
    display: flex;
    flex-direction: column;
`

const justifySB = `
    justify-content: space-between;
`

const justifySA = `
    justify-content: space-around;
`

const justifyCenter = `
    justify-content: center;
`

const alignItemsCenter = `
    align-items: center;
`

const alignItemsTop = `
    align-content: flex-start;
`

const alignItemsBottom = `
    align-content: flex-end;
`

export const flex = {
    alignItemsBottom: alignItemsBottom,
    alignItemsTop: alignItemsTop,
    alignItemsCenter: alignItemsCenter,
    justifyCenter: justifyCenter,
    justifySA: justifySA,
    justifySB: justifySB,
    flexCol: flexCol,
    flexRow: flexRow
}