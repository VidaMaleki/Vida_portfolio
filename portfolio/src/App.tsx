import Header from "./components/Header"
import Navbar from "./components/Navbar"
import './App.css'
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Footer from "./components/Footer"


function App() {

  return (
    <div className='main-wrapper'>
      <div className="top-head"></div>
      <Navbar />
      <Header />
      <Experience/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )
}

export default App
