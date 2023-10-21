import React from 'react'

import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled, YoutubeFilled } from '@ant-design/icons'

import './footer.scss'
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        if (window.location.hash === '#about-us') {
          const destinationElement = document.getElementById('about-us');
          if (destinationElement) {
            destinationElement.scrollIntoView();
          }
        }
    }, []); 

    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer-item logo'>
                    <div className='footer-logo'>
                        <img src={require('../Assets/Logo/Lumosys-logo.png')} alt='logo' />
                    </div>
                    <p>
                        Pioneering Innovation, Shaping the Future. Explore cutting-edge solutions that illuminate tomorrow's technology landscape.
                    </p>
                    <div className='footer-social'>
                        <h3>Follow Us</h3>
                        <div className='footer-social__icons'>
                            <a href='https://www.facebook.com/profile.php?id=61552100934643' target='_blank' rel='noopener noreferrer'>
                                <FacebookFilled />
                            </a>

                            <a href='https://www.instagram.com/lumosystechnologies/' target='_blank' rel='noopener noreferrer'>
                                <InstagramFilled />
                            </a>

                            <a href='https://www.linkedin.com/company/lumosys-technologies/' target='_blank' rel='noopener noreferrer'>
                                <LinkedinFilled />
                            </a>

                            <a href='https://www.youtube.com/@LumosysTechnologies ' target='_blank' rel='noopener noreferrer'>
                                <YoutubeFilled />
                            </a>

                            <a href='https://twitter.com/ ' target='_blank' rel='noopener noreferrer'>
                                <TwitterCircleFilled />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='footer-item footer-links'>
                    <h3>Company Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href="/#about-us">About Us</a></li>
                        <li><a href='/contact-us'>Contact Us</a></li>
                        <li><a href='/privacypolicy'>Privacy Policy</a></li>
                    </ul>
                </div>

                <div className='footer-item footer-links'>
                    <h3>
                        Services
                    </h3>

                    <ul>
                        <li><a href='/WebServices'>Web Development</a></li>
                        <li><a href='/MobileServices'>Mobile Development</a></li>
                        <li><a href='/UiUx'>UI/UX Design</a></li>
                        <li><a href='/CloudServices'>Cloud Services</a></li>
                        <li><a href='/FullStackServices'>Full Stack Services</a></li>
                        {/* <li><a href='/'>Digital Marketing</a></li>
                        <li><a href='/'>IT Consultant</a></li>
                        <li><a href='/'>IT Training</a></li>
                        <li><a href='/'>IOT</a></li> */}
                    </ul>
                </div>
            </div>

            <div className='footer-terms'>
                <p>
                    © 2023 Lumosys. All Rights Reserved
                </p>

                <p>
                    Designed by Lumosys | <a href='/privacypolicy'>Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}

export default Footer