
import styles from "./App.module.css";
import About from "./componets/About/About";
import Footer from "./componets/Contact/Footer";

import Hero from "./componets/Hero/Hero";

import Navbar from "./componets/Navbar/Navbar";
import QualificationPage from "./componets/Qualification/QualificationPage";
import Skill from "./componets/skill/skill";

function App() {
  
  return (
    <>
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Skill/>
      <QualificationPage/>
      <Footer/>
    </div>
    </>
  )
}

export default App;
