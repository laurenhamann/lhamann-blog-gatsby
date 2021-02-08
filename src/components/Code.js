import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import React from 'react'
import styled from '@emotion/styled';
import { copyToClipboard } from '../utils/copy-to-clipboard'
import { clamps } from './global/global'


export const Pre = styled('pre')`
    text-align: left;
    padding: ${clamps.xsMargin};
    overflow-x: auto;
    border-radius: 3px;
    width: ${clamps.headerWidth};
    margin: ${clamps.medMargin} auto; 
    font-family: 'Source Code Pro', Courier, monospace;
    height: auto;
    max-height: ${clamps.aboutTitleWidth};
    div {
        height: auto;
    }
`
export const LineNo = styled('span')`
    display: inline-block;
    width: 2em;
    user-select: none;
    opacity: 0.3;
    font-family: 'Source Code Pro', Courier, monospace;
`
export const CopyCode = styled('button')`
    position: relative;
    right: -90%;
    border: 0;
    border-radius: 15px;
    margin: ${clamps.xsMargin};
    opacity: 0.5;
    font-size: ${clamps.pSize};
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