/**
 * File Name: MainRouter.jsx
 * Description: Main router component for handling routes
 * Student Name: Sivaprasad Gunji
 * Student ID: 301546700
 * Date: September 25, 2025
 */

// === Imports and Setup ===

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './src/aboutme'
import Contact from './src/contact-me'
import Project from './src/projects'
import Services from './src/services'
import Layout from './components/Layout'

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about-me" element={<About />} />
                        <Route exact path="/projects" element={<Project />} />
                        <Route exact path="/services" element={<Services />} />
                        <Route exact path="/contact-me" element={<Contact />} />
                </Routes>
        </div>
        )
}
export default MainRouter
