import React, { useEffect } from 'react'

// Antd
import { Tabs } from 'antd';

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Reveal
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss'
import './slider.css'
import './icon-slider.css'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1450 },
        items: 3,
    },
    desktopMini: {
        breakpoint: { max: 1450, min: 1024 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

const iconresponsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 14,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1450 },
        items: 10,
    },
    desktopMini: {
        breakpoint: { max: 1450, min: 1024 },
        items: 8,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 6,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 4,
    },
};

// Ant tab items
const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: '1',
        label: 'Mission',
        children: 'Our mission at Lumosys Solutions is to empower businesses with innovative software solutions that drive growth, efficiency, and customer satisfaction. ',
    },
    {
        key: '2',
        label: 'Vision',
        children: 'Our mission at Lumosys Solutions is to empower businesses with innovative software solutions that drive growth, efficiency, and customer satisfaction. ',
    },
];

AOS.init();
AOS.init({
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    offset: 120,
    delay: 0,
    duration: 800,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});

const Home = () => {

    return (
        <div className='home-page'>
            {/* 
                /// Hero Section
                ______________________________________________////
                ///
             */}
            <div className='hero'>
                <h1 data-aos="fade-up">
                    Illuminating Tomorrow's Technology.
                </h1>
                <h4 data-aos="fade-up">
                    Empowering innovation, one line of code at a time. Empowering innovation, one line of code at a time. Empowering innovation, one line of code at a time.
                </h4>
                <div className='hero-buttons'>
                    <a href='/products'> Products </a>
                    <a className='border-btn' href='/services'> Services </a>
                </div>
            </div>

            {
                /* 
                    /// About Section
                    ______________________________________________////
                    ///
                */
            }
            <div className='about'>
                <div className='about-left'>
                    <h3 className='title-top'>Your Gateway to </h3>
                    <h2 className='title'>Exceptional Software Services</h2>

                    <p className='para'>
                        Established in 2023, Lumosys Solutions shines as a dynamic startup company specializing in comprehensive software development, innovative web designing, and mobile application solutions. We pride ourselves on prioritizing our clients' needs, providing them with unparalleled service and support that consistently surpasses their expectations.
                        <br />
                        <br />
                        Choose Lumosys Solutions as your trusted partner, and let us illuminate the path to a brighter future for your business. Together, we'll harness the power of technology and drive your organization towards unprecedented growth and prosperity.
                    </p>
                    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
                <div className='about-right'>
                    <img src={require('./Assets/services.png')} alt='Services' />
                </div>
            </div>

            {/* 
            /// Services Section
            ______________________________________________////
            ///
            */}
            <div className='services'>
                <div className='services-inner'>
                    <h3 className='title-top'>Our Services</h3>
                    <h2 className='title'>
                        <span>Industry Demand IT</span> Solutions
                    </h2>
                </div>

                <div className='section-five-cards' data-aos="zoom-in">
                    <div className="Slider">
                        <Carousel
                            responsive={responsive}
                            infinite={true}
                            autoPlay={true}
                            showDots={true}
                            autoPlaySpeed={3000}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={[
                                "tablet",
                                "mobile",
                                "desktop",
                                "superLargeDesktop",
                                "desktopMini",
                            ]}
                            dotListClass="custom-dot-list-style"
                            activeDotClass="custom-dot-active"
                        >

                            <div className="card">
                                <h4>Full stack  development</h4>
                                <div className='card-content'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.massa nulla massa.
                                    </p>
                                    <a href='/'>
                                        Explore More
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <h4>Full stack  development</h4>
                                <div className='card-content'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.massa nulla massa.
                                    </p>
                                    <a href='/'>
                                        Explore More
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <h4>Full stack  development</h4>
                                <div className='card-content'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.massa nulla massa.
                                    </p>
                                    <a href='/'>
                                        Explore More
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <h4>Full stack  development</h4>
                                <div className='card-content'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur. Nunc in in odio morbi. Sodales elementum congue elementum amet sed luctus iaculis. Aliquam faucibus convallis orci morbi massa nulla massa.massa nulla massa.
                                    </p>
                                    <a href='/'>
                                        Explore More
                                    </a>
                                </div>
                            </div>

                        </Carousel>
                    </div>
                </div>

                <div className='services-btn'>
                    <a href='/services'> View All Services </a>
                </div>
            </div>

            {/* 
            /// Technologies Section
            ______________________________________________////
            ///
            */}
            <div className='hero-technologies'>
                <div className='hero-technologies-up'>
                    <h3 className='title-top'>We are With</h3>
                    <h2 className='title'>
                        Latest Technologies
                    </h2>
                </div>
                <div className='hero-technologies-bottum'>
                    <div className="icon-slider">
                        <Carousel
                            responsive={iconresponsive}
                            infinite={true}
                            autoPlay={true}
                            showDots={false}
                            autoPlaySpeed={3000}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={[
                                "tablet",
                                "mobile",
                                "desktop",
                                "superLargeDesktop",
                                "desktopMini",
                            ]}
                            dotListClass="custom-dot-list-style"
                            activeDotClass="custom-dot-active"
                        >

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/1.png')}
                                    alt='1'
                                />
                            </div>

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/2.png')}
                                    alt='1'
                                />
                            </div>

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/3.png')}
                                    alt='1'
                                />
                            </div>

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/4.png')}
                                    alt='1'
                                />
                            </div>

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/5.png')}
                                    alt='1'
                                />
                            </div>

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/6.png')}
                                    alt='1'
                                />
                            </div>

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/7.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/8.png')}
                                    alt='1'
                                />
                            </div>

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/9.png')}
                                    alt='1'
                                />
                            </div>

                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/1.png')}
                                    alt='1'
                                />
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>


            {/* 
            /// Products Section
            ______________________________________________////
            ///
            */}

            <div className='home-products'>
                <div className='home-products-top'>
                    <div className='home-products-top-left'>
                        <h3 className='title-top'>Your Gateway to</h3>
                        <h2 className='title'>
                            Our Latest Products
                        </h2>
                    </div>
                    <p className='para'>
                        Established in 2023, Lumosys Solutions shines as a dynamic startup company specializing in comprehensive software development, innovative web designing, and mobile application solutions. We pride ourselves on prioritizing our clients' needs, providing them with unparalleled service and support that consistently surpasses their expectations.
                    </p>
                </div>
                <div className='home-products-bottom'>
                    <div className='home-products-item'>
                        <div className='home-products-item-img'>
                            <img src={require('./Assets/products/1.png')} alt='1' />
                        </div>
                        <div className='home-products-item-content'>
                            <h2>
                                Lumo<p>Lerarn</p><span>lite</span>
                            </h2>

                            <h4>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </h4>
                            <p>
                                Established in 2023, Lumosys Solutions shines as a dynamic startup company specializing in comprehensive software development, innovative web designing, and mobile application.
                            </p>
                            <a href='/'>
                                Read More ...
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

export default Home