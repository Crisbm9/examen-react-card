import * as React from "react"
import { Link } from "gatsby"


const Header = () => {
  return(
    <nav>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
   </nav>
)
}

export default Header
