import React, { useState } from "react"
import TeckStack from "../components/landing/TechStack"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/landing/hero"
import Chapters from "../components/chapters/Chapters"
import { FrameworkContext } from "../frameworkContext"
import Partners from "../components/partners"
import constants from "../constants"
const IndexPage = () => {
  const [framework, setFramework] = useState("vue")

  const toggleFramework = selectedFramework => {
    setFramework(selectedFramework)
  }

  constants.track("App.LandingPage.View")

  console.log("ff-1", framework)
  return (
    <FrameworkContext.Provider value={{ framework, toggleFramework }}>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <TeckStack />
        <Chapters />
        <Partners />
      </Layout>
    </FrameworkContext.Provider>
  )
}

export default IndexPage
