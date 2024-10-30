import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './containers/home'
import About from './containers/about'
import Skills from './containers/skills'
import Resume from './containers/resume'
import Portfolio from './containers/portfolio'
import Contact from './containers/contact'

function App() {
  return (
    <>
      <Routes>
        <Route index path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/skills' element={<Skills />} />
      </Routes>
    </>
  )
}

export default App
