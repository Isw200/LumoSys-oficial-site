import React, { useState, useEffect } from 'react';
import './navbar.css';
import Logo from '../Assets/Logo/Lumosys-logo.png';

const Navigator = () => {

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                document.querySelector('.navbar').classList.add('navbar--scroll');
            } else {
                document.querySelector('.navbar').classList.remove('navbar--scroll');
            }
        });
    }, []);

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src={Logo} alt='Logo' />
            </div>
            <div className='nav-links'>
                <a href='/'>Home</a>
                <a href='/services'>Services</a>
                <a href='/products'>Our Products</a>
                <a href='/blog'>Blog</a>
            </div>
            <div className='nav-contact'>
                <a
                    href="/"
                    className='btn'
                >
                    Contact Us
                </a>
            </div>
        </div>
    );
};

export default Navigator;
