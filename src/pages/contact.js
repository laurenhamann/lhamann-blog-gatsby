import React from 'react';
import Layout from '../components/layout';


const Contact = (props) => (
    <Layout>
        <section className="contact-section mid-section">
            <h1> Write to me below</h1>
            <h4> I would love to hear from you </h4>
            <form id="contact-form" className="flex-col">
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
        </section>
    </Layout>
)


export default Contact;