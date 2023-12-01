import React from "react"
import { graphql, Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data }) => {
    const { name, company } = data.site.siteMetadata.contact;
    return (
        <Layout>
            <Seo title="Home" />
            <h1>About Us</h1>
            <p>{`Project for ITDEV 164-800, at ${company}, by ${name}`}</p>
            <p>{`This blog is about my favorite shows to watch.`}</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <StaticImage
                src="../images/MATC-Logo1.jpg"
                width={300}
                quality={95}
                formats={["avif", "auto", "webp"]}
                alt="A Gatsby Icon"
                style={{ marginBottom: `1.45rem` }}
            />
        </div>
        <Link to="/">Home</Link>
        </Layout>
    )
}

export default About

export const query = graphql`
    query {
        site {
            siteMetadata {
                contact {
                    name
                    company
                }
            }
        }
    }
`