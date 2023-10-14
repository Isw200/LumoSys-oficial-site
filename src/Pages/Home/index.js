import React, { useEffect } from 'react'

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

// Images
import HeroBg from './Assets/bg.webp'

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 4,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
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
        children: 'We provide tailored, high-quality software, web design, and mobile app solutions, fostering innovation and exceeding customer expectations. We enable businesses to thrive in the digital age.',
    },
    {
        key: '2',
        label: 'Vision',
        children: 'To become a global leader in transformative technology solutions, empowering businesses through cutting-edge software, web design, and mobile apps, fostering growth and prosperity.',
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
    // Active link
    useEffect(() => {
        const activeTab = document.querySelector(".activenav");
        if (activeTab) {
            activeTab.classList.remove("activenav");
        }
        const currentTab = document.getElementById("navhome");
        if (currentTab) {
            currentTab.classList.add("activenav");
        }
    }, []);

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
            <div className='hero'
                style={{
                    backgroundImage: `url(${HeroBg})`
                }}
            >
                <h1 data-aos="fade-up">
                    Illuminating Tomorrow's Technology.
                </h1>
                <h4 data-aos="fade-up">
                    Pioneering Innovation, Shaping the Future. Explore cutting-edge solutions that illuminate tomorrow's technology landscape.
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
                        Established in 2023, Lumosys Technologies is a leading startup company specializing in custom software development, innovative web design, and mobile application solutions. Our dedicated team prioritizes client needs, ensuring unparalleled service and support. We shine a light on your path to business success, harnessing technology's power to drive growth and prosperity.
                        <br />
                        <br />

                        As a trusted partner, Lumosys Technologies delivers tailored software solutions across diverse industries. Our commitment to quality and innovation has earned us a reputation for excellence. Explore our comprehensive services to discover how we can illuminate your business's future.
                    </p>
                    <Tabs data-aos="fade-up" defaultActiveKey="1" items={items} onChange={onChange} />
                </div>
                <div className='about-right' data-aos="zoom-in">
                    <img src={require('./Assets/services.webp')} alt='Services' />
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
                                        Explore Full-Stack Development with us. From front-end aesthetics to back-end functionality, we build web applications that are responsive, scalable, and high-performing. Our expertise ensures a seamless online presence for your business.
                                    </p>
                                    <a href='/'>
                                        Explore More
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <h4>
                                    Mobile App Development
                                </h4>
                                <div className='card-content'>
                                    <p>
                                        Our Mobile App Development team excels in creating user-focused iOS and Android apps. We blend creativity and functionality to deliver mobile solutions that elevate your brand, enhance user experiences, and achieve your business goals.
                                    </p>
                                    <a href='/'>
                                        Explore More
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <h4>Cloud
                                    <br />
                                    Solutions</h4>
                                <div className='card-content'>
                                    <p>
                                        Unlock the potential of the cloud with our expert Cloud Solutions. We manage cloud migration, optimization, and maintenance, using leading platforms like AWS and Azure. Our solutions guarantee secure, flexible, and cost-efficient operations.
                                    </p>
                                    <a href='/'>
                                        Explore More
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <h4>UX/UI
                                    <br />
                                    Engineering</h4>
                                <div className='card-content'>
                                    <p>
                                        Elevate user engagement with our UX/UI Engineering. We create captivating and intuitive interfaces that enhance user satisfaction. Our data-driven designs ensure seamless experiences, better conversions, and a competitive edge for your brand.
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
                                    src={require('./Assets/technologies/10.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/11.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/12.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/13.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/14.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/15.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/16.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/17.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/18.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/19.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/20.png')}
                                    alt='1'
                                />
                            </div>
                            <div className="card">
                                <img
                                    src={require('./Assets/technologies/21.png')}
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
                        Explore our latest projects at Lumosys Technologies, where innovation meets excellence. Our dedicated team has crafted cutting-edge solutions to address real-world challenges, delivering tangible results and driving business success.
                    </p>
                </div>
                <div className='home-products-bottom' data-aos="zoom-in">
                    <div className='home-products-item'>
                        <div className='home-products-item-img'>
                            <img src={require('./Assets/products/1.webp')} alt='1' />
                        </div>
                        <div className='home-products-item-content'>
                            <h2>
                                Lumo<p>Learn</p><span>lite</span>
                            </h2>

                            <h4>
                                Your Path to Teaching Excellence Starts Here.
                            </h4>
                            <p>
                                Elevate education with our feature-packed LMS, designed to simplify teaching, enhance learning, and empower educators and students alike.
                            </p>
                            <a
                                target='_blank'
                                href='/products/lumolearn'
                            >
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
                            <img src={require('./Assets/products/2.webp')} alt='1' />
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
                                Empowering Youth Through Code: The Dojo Initiative
                            </h4>
                            <p>
                                CoderDojo Sri Lanka, under STEMUP Educational Foundation, is the official Sri Lankan network of CoderDojo. We've established 30+ rural IT Centers and lead Dojos in libraries and SLT-Mobitel Training Centers.
                            </p>
                            <a
                                target='_blank'
                                href='https://coderdojo.lk/'
                                rel="noreferrer"
                            >
                                Read More ...
                            </a>
                        </div>
                    </div>
                </div>

                <div className='home-products-btn' data-aos="fade-up">
                    <a
                        href='/portfolio'
                    >
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
                                    <div className='image'>
                                        <img
                                            src={require('./Assets/reviews/visal.webp')}
                                            alt='1'
                                        />
                                    </div>
                                </div>
                                <div className='card-content'>
                                    <h4>
                                        Visal Jayarathna
                                    </h4>
                                    <h3>
                                        Founder & CEO of Yasalanka Educational Institute
                                    </h3>
                                    <p>
                                        The LMS you created was highly useful and convenient for me as well as for my students as it came in handy and really helped to organise my work which is a redemption within my work life and mind.
                                        Even my students have given many positive feedback upon this about it being highly convenient. The LMS is actually priceless given the efficiency of the system and the price is very affordable. This is a treasure for me and my students.
                                    </p>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://www.yasalankaphysics.lk/'
                                    >
                                        Visit work...
                                    </a>
                                </div>
                            </div>

                            <div className="card">
                                <div className='card-image'>
                                    <div className='image'>
                                        <img
                                            src={require('./Assets/reviews/visal.webp')}
                                            alt='1'
                                        />
                                    </div>
                                </div>
                                <div className='card-content'>
                                    <h4>
                                        Visal Jayarathna
                                    </h4>
                                    <h3>
                                        Founder & CEO of Yasalanka Educational Institute
                                    </h3>
                                    <p>
                                        The LMS you created was highly useful and convenient for me as well as for my students as it came in handy and really helped to organise my work which is a redemption within my work life and mind.
                                        Even my students have given many positive feedback upon this about it being highly convenient. The LMS is actually priceless given the efficiency of the system and the price is very affordable. This is a treasure for me and my students.
                                    </p>
                                    <a
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        href='https://www.yasalankaphysics.lk/'
                                    >
                                        Visit work...
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
                        Our Team
                    </h3>
                    <h2 className='title' data-aos="fade-up">
                        Meet Our Wizards of Innovation
                    </h2>
                    <p className='para' data-aos="fade-up">
                        Our skilled team of software engineers, web designers, and mobile app developers is dedicated to exceeding expectations with cutting-edge technology, unparalleled service, and unwavering commitment.
                    </p>
                    <div className='home-team-cards' data-aos="zoom-in">
                        <div className='home-team-cards-item'>
                            <Image
                                src={require('./Assets/team/isuru.webp')}
                                preview={{
                                    visible: false,
                                    mask: <div className='card-details'>
                                        <h2>Isuru Ariyarathna</h2>
                                        {
                                            window.innerWidth > 768 &&
                                            <>
                                                {/* <p>CEO</p> */}
                                                <div>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.facebook.com/profile.php?id=100080369274605'>
                                                        <FacebookFilled />
                                                    </a>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://twitter.com/'>
                                                        <TwitterCircleFilled />
                                                    </a>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.linkedin.com/in/isuru-ariyarathna-8a5404222/'>
                                                        <LinkedinFilled />
                                                    </a>
                                                </div>
                                            </>
                                        }
                                    </div>
                                }}
                            />
                        </div>

                        <div className='home-team-cards-item' data-aos="zoom-in">
                            <Image
                                src={require('./Assets/team/senal.webp')}
                                preview={{
                                    visible: false,
                                    mask: <div className='card-details'>
                                        <h2>
                                            Senal Fernando
                                        </h2>
                                        {
                                            window.innerWidth > 768 &&
                                            <>
                                                {/* <p>CEO</p> */}
                                                <div>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.facebook.com/manoj.fernando.3766'>
                                                        <FacebookFilled />
                                                    </a>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://twitter.com/'>
                                                        <TwitterCircleFilled />
                                                    </a>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.linkedin.com/in/senal-fernando/'>
                                                        <LinkedinFilled />
                                                    </a>
                                                </div>
                                            </>
                                        }
                                    </div>
                                }}
                            />
                        </div>

                        <div className='home-team-cards-item' data-aos="zoom-in">
                            <Image
                                src={require('./Assets/team/dinith.webp')}
                                preview={{
                                    visible: false,
                                    mask: <div className='card-details'>
                                        <h2>
                                            Dinith Fernando
                                        </h2>
                                        {
                                            window.innerWidth > 768 &&
                                            <>
                                                {/* <p>CEO</p> */}
                                                <div>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.facebook.com/profile.php?id=100007565476175'>
                                                        <FacebookFilled />
                                                    </a>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://twitter.com/'>
                                                        <TwitterCircleFilled />
                                                    </a>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.linkedin.com/in/dinith-fernando-09ab89222/'>
                                                        <LinkedinFilled />
                                                    </a>
                                                </div>
                                            </>
                                        }
                                    </div>
                                }}
                            />
                        </div>

                        <div className='home-team-cards-item' data-aos="zoom-in">
                            <Image
                                src={require('./Assets/team/maheshi.webp')}
                                preview={{
                                    visible: false,
                                    mask: <div className='card-details'>
                                        <h2>
                                            Maheshi Anuradha
                                        </h2>
                                        {
                                            window.innerWidth > 768 &&
                                            <>
                                                {/* <p>CEO</p> */}
                                                <div>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.facebook.com/profile.php?id=100068407172532'>
                                                        <FacebookFilled />
                                                    </a>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://twitter.com/'>
                                                        <TwitterCircleFilled />
                                                    </a>
                                                    <a
                                                        target='_blank'
                                                        rel='noopener noreferrer'
                                                        href='https://www.linkedin.com/in/maheshi-anuradha-6812b5222/'>
                                                        <LinkedinFilled />
                                                    </a>
                                                </div>
                                            </>
                                        }
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
                            Web design app development for Android & iOS. We have over 2 years of experience in helping companies.
                        </p>
                        <button
                            onClick={() => {
                                window.location.href = '/contact-us'
                            }}
                        >
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