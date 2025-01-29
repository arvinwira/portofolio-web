
import styles from"./App.module.css"
import { Navbar } from "./components/Navbar/Navbar"
import{ Hero } from "./components/Hero/Hero"
import { Experience } from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects"
import { Contact } from "./components/Contact/Contact"
import{ Certificate } from "./components/Certificate/Certificate"


function App() {
  return (
  <div className={styles.App}>
    <Navbar />
    <Hero />
    <Experience />
    <Projects />
    <Certificate />
    <Contact />
    
  </div>
  );
}

export default App
