"use client"
import NavBar from "./shared/components/NavBar"
import Hero from "./shared/components/Hero"
import Impairment from "./shared/components/Impairment"
import HowToWork from "./shared/components/HowToWork"
import Features from "./shared/components/Features"
import Solution from "./shared/components/Solution"
import Contact from "./shared/components/Contact"
import Footer from "./shared/components/Footer"
import Stats from "./shared/components/Stats"

export default function Page() {

  return (
    <div style={{ overflowX: "hidden" }}>
      <NavBar/>
      <Hero />
      <Impairment/>
      <Stats/>
      <HowToWork/>
      <Features/>
      <Solution/>
      <Contact/>
      <Footer/>     
    </div>
  )
}