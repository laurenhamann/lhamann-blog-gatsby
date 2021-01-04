import React from 'react';
import Layout from '../components/layout';
import ContactStyle from '../components/contact-style';


const Contact = (props) => (
    <Layout>
        <ContactStyle className="mid-section">
            <h1> Write to me below</h1>
            <h4> I would love to hear from you </h4>
            <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" id="contact-form" className="flex-col">
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
            </form>
        </ContactStyle>
    </Layout>
)


export default Contact;