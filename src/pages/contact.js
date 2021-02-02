import React from 'react'
import Layout from '../components/layout'
import ContactStyle from '../components/contact/styles/contact-style'
import Form from '../components/contact/form'
import SectionDivider from '../components/reusable/section-divider'

const Contact = (props) => (
    <Layout>
        <SectionDivider />
        <ContactStyle>
            <h1> Write to me below</h1>
            <h3> I would love to hear from you </h3>
            <Form />
        </ContactStyle>
    </Layout>
)


export default Contact