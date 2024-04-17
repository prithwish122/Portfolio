import React from 'react'
import "./index.css";
import {Route,BrowserRouter as Router , Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
const App = () => {
  return (
    <div >
      
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contacts/>}></Route>
        </Routes>
      </Router>
    </div>
    // <main className='text-3xl text-red-900 bg-slate-300' >
      // <p>hello</p>
    // </main>
  )
}

export default App;