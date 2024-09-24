

import * as React from "react"


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      
        <main>{children}</main>
        <footer
          
        >
          © {new Date().getFullYear()} &middot; Página personal
          {` `}
        </footer>
    </>
  )
}

export default Layout
