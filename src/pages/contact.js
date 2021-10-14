import React from 'react'
import styled from '@emotion/styled'
import Layout from '../components/components/Global/layout'
import Form from '../components/components/Pages/Contact/form'
import SectionDivider from '../components/components/Global/section-divider__'
import { clamps, margin, flex, animation } from '../components/components/Global/Styles/__global'

const ContactStyle = styled('section')`
    ${flex.flexCol}
    width: ${clamps.header_width};
    ${margin.center}
    ${animation.colorChange}
    h1 {
        margin-bottom: ${clamps.xs_margin};
    }
    h3 {
        margin-bottom: ${clamps.margin_bottom};
        animation: colorChange 6s infinite forwards;

    }
`
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