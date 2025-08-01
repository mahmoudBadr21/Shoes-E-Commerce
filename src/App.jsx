import './all.min.css'
import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import ScrollHandler from './components/ScrollHandler'
import Navbar from './common/navbar/Navbar'
import Home from './components/home/Home'
import Cart from './common/cart/Cart'
import Footer from './common/footer/Footer'
import Category from './components/category/Category'
import Favorits from './common/favorits/Favorits'
import Banner from './common/banner/Banner'
import LoginPopup from './common/LoginPopup/LoginPopup'
import Sale from './common/sale/Sale'
import About from './common/about/About'
import Contact from './common/contact/Contact'

function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true)
  const [showLogin, setShowLogin] = useState(false)

  useEffect ( ()=> {
    const handleScroll = ()=> {
      if (window.scrollY === 0)setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <>
      <section className="app">
        {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
        <Navbar isTopOfPage={isTopOfPage} showLogin={showLogin} setShowLogin={setShowLogin} />
        <ScrollHandler />
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/category/:type' element={<Category />} exact />
          <Route path='/cart' element={<Cart />} exact />
          <Route path='/favorits' element={<Favorits />} exact />
          <Route path='/sale' element={<Sale />} exact />
          <Route path='/about' element={<About />} exact />
          <Route path='/contact' element={<Contact />} exact />
        </Routes>
        <Banner />
        <Footer />
      </section>
    </>
  )
}

export default App
