import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './src/components/Home'
import About from './src/components/About'
import Contact from './src/components/Contact'
import Project from './src/components/Project'
import Service from './src/components/Service'
import Layout from './src/components/Layout'
import Footer from './src/components/Footer'

const MainRouter = () => {
    return (<div>
        <Layout/>
        <Routes>
                
                <Route exact path="/" element={<Home />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/service" element={<Service />} />
                <Route exact path="/project" element={<Project />} />
                <Route exact path="/contact" element={<Contact />} />
                
        </Routes>
        <Footer/>
    </div>
  )


}
export default MainRouter
