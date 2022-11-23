import React, {useState , useEffect} from 'react'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import { HashLoader } from 'react-spinners'
import AOS from 'aos'
import 'aos/dist/aos.css'


function App() {

  const [loading , setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },4000)
  },[])

  useEffect(() => {
    AOS.init()
  },[])

  return (
    <div> 
      {
        loading ? 
        <HashLoader
        style={{display:'flex' , alignItems:'center'}}
        color={'#98ecc7'}
        loading={loading}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
        :
        <div className='components' data-aos="fade-center" data-aos-duration='1000'> 
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        </div>
      }
    </div>
  )
}

export default App
