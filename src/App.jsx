import React from 'react'
import Experties from './components/Experties/Experties'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Portfolio from './components/Portfolio/Portfolio'
import css from './styles/App.module.scss'
const App = () => {
  return (
    <div className={` ${css.container}`} style={{backgroundColor:'rgb(32, 30, 16)'}}>
      <Header/>
      <Hero/>
      <Experties/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default App