import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Footer from './components/Footer'
// import HomeComponent from './components/HomeComponent'
import ArticleComponent from './pages/ArticleComponent'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/get-article/:id' element={<ArticleComponent/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/post/guide-to-keeping-your-home-spotless'/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}



export default App

