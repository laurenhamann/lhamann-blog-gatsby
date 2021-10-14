import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwlLight'
import React from 'react'
import styled from '@emotion/styled';
import { copyToClipboard } from './copy-to-clipboard'
import { clamps } from '../components/components/Global/Styles/__global'


export const Pre = styled('pre')`
    text-align: left;
    padding: ${clamps.xs_margin};
    overflow-x: auto;
    border-radius: 3px;
    width: ${clamps.header_width};
    margin: ${clamps.med_margin} auto; 
    font-family: 'Source Code Pro', Courier, monospace;
    height: auto;
    max-height: ${clamps.about_title_width};
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
    margin: ${clamps.xs_margin};
    opacity: 0.5;
    font-size: ${clamps.p_size};
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