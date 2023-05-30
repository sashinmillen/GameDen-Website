import * as React from "react"

//Components
import Welcome from "../components/welcome.js"
import Layout from "../components/layout"
import Featured from "../components/featured.js"
import Gallery from "../components/gallery.js"

import Seo from "../components/seo.js"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description="" />
      <Welcome />
      <Featured />
      <Gallery />
    </Layout>
  )
}

export default IndexPage
