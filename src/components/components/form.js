import React from 'react'
import styled from '@emotion/styled'
import { clamps, colors, margin, flex } from '../styles/global'

const FormStyle = styled('form')`
    margin: 0 auto ${clamps.margin_bottom} auto;
    ${flex.flexCol}
    border: solid 1px ${colors.main_bold};
    padding: ${clamps.med_margin} 0;
    width: ${clamps.full_size_image};

    label {
        margin: ${clamps.xs_margin} auto;
        ${flex.flexCol}
        text-align: center;
    }

    input:not(#submit-btn),
    textarea {
        ${margin.center}
        width: ${clamps.input_width};
    }
`

const Form = () => (
    <FormStyle method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" id="contact-form" className="flex-col">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <label>
            Name:
            <input type="text" name="name" />
        </label>
        <label>
            Email:
            <input type="email" name="email" />
        </label>
        <label>
            Subject:
            <input type="text" name="subject" />
        </label>
        <label>
            Message:
            <textarea name="body" form="contact-form" />
        </label>
        <input type="submit" value="Send" id="submit-btn" />
    </FormStyle>
)

export default Form;

