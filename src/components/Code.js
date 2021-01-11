import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import React from 'react'
import styled from '@emotion/styled';
import { copyToClipboard } from '../utils/copy-to-clipboard'

// const breakpoints = [768, 1024, 1400, 1600]
// const mq = breakpoints.map(
//     bp => `@media (min-width: ${bp}px)`
// )
export const Pre = styled('pre')`
    text-align: left;
    padding: 0.5em;
    overflow-x: auto;
    border-radius: 3px;
    background-color: #00000009 !important;
    width: 80vw;
    margin: 1vh auto; 
    font-family: 'Courier New', Courier, monospace;
`
export const LineNo = styled('span')`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
`
export const CopyCode = styled('button')`
    position: relative;
    right: -90%;
    border: 0;
    border-radius: 3px;
    margin: 0.25em;
    opacity: 0.3;
    font-size: 1.3vmax;
    &:hover {
        opacity: 1;
    }
`
const Code = ({ codeString, language, ...props }) => {
    const handleClick = () => {
        copyToClipboard(codeString)
    }
    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={theme}
        >
            {({
            className,
            style,
            tokens,
            getLineProps,
            getTokenProps,
            }) => (
            <Pre className={className} style={style}>
                <CopyCode onClick={handleClick}>Copy</CopyCode>
                {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                    <LineNo>{i + 1}</LineNo>
                    {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                    ))}
                </div>
                ))}
            </Pre>
            )}
        </Highlight>
        )
    }
export default Code