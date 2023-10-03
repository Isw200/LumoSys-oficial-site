import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Pages/Home'
import Products from './Pages/Products'
import Services from './Pages/Services'
import Blog from './Pages/Blog'
import ContactUs from './Pages/Contact'

const RoutesJs = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/products' element={<Products />} />
                <Route path='/services' element={<Services />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesJs