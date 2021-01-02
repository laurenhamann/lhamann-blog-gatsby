import React from 'react';
import Layout from '../components/layout';


const Contact = (props) => (
    <Layout>
        <section className="contact-section mid-section">
            <h1> Write to me below &darr;</h1>
            <h3> I would love to hear from you </h3>
            <form id="contact-form" className="flex-col">
                {/* first name */}
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
                <textarea name="body" form="contact-form" />
                <input type="submit" value="Send" />


                {/* email */}
                {/* subject */}
                {/* body */}
                {/* submit button */}
            </form>
        </section>
    </Layout>
)


export default Contact;