import React from 'react'
import { Helmet } from 'react-helmet'
import useMetadata from '../../hooks/use-metadata';



const SEO = () => {

    const meta = useMetadata();

    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{meta.siteMetadata.title}</title>
            <link rel="canonical" href={meta.siteMetadata.url} />
        </Helmet>
    )
}
export default SEO;