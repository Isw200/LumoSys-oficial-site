import React, { useEffect } from 'react'

import './style.scss'
import { Tag } from 'antd'

const Portfolio = () => {
    useEffect(() => {
        const activeTab = document.querySelector(".activenav");
        if (activeTab) {
            activeTab.classList.remove("activenav");
        }
        const currentTab = document.getElementById("navportfolio");
        if (currentTab) {
            currentTab.classList.add("activenav");
        }
    }, []);
    return (
        <div className='portfolio'>
            <div className='portfolio-top'>
                <h1>Our Portfolio</h1>
                <h2>
                    We provide the best quality products for you.
                </h2>
                <p>Our products are made with the best quality materials and are available in a variety of colors and sizes. Custom orders are available upon request. Please contact us for more information.
                </p>
            </div>

            <div className='portfolio-bottom'>
                <div className='portfolio-bottom-item'>
                    <div className='portfolio-bottom-item-image'>
                        <img src={require('./Assets/1.jpg')} alt='' />
                    </div>
                    <div className='portfolio-bottom-item-info'>
                        <h3>
                            Yasalanka Physics LMS
                        </h3>
                        <p>
                            Yasalanka LMS offers physics education at your fingertips, ensuring ease of access from any device, whether you're on the go or at home.With our mobile-friendly platform, you can enjoy fast and convenient learning, making physics accessible whenever you choose.
                        </p>
                        <div className='portfolio-bottom-item-info-stack'>
                            <Tag color='blue'>React JS</Tag>
                            <Tag color='blue'>Node JS</Tag>
                            <Tag color='blue'>
                                Google Cloud
                            </Tag>
                            <Tag color='blue'>
                                Firebase
                            </Tag>
                        </div>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.yasalankaphysics.lk/'
                        >
                            Learn More →
                        </a>
                    </div>
                </div>


                <div className='portfolio-bottom-item'>
                    <div className='portfolio-bottom-item-image'>
                        <img src={require('./Assets/2.jpg')} alt='' />
                    </div>
                    <div className='portfolio-bottom-item-info'>
                        <h3>
                            CoderDojo Sri Lanka
                        </h3>
                        <p>
                            CoderDojo Sri Lanka is a volunteer-led, community-based network of free programming clubs for young people. Anyone aged seven to seventeen can visit a Dojo where they can learn to code, build a website, create an app or a game, and explore technology in an informal, creative, and social environment.
                        </p>
                        <div className='portfolio-bottom-item-info-stack'>
                            <Tag color='blue'>React</Tag>
                            <Tag color='blue'>Node</Tag>
                            <Tag color='blue'>Firebase</Tag>
                        </div>
                        <a href='/'>
                            Learn More →
                        </a>
                    </div>
                </div>

                <div className='portfolio-bottom-item'>
                    <div className='portfolio-bottom-item-image'>
                        <img src={require('./Assets/3.jpg')} alt='' />
                    </div>
                    <div className='portfolio-bottom-item-info'>
                        <h3>
                            Privacy Protected Meeting Platform
                        </h3>
                        <p>
                            A privacy protected Meeting Platform. This is my second year group project.
                            Technologies - Deep Learning (classification) - Python
                            Media Pipe
                        </p>
                        <div className='portfolio-bottom-item-info-stack'>
                            <Tag color='blue'>React</Tag>
                            <Tag color='blue'>Node</Tag>
                            <Tag color='blue'>MongoDB</Tag>
                        </div>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://coderdojo.lk/'
                        >
                            Learn More →
                        </a>
                    </div>
                </div>

                <div className='portfolio-bottom-item'>
                    <div className='portfolio-bottom-item-image'>
                        <img src={require('./Assets/4.jpg')} alt='' />
                    </div>
                    <div className='portfolio-bottom-item-info'>
                        <h3>
                            3D Box
                        </h3>
                        <p>
                            3D Box is a 3D printing service provider. They provide 3D printing services for your needs. They have a wide range of 3D printers and materials to choose from. They also provide 3D modeling services for your needs.
                        </p>
                        <div className='portfolio-bottom-item-info-stack'>
                            <Tag color='blue'>React</Tag>
                            <Tag color='blue'>Spline</Tag>
                        </div>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://isw200.github.io/threed/'
                        >
                            Learn More →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio