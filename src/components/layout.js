import * as React from "react"

//Components
import Footer from "./footer"
import Header from "./header"

const Layout = ({ children }) => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
