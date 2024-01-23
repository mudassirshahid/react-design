import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Error from './components/Error';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
         {/* <Route path="/services/web-development" element={<WebDevelopment />} />
         <Route path="/services/web-design" element={<WebDesign />} />
         <Route path="/services/seo" element={<Seo />} /> */}
        </Route>
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}

export default App
