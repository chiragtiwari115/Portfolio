import { Context } from "react-responsive"
import Navbar from "./Components/Navbar"
import Experience from "./Sections/Experience"
import FeactureCards from "./Sections/FeactureCards"
import Hero from "./Sections/Hero"
import ShowcaseSection from "./Sections/ShowcaseSection"
import TechStack from "./Sections/TechStack"
import Contact from "./Sections/Contact"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection/>
    <div id="abilities">
    <FeactureCards/>
    </div>
    <Experience/>
    <TechStack/>
    <Contact />
    </>
  )
}

export default App