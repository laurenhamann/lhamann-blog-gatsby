import React from 'react'
import Layout from '../components/components/layout'
import Form from '../components/components/form'
import SectionDivider from '../components/styles/section-divider__'
import styled from '@emotion/styled'
import { clamps, margin, flex, animation } from '../components/styles/global'

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