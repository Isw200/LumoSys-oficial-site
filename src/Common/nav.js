import React, { useEffect, useState } from 'react';
import './navbar.scss';
import Logo from '../Assets/Logo/Lumosys-logo.png';

const Navigator = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <>
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

            <div className='mobile-nav-toggle'>
                <div className='logo'>
                    <img src={Logo} alt='Logo' />
                </div>

                <div className='hamburger'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <button class={
                        isMenuOpen ? " menu__icon active-menu" : "menu__icon"
                    }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <div
                className={isMenuOpen
                    ? "mobile-nav-container-active"
                    : 'mobile-nav-container'}
            >
                <div className='mobile-nav-box'>
                    <div className='mobile-nav-links'>
                        <a href='/'>Home</a>
                        <a href='/services'>Services</a>
                        <a href='/products'>Our Products</a>
                        <a href='/blog'>Blog</a>
                    </div>
                    <div className='mobile-nav-contact'>
                        <a
                            href="/"
                            className='btn'
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navigator;
