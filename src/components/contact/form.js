import React from 'react'
import FormStyle from './styles/form-style'

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

