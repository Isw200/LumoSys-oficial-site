import React from 'react';
import "./style.scss";
import img6 from "../Assets/6.png";
import img7 from "../Assets/7.png";
import img8 from "../Assets/8.png";

import GetStarted from '../../Services/GetStarted/index.js';
import ServiceCard from "../../../Common/ServiceCards/index.js";

const details = [
  {
    id: "01",
    topic: "Discovery",
    content: "We kick-start the project by gaining insights into your business goals, target users, and desired features. This helps us define a clear roadmap and identify the best strategies for your mobile app.",
  }
  ,
  {
    id: "02",
    topic: "Design",
    content: "Our talented designers create visually appealing and intuitive interfaces that enhance user engagement. We focus on creating seamless user experiences while maintaining a consistent brand identity throughout the app.",
  }
  ,
  {
    id: "03",
    topic: "Development",
    content: "Our skilled development team brings your app to life using the latest technologies and frameworks. We follow agile development methodologies, allowing for iterative feedback and efficient project management.",
  }
  ,
  {
    id: "04",
    topic: "Testing and QA",
    content: "To ensure a flawless user experience, we conduct rigorous testing across multiple devices and operating systems. We identify and fix any bugs or performance issues, making sure your app is reliable and responsive.",
  }
  ,
  {
    id: "05",
    topic: "Deployment and Support",
    content: "Once your app is ready, we guide you through the deployment process and help you launch it on the relevant app stores. We provide ongoing maintenance and support services, ensuring your app remains up-to-date and functions optimally.",
  }
]

function ServicesMobile() {
  return (
    <div className='servicesmobile'>
    <div className='pallet1'>
      <h4 className='title-top'>Empowering Your business for Success</h4>
      <h1 className='mainHeading'>Mobile Application<br></br>Development</h1>
      <br></br>
      <p>At LumoSys, we specialize in creating exceptional mobile applications that
         empower businesses and individuals to succeed in the digital era.
         Our experienced team of developers combines cutting-edge technologies with 
         innovative design to deliver high-quality, user-friendly mobile apps tailored to 
         your unique requirements.
      </p>

      <div className='services-btn' data-aos="fade-up">
          <a href='/'> Read More </a>
      </div>

    </div>

    <div className='pallet2'>
      <div className='pallet2_container'>
        <h2 className='title-top'>Our Methodology</h2>
        <h2 className='title'>Crafting Mobile Applications with <br></br>Precision and Care</h2>

        <ServiceCard details={details} />

      </div>
    </div>

    <div className='pallet3'>
        <h2 className='title-top'>Unlocking Possibilities With</h2>
        <h2 className='title'>Our Mobile App Development Expertise</h2>

        <div className='container1'>
          <div className='infoText'>
          <h2  className='title-top'>iOS Development</h2>
          <p>Our team excels in creating feature-rich, intuitive iOS apps that 
          leverage the latest capabilities of Apple devices. From iPhone to
          iPad and Apple Watch, we can bring your ideas to life on the
          iOS platform.</p>
          </div>

          <div className='image'>
            <img src={img6} alt='img6' />
          </div>

        </div>

        <div className='container2'>
          <div className='image'>
            <img src={img7} alt='img7' />
          </div>
          <div className='infoText'>
          <h2  className='title-top'>Android Development</h2>
          <p>We specialize in building high-performance, scalable Android
            applications that run seamlessly on a wide range of devices.
            Whether it's for smartphones, tablets, or wearables,
            our Android apps are tailored to deliver exceptional user experiences.</p>
          </div>

        </div>

        <div className='container3'>
          <div className='infoText'>
          <h2  className='title-top'>Cross-Platform Development</h2>
          <p>We leverage cross-platform frameworks like React Native
            and Flutter to develop apps that can run on both iOS and Android platforms.
            This approach saves time and resources while ensuring a consistent
            user experience across devices.</p>
          </div>
          <div className='image'>
            <img src={img8} alt='img8' />
          </div>
        </div>
    </div>

    <GetStarted />

    </div>
  )
}

export default ServicesMobile;