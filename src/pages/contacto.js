import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
   <div>
      <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
   </nav>
  <h1>Contacto</h1>
</div>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
