import React, { useEffect } from 'react'

import { PlayCircleOutlined } from '@ant-design/icons';

// Carousel
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import './style.scss'
import { Tooltip } from 'antd';

const reviewresponsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 2,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1450 },
        items: 2,
    },
    desktopMini: {
        breakpoint: { max: 1450, min: 1024 },
        items: 2,
    },
    tablet: {
        breakpoint: { max: 1024, min: 768 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 768, min: 0 },
        items: 1,
    },
}

const LumoLearn = () => {

    useEffect(() => {
        const activeTab = document.querySelector(".activenav");
        if (activeTab) {
            activeTab.classList.remove("activenav");
        }
        const currentTab = document.getElementById("navproducts");
        if (currentTab) {
            currentTab.classList.add("activenav");
        }
    }, []);

    return (
        <div className='lumo-learn'>
            <div className='lumo-learn-top'>
                <div className='lumo-learn-top-left'>
                    <h1>
                        Lumo<span>Learn</span>
                    </h1>
                    <h2>
                        Your Path to Teaching Excellence Starts Here.
                    </h2>
                    <p>
                        Elevate education with our feature-packed LMS, designed to simplify teaching, enhance learning, and empower educators and students alike.
                    </p>
                    <div className='lumo-learn-top-left-btns'>
                        <button
                            onClick={() => {
                                const section = document.getElementById('feat');
                                section.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            Learn More
                        </button>
                        <Tooltip
                            title="Watch Video about LumoLearn"
                        >
                            <button
                                onClick={() => {
                                    window.open('https://youtu.be/kL5ELjUg_SQ?si=ORXZzTepuYb43-4S', '_blank');
                                }}
                            >
                                <PlayCircleOutlined />
                            </button>
                        </Tooltip>
                    </div>
                </div>
                <div className='lumo-learn-top-right'>
                    <img src={require('./Assets/lumolap.png')} alt=''></img>
                </div>
            </div>

            <div className='lumo-learn-features'>
                <div className='features-top' id='feat'>
                    <h1>
                        Main Features of LumoLearn
                    </h1>
                    <h2>
                        Manke your classes more efficient with LumoLearn
                    </h2>
                </div>

                <div className='section-four-cards'>

                    <div className='card' >
                        <div className='card-image img3'>
                            <img src={require('./Assets/Features/dashboard.png')} alt='card-img ' />
                        </div>
                        <div className='card-content'>
                            <h1>
                                Dashboard Hub
                            </h1>
                            <h2>
                                Centralized class management at your fingertips.
                            </h2>
                        </div>
                    </div>

                    <div className='card' >
                        <div className='card-image img3'>
                            <img src={require('./Assets/Features/rec.png')} alt='card-img ' />
                        </div>
                        <div className='card-content'>
                            <h1>
                                Capture & Replay
                            </h1>
                            <h2>
                                Seamless recording and playback of class sessions.
                            </h2>
                        </div>
                    </div>

                    <div className='card' >
                        <div className='card-image img3'>
                            <img src={require('./Assets/Features/folder.png')} alt='card-img ' />
                        </div>
                        <div className='card-content'>
                            <h1>
                                Resource Repository
                            </h1>
                            <h2>
                                Easy access to class materials and resources.
                            </h2>
                        </div>
                    </div>

                    <div className='card' >
                        <div className='card-image img3'>
                            <img src={require('./Assets/Features/exam.png')} alt='card-img ' />
                        </div>
                        <div className='card-content'>
                            <h1>
                                Rapid Assessments
                            </h1>
                            <h2>
                                Efficient testing to gauge understanding.
                            </h2>
                        </div>
                    </div>

                    <div className='card' >
                        <div className='card-image img3'>
                            <img src={require('./Assets/Features/payments.png')} alt='card-img ' />
                        </div>
                        <div className='card-content'>
                            <h1>
                                Payment Portal
                            </h1>
                            <h2>
                                Simplified class fee management.
                            </h2>
                        </div>
                    </div>

                    <div className='card' >
                        <div className='card-image img3'>
                            <img src={require('./Assets/Features/calendar.png')} alt='card-img ' />
                        </div>
                        <div className='card-content'>
                            <h1>
                                Schedule Sync
                            </h1>
                            <h2>
                                Effortless class scheduling and organization.
                            </h2>
                        </div>
                    </div>

                    <div className='card' >
                        <div className='card-image img3'>
                            <img src={require('./Assets/Features/goal.png')} alt='card-img ' />
                        </div>
                        <div className='card-content'>
                            <h1>
                                Progress Insights
                            </h1>
                            <h2>
                                Monitor student development in real-time.
                            </h2>
                        </div>
                    </div>

                    <div className='card' >
                        <div className='card-image img3'>
                            <img src={require('./Assets/Features/report.png')} alt='card-img ' />
                        </div>
                        <div className='card-content'>
                            <h1>
                                Comprehensive Profiles
                            </h1>
                            <h2>
                                Detailed student records for informed decisions.
                            </h2>
                        </div>
                    </div>

                </div>
            </div>

            <div className='why-lumolearn'>
                <div className='why-lumolearn-left'>
                    <h1>
                        Why Lumo<span>Learn</span>?
                    </h1>
                    <h2>
                        Elevate education with our feature-packed LMS, designed to simplify teaching, enhance learning, and empower educators and students alike.
                    </h2>
                    <button>
                        Get Started
                    </button>
                </div>
                <div className='why-lumolearn-right'>
                    <img src={require('./Assets/pic1.png')} alt=''></img>
                </div>
            </div>

            <div className='what-they-say'>
                <div className='what-they-say-top'>
                    <h1>
                        What they say about us
                    </h1>
                    <h2>
                        See what our customers have to say about LumoLearn.
                    </h2>
                </div>
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
                                    src={require('./Assets/reviews/visal.png')}
                                    alt='1'
                                />
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
                            </div>
                        </div>

                        <div className="card">
                            <div className='card-image'>
                                <img
                                    src={require('./Assets/reviews/visal.png')}
                                    alt='1'
                                />
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
                            </div>
                        </div>

                        <div className="card">
                            <div className='card-image'>
                                <img
                                    src={require('./Assets/reviews/visal.png')}
                                    alt='1'
                                />
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
                            </div>
                        </div>
                    </Carousel>
                </div>
            </div>

            <div className='pricing'>
                <div className='pricing-top'>
                    <h1>
                        Pricing
                    </h1>
                    <h2>
                        Bright up your classes with LumoLearn.
                    </h2>
                </div>

                <div className='pricing-cards'>
                    <div className='card card1'>
                        <h1>
                            Lumo<span className='learn'>Learn</span><span className='suf'> Lite</span>
                        </h1>
                        <ul>
                            <li>1 Class</li>
                            <li>Up to 150 students</li>
                            <li>Video recordings</li>
                            <li>Class materials</li>
                            <li>Manage Students</li>
                            <li>Overview Video</li>
                            <li>Overview Content</li>
                        </ul>
                        <button>
                            Get Started
                        </button>
                    </div>

                    <div className='card card2'>
                        <h1>
                            Lumo<span className='learn'>Learn</span><span className='suf'> Plus</span>
                        </h1>
                        <ul>
                            {/* feature */}
                            <li>
                                <li>Up to 5 Classes</li>
                                <li>Up to 500 students</li>
                                <li>Video recordings</li>
                                <li>Class materials</li>
                                <li>Manage Students</li>
                                <li>Overview Video</li>
                                <li>Overview Content</li>
                                <li>Quick Tests</li>
                                <li>Class Payments</li>
                            </li>
                        </ul>
                        <button>
                            Get Started
                        </button>
                    </div>

                    <div className='card card3'>
                        <h1>
                            Lumo<span className='learn'>Learn</span><span className='suf'> Pro</span>
                        </h1>
                        <ul>
                            <li>
                                <li>Up to 10 Classes</li>
                                <li>1000+ students</li>
                                <li>Video recordings</li>
                                <li>Class materials</li>
                                <li>Manage Students</li>
                                <li>Overview Video</li>
                                <li>Overview Content</li>
                                <li>Quick Tests</li>
                                <li>Class Payments</li>
                                <li>Class Scheduling</li>
                                <li>Student's Progress</li>
                                <li>Students Forums</li>
                                <li>Chat Bot</li>
                                <li>Class Reports to Parents</li>
                            </li>
                        </ul>
                        <button>
                            Get Started
                        </button>
                    </div>
                </div>
                <div className='pricing-bottom'>
                    <h4>
                        Not found what you are looking for?
                    </h4>
                    <h2>
                        Don't worry, we can customize a plan for you.
                    </h2>
                    <button>
                        Contact Us
                    </button>
                </div>
            </div>

            <div className='lumolearn-getstated'>
                <div className='lumolearn-getstated-left'>
                    <h1>
                        Get Started with LumoLearn
                    </h1>
                    <h2>
                        Unleash your teaching potential with LumoLearn.
                    </h2>
                    <button>
                        Get Started
                    </button>
                </div>
                <div className='lumolearn-getstated-right'>
                    <div>
                        <img src={require('./Assets/getintouch.png')} alt=''></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LumoLearn