import Navbar from "./Components/Navbar"
import Experience from "./Sections/Experience"
import FeactureCards from "./Sections/FeactureCards"
import Hero from "./Sections/Hero"
import ShowcaseSection from "./Sections/ShowcaseSection"

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <ShowcaseSection  />
    <div id="abilities">
    <FeactureCards/>
    </div>
    <Experience/>
    </>
  )
}

export default App