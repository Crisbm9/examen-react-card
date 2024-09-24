import * as React from "react"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = () => (
  <Layout>
      {/* <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
    <div>
      <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
   </nav>
  <h1>Inicio</h1>
</div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
