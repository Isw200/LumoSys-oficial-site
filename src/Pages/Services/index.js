import React, { useEffect } from 'react'

import './style.scss'

import Lottie from 'react-lottie';
import LottieImage from './Assets/Animation - 1697220518321.json'

const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieImage,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

const Services = () => {

    // Active link
    useEffect(() => {
        const activeTab = document.querySelector(".activenav");
        if (activeTab) {
            activeTab.classList.remove("activenav");
        }
        const currentTab = document.getElementById("navservice");
        if (currentTab) {
            currentTab.classList.add("activenav");
        }
    }, []);

    return (
        <div className='services-page'>
            <div className='blogs-hero'>
                <div className='blogs-hero-left' data-aos="fade-up">
                    <h1>
                        <span>
                            Our Services
                        </span>
                        <br />
                        We offer a wide range of services
                    </h1>
                    <p>
                        Discover Lumosy Technologies' comprehensive suite of advanced solutions. Our expertise spans the digital spectrum, empowering businesses to excel in an ever-evolving tech landscape. Explore how we can illuminate your path to success with innovative and tailored offerings.
                    </p>
                </div>

                <div className='blogs-hero-right' data-aos="zoom-in">
                    <Lottie
                        options={lottieOptions}
                        width="100%"
                    />
                </div>
            </div>

            <div className='blogs-content'>
                <div className='section-four-cards'>
                    <div className='card' >
                        <h1>
                            Full Stack Development
                        </h1>
                        <p>
                            We offer full stack development services to build web applications that are robust, scalable, and extensible. Our full stack developers are adept at both front-end and back-end technologies and can build a complete web application from scratch.
                        </p>
                        <a href='/services/full-stack-development'>
                            Learn More →
                        </a>
                    </div>

                    <div className='card' >
                        <h1>
                            Web Development
                        </h1>
                        <p>
                            Elevate your online presence with Lumosy Technologies' Web Development service. We create dynamic, responsive websites tailored to your unique goals. Our expertise ensures seamless, high-performing digital experiences that captivate your audience.
                        </p>
                        <a href='/services/full-stack-development'>
                            Learn More →
                        </a>
                    </div>

                    <div className='card' >
                        <h1>
                            Mobile App Development
                        </h1>
                        <p>
                            Transform your vision into reality with Lumosy Technologies' Mobile App Development service. Our team crafts intuitive, feature-rich apps for iOS and Android, delivering exceptional user experiences and driving your brand's success.
                        </p>
                        <a href='/services/full-stack-development'>
                            Learn More →
                        </a>
                    </div>

                    <div className='card' >
                        <h1>
                            Cloud
                            <br />
                            Solutions
                        </h1>
                        <p>
                            Empower your business with Lumosy Technologies' Cloud Solutions. We specialize in cloud migration, optimization, and management on top platforms like AWS, Azure, and Google Cloud. Secure, scalable, and cost-effective solutions for your digital infrastructure.
                        </p>
                        <a href='/services/full-stack-development'>
                            Learn More →
                        </a>
                    </div>

                    <div className='card' >
                        <h1>
                            UX/UI Engineering
                        </h1>
                        <p>
                            Enhance digital experiences with Lumosy Technologies' UX/UI Engineering. We design captivating, user-friendly interfaces that optimize satisfaction and boost conversions. Our data-driven approach ensures seamless designs for your brand's success.
                        </p>
                        <a href='/services/full-stack-development'>
                            Learn More →
                        </a>
                    </div>

                    <div className='card' >
                        <h1>
                            WordPress Development
                        </h1>
                        <p>
                            Unlock the potential of WordPress with Lumosy Technologies' Development expertise. We craft tailored, feature-rich websites, leveraging the power of this platform to deliver user-friendly, customizable, and scalable digital solutions.
                        </p>
                        <a href='/services/full-stack-development'>
                            Learn More →
                        </a>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Services