import React from 'react'

// Antd
import { Image, Tabs } from 'antd';
import { FacebookFilled, TwitterCircleFilled, LinkedinFilled } from '@ant-design/icons';

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Images
import Lottie from 'react-lottie';
import LottieImage from './Assets/animation_lna0dwz4.json'

// Reveal
import AOS from 'aos';
import 'aos/dist/aos.css';

import './style.scss'
import './slider.css'
import './icon-slider.css'
import './terminal.scss'

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
        breakpoint: { max: 1024, min: 770 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 770, min: 0 },
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

const reviewresponsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1450 },
        items: 1,
    },
    desktopMini: {
        breakpoint: { max: 1450, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
}

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

    const lottieOptions = {
        loop: true,
        autoplay: true,
        animationData: LottieImage,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

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
                    <a href='/products' data-aos="fade-up"> Products </a>
                    <a className='border-btn' href='/services' data-aos="fade-up"> Services </a>
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
                    <h3 className='title-top' data-aos="fade-up">Your Gateway to </h3>
                    <h2 data-aos="fade-up" className='title'>Exceptional Software Services</h2>

                    <p className='para' data-aos="fade-up">
                        Established in 2023, Lumosys Solutions shines as a dynamic startup company specializing in comprehensive software development, innovative web designing, and mobile application solutions. We pride ourselves on prioritizing our clients' needs, providing them with unparalleled service and support that consistently surpasses their expectations.
                        <br />
                        <br />
                        Choose Lumosys Solutions as your trusted partner, and let us illuminate the path to a brighter future for your business. Together, we'll harness the power of technology and drive your organization towards unprecedented growth and prosperity.
                    </p>
                    <Tabs data-aos="fade-up" defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
                <div className='about-right' data-aos="zoom-in">
                    <img src={require('./Assets/services.png')} alt='Services' />
                </div>
            </div>

            {/* 
            /// Services Section
            ______________________________________________////
            ///
            */}
            <div className='services'>
                <div className='services-inner' data-aos="fade-up">
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

                <div className='services-btn' data-aos="fade-up">
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
                    <div className="icon-slider" >
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
                    <div className='home-products-top-left' data-aos="fade-up">
                        <h3 className='title-top'>Your Gateway to</h3>
                        <h2 className='title'>
                            Our Latest Projects
                        </h2>
                    </div>
                    <p className='para' data-aos="fade-up">
                        Established in 2023, Lumosys Solutions shines as a dynamic startup company specializing in comprehensive software development, innovative web designing, and mobile application solutions. We pride ourselves on prioritizing our clients' needs, providing them with unparalleled service and support that consistently surpasses their expectations.
                    </p>
                </div>
                <div className='home-products-bottom' data-aos="zoom-in">
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

                    <div className='home-products-item' data-aos="zoom-in">
                        <div className='home-products-item-img'
                            style={{
                                order: '2'
                            }}
                        >
                            <img src={require('./Assets/products/2.png')} alt='1' />
                        </div>
                        <div className='home-products-item-content'
                            style={{
                                order: '1'
                            }}
                        >
                            <h2>
                                CoderDojo <p style={{ marginLeft: "10px" }}>Sri Lanka</p>
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

                <div className='home-products-btn' data-aos="fade-up">
                    <a href='/products' >
                        View All Projects
                    </a>
                </div>
            </div>

            {/* 
            /// Reviews Section
            ______________________________________________////
            ///
            */}

            <div className='home-reviews'>
                <div className='home-reviews-up' data-aos="fade-up">
                    <h3 className='title-top'>
                        What Our Clients Say
                    </h3>
                    <h2 className='title'>
                        Client Reviews & Testimonials
                    </h2>
                </div>

                <div className='home-reviews-bottum'>
                    <div className="review-slider" data-aos="zoom-in">
                        <Carousel
                            responsive={reviewresponsive}
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
                                <div className='card-image'>
                                    <img
                                        src={require('./Assets/reviews/1.png')}
                                        alt='1'
                                    />
                                </div>
                                <div className='card-content'>
                                    <h4>
                                        User Name
                                    </h4>
                                    <h3>
                                        CEO of Company
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.
                                        adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.
                                    </p>
                                    <a href='/'>
                                        Read More ...
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-image'>
                                    <img
                                        src={require('./Assets/reviews/1.png')}
                                        alt='1'
                                    />
                                </div>
                                <div className='card-content'>
                                    <h4>
                                        User Name
                                    </h4>
                                    <h3>
                                        CEO of Company
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.
                                        adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.
                                    </p>
                                    <a href='/'>
                                        Read More ...
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-image'>
                                    <img
                                        src={require('./Assets/reviews/1.png')}
                                        alt='1'
                                    />
                                </div>
                                <div className='card-content'>
                                    <h4>
                                        User Name
                                    </h4>
                                    <h3>
                                        CEO of Company
                                    </h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.
                                        adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quas.
                                    </p>
                                    <a href='/'>
                                        Read More ...
                                    </a>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>


            {/* 
            /// Team Section
            ______________________________________________////
            ///
            */}

            <div className='home-team'>
                <div className='home-team-left'>
                    <h3 className='title-top' data-aos="fade-up">
                        What Our Clients Say
                    </h3>
                    <h2 className='title' data-aos="fade-up">
                        Client Reviews & Testimonials
                    </h2>
                    <p className='para' data-aos="fade-up">
                        Established in 2023, Lumosys Solutions shines as a dynamic startup company specializing in comprehensive software development, innovative web designing, and mobile application solutions.
                    </p>
                    <div className='home-team-cards' data-aos="zoom-in">
                        <div className='home-team-cards-item'>
                            <Image
                                src={require('./Assets/team/1.jpeg')}
                                preview={{
                                    visible: false,
                                    mask: <div className='card-details'>
                                        <h2>Isuru Ariyarathna</h2>
                                        <p>CEO</p>
                                        <div>
                                            <a href='/'>
                                                <FacebookFilled />
                                            </a>
                                            <a href='/'>
                                                <TwitterCircleFilled />
                                            </a>
                                            <a href='/'>
                                                <LinkedinFilled />
                                            </a>
                                        </div>
                                    </div>
                                }}
                            />
                        </div>

                        <div className='home-team-cards-item' data-aos="zoom-in">
                            <Image
                                src={require('./Assets/team/1.jpeg')}
                                preview={{
                                    visible: false,
                                    mask: <div className='card-details'>
                                        <h2>Isuru Ariyarathna</h2>
                                        <p>CEO</p>
                                        <div>
                                            <a href='/'>
                                                <FacebookFilled />
                                            </a>
                                            <a href='/'>
                                                <TwitterCircleFilled />
                                            </a>
                                            <a href='/'>
                                                <LinkedinFilled />
                                            </a>
                                        </div>
                                    </div>
                                }}
                            />
                        </div>

                        <div className='home-team-cards-item' data-aos="zoom-in">
                            <Image
                                src={require('./Assets/team/1.jpeg')}
                                preview={{
                                    visible: false,
                                    mask: <div className='card-details'>
                                        <h2>Isuru Ariyarathna</h2>
                                        <p>CEO</p>
                                        <div>
                                            <a href='/'>
                                                <FacebookFilled />
                                            </a>
                                            <a href='/'>
                                                <TwitterCircleFilled />
                                            </a>
                                            <a href='/'>
                                                <LinkedinFilled />
                                            </a>
                                        </div>
                                    </div>
                                }}
                            />
                        </div>

                        <div className='home-team-cards-item' data-aos="zoom-in">
                            <Image
                                src={require('./Assets/team/1.jpeg')}
                                preview={{
                                    visible: false,
                                    mask: <div className='card-details'>
                                        <h2>Isuru Ariyarathna</h2>
                                        <p>CEO</p>
                                        <div>
                                            <a href='/'>
                                                <FacebookFilled />
                                            </a>
                                            <a href='/'>
                                                <TwitterCircleFilled />
                                            </a>
                                            <a href='/'>
                                                <LinkedinFilled />
                                            </a>
                                        </div>
                                    </div>
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className='home-team-right' data-aos="zoom-in">
                    <div class="terminal-container">
                        <div class="terminal_toolbar">
                            <div class="butt">
                                <button class="btn btn-color"></button>
                                <button class="btn"></button>
                                <button class="btn"></button>
                            </div>
                            <p class="user">lumosys@admin: ~</p>
                            <div class="add_tab">
                                +
                            </div>
                        </div>
                        <div class="terminal_body">
                            <div class="terminal_promt">
                                <span class="terminal_user">lumosys@admin:</span>
                                <span class="terminal_location">~</span>
                                <span class="terminal_bling">$
                                    npm install lumo/wizards
                                </span>
                            </div>

                            <div class="terminal_promt">
                                <span class="terminal_location">~</span>
                                <span class="terminal_bling"
                                >
                                    four wizards add to project dependencies

                                </span>
                            </div>

                            <br />

                            <div class="terminal_promt">
                                <span class="terminal_location">~</span>
                                <span class="terminal_bling">

                                    Meet our wizards below, and let them cast their spells of innovation for your next project! ✨

                                </span>
                            </div>
                            <br />

                            <div class="terminal_promt">
                                <span class="terminal_location">~</span>
                                <span class="terminal_bling"
                                >
                                    they will take care of the rest
                                </span>
                            </div>

                            <div class="terminal_promt">
                                <span class="terminal_user">lumosys@admin:</span>
                                <span class="terminal_location">~</span>
                                <span class="terminal_bling">$</span>
                                <span class="terminal_location">npm
                                    start</span>
                                <span class="terminal_cursor"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 
            /// Get Started Section
            ______________________________________________////
            ///
            */}

            <div className='home-start'>
                <div className='home-start-inner' data-aos="fade-up">
                    <div className='home-start-inner-left'>
                        <h3>
                            Let's Create an Amazing Project Together!
                        </h3>
                        <p>
                            Web design app development for Android & iOS. We have over 5 years of experience in helping companies.
                        </p>
                        <button>
                            <span>
                                Get Started
                            </span>
                            <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="37" cy="37" r="35.5" stroke="white" stroke-width="3"></circle>
                                <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="white"></path>
                            </svg>
                        </button>
                    </div>
                    <data className='home-start-inner-right'>
                        <Lottie
                            options={lottieOptions}
                            width="100%"
                        />
                    </data>
                </div>
            </div>


        </div>


    )
}

export default Home