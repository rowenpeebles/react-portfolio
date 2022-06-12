import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App