import { useState , useEffect} from 'react'
import './App.css'
import { Routes , Route, useLocation, Link } from 'react-router-dom';
import Portfolio from './components/portfolio.jsx';
import Main from './components/main.jsx';
import { AnimatePresence } from 'framer-motion';
import Contact from './components/contact';
function App() {
  const location = useLocation()
  return (
    <>
    <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route index path='/' element={<Main />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
    </AnimatePresence>
    </>
  )
}

export default App ;
