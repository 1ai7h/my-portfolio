import React from 'react'
import Header from './components/header/header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/contact'

const app = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience/>
        <Contact />
    </>
  )
}
export default app