import React from 'react'

import { FacebookFilled, InstagramFilled, LinkedinFilled, TwitterCircleFilled, YoutubeFilled } from '@ant-design/icons'

import './footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer-item logo'>
                    <div className='footer-logo'>
                        <img src={require('../Assets/Logo/Lumosys-logo.png')} alt='logo' />
                    </div>
                    <p>
                        Lumosys is a company that provides a platform for the development of various applications.
                    </p>
                    <div className='footer-social'>
                        <h3>Follow Us</h3>
                        <div className='footer-social__icons'>
                            <a href='https://www.facebook.com/lumosys.id/' target='_blank' rel='noopener noreferrer'>
                                <FacebookFilled />
                            </a>

                            <a href='https://www.instagram.com/lumosys.id/' target='_blank' rel='noopener noreferrer'>
                                <InstagramFilled />
                            </a>

                            <a href='https://www.linkedin.com/company/lumosys/' target='_blank' rel='noopener noreferrer'>
                                <LinkedinFilled />
                            </a>

                            <a href='https://www.youtube.com/ ' target='_blank' rel='noopener noreferrer'>
                                <YoutubeFilled />
                            </a>

                            <a href='https://www.youtube.com/ ' target='_blank' rel='noopener noreferrer'>
                                <TwitterCircleFilled />
                            </a>
                        </div>
                    </div>
                </div>

                <div className='footer-item footer-links'>
                    <h3>Company Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About Us</a></li>
                        <li><a href='/'>Contact Us</a></li>
                        <li><a href='/'>Terms & Conditions</a></li>
                        <li><a href='/'>Privacy Policy</a></li>
                    </ul>
                </div>

                <div className='footer-item footer-links'>
                    <h3>
                        Services
                    </h3>

                    <ul>
                        <li><a href='/'>Web Development</a></li>
                        <li><a href='/'>Mobile Development</a></li>
                        <li><a href='/'>UI/UX Design</a></li>
                        <li><a href='/'>Digital Marketing</a></li>
                        <li><a href='/'>IT Consultant</a></li>
                        <li><a href='/'>IT Training</a></li>
                        <li><a href='/'>IT Consultant</a></li>
                        <li><a href='/'>IT Training</a></li>
                    </ul>
                </div>
            </div>

            <div className='footer-terms'>
                <p>
                    © 2020 Lumosys. All Rights Reserved
                </p>

                <p>
                    Designed by Lumosys | <a href='/'>Terms & Conditions</a> | <a href='/'>Privacy Policy</a>
                </p>
            </div>
        </div>
    )
}

export default Footer