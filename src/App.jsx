import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import Skill from './pages/skills'
import Footer from './components/footer'

function App(){

  return(

    <>
    <Navbar/>
    <Home/>
    <AboutMe/>
    <Skill/>
    <Footer/>
    </>
  )
}

export default App