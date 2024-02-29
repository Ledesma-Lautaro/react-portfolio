import styles from "./App.module.css"
import { Navbar } from "./components/Navbar/navbar"
import { Hero} from "./components/Hero/hero"
import { About} from "./components/About/about"
import { Experience } from "./components/Experience/experience"
import { Projects } from "./components/Projects/projects"
import { Contact } from "./components/Contact/contact"
import { Studies }from "./components/Studies/studies"

function App() {
  return (
    <div className={styles.App}>
     <Navbar />
     <Hero />
     <About />
     <Experience />
     <Studies />
     <Projects />
     <Contact />
    </div>
  )
}

export default App
