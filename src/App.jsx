import React from 'react'
import Header from './components/header/header'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Experience from './components/Experience/Experience'

const app = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience/>
    </>
  )
}
export default app