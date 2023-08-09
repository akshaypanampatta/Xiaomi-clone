import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import Container from '../components/Container/Container'
import About from '../components/About/About'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Container/>
        <About/>
    </div>
  )
}

export default Home