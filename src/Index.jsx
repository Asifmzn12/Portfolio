import ScrollToTop from "react-scroll-to-top";
import About from "./About"
import Introduction from "./Introduction"
import Skills from "./Skills"
import Education from './Education'
import Experience from "./Experience"
import Projects from "./Projects"
import Contact from "./Contact"


function Index() {


    return (
      <>
      <Introduction/>
      <About/>
      <Skills/>
      <Education/>
      <Experience/>
      <Projects/>
      <Contact/>
      <ScrollToTop height={17} smooth />

      
      
      
      
      </>
    )
}

export default Index
