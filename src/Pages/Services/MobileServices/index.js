import React from 'react';
import "./style.scss";
import iosImg from "../../../Assets/Images/iosImg.png";
import androidImg from "../../../Assets/Images/androidImg.png";
import cpImg from "../../../Assets/Images/cpImg.png";

// import GetStarted from './SubComponents/GetStarted/GetStarted';

function ServicesMobile() {
  return (
    <div className='servicesmobile'>
    <div className='pallet1'>
      <h4>Empowering Your business for Success</h4>
      <h1 className='mainHeading'>Mobile Application<br></br>Development</h1>
      <br></br>
      <p>At LumoSys, we specialize in creating exceptional mobile applications that<br></br>
         empower businesses and individuals to succeed in the digital era.<br></br>
         Our experienced team of developers combines cutting-edge technologies with <br></br>
         innovative design to deliver high-quality, user-friendly mobile apps tailored to <br></br>
         your unique requirements.
      </p>

      <button>Read More</button>
    </div>

    <div className='pallet2'>
      <div className='pallet2_container'>
        <h2>Our Methodology</h2>
        <p>Crafting Mobile Applications with <br></br>Precision and Care</p>

        <div className='card_pallet1'>
          <div className='box1'>
            <h1>01.</h1>
            <h2>Discovery</h2>
            <br></br>
            <p>We kick-start the project by gaining insights into your business goals, target users, and desired features. 
              This helps us define a clear roadmap and identify the best strategies for your mobile app.</p>
          </div>

          <div className='box2'>
            <h1>02.</h1>
            <h2>Design</h2>
            <br></br>
            <p>Our talented designers create visually appealing and intuitive interfaces that enhance user engagement. 
              We focus on creating seamless user experiences while maintaining a consistent brand identity throughout the app.</p>
          </div>

          <div className='box3'>
            <h1>03.</h1>
            <h2>Development</h2>
            <br></br>
            <p>Our skilled development team brings your app to life using the latest technologies and frameworks. 
              We follow agile development methodologies, allowing for iterative feedback and efficient project management.</p>
          </div>
        </div>

        <div className='card_pallet2'>
          <div className='box1'>
            <h1>04.</h1>
            <h2>Testing and QA</h2>
            <br></br>
            <p>To ensure a flawless user experience, we conduct rigorous testing across multiple devices and operating systems. 
              We identify and fix any bugs or performance issues, making sure your app is reliable and responsive.</p>
          </div>

          <div className='box2'>
            <h1>05.</h1>
            <h2>Deployment and Support</h2>
            <br></br>
            <p>Once your app is ready, we guide you through the deployment process and help you launch it on the relevant app stores. 
              We provide ongoing maintenance and support services, ensuring your app remains up-to-date and functions optimally.</p>
          </div>
        </div>

      </div>
    </div>

    <div className='pallet3'>
        <h2>Unlocking Possibilities With</h2>
        <h2 className='bottomHeading' >Our Mobile App Development Expertise</h2>

        <div className='container1'>
          <div className='infoText'>
          <h2>iOS Development</h2>
          <p>Our team excels in creating feature-rich, intuitive iOS apps that <br></br> 
          leverage the latest capabilities of Apple devices. From iPhone to<br></br>
          iPad and Apple Watch, we can bring your ideas to life on the<br></br> 
          iOS platform.</p>
          </div>

          <img src={iosImg} alt='iosImg' />
        </div>

        <div className='container2'>
          <img src={androidImg} alt='androidImg' />
          <div className='infoText'>
          <h2>Android Development</h2>
          <p>We specialize in building high-performance, scalable Android<br></br>
            applications that run seamlessly on a wide range of devices.<br></br>
            Whether it's for smartphones, tablets, or wearables,<br></br>
            our Android apps are tailored to deliver exceptional user experiences.</p>
          </div>

        </div>

        <div className='container3'>
          <div className='infoText'>
          <h2>Cross-Platform Development</h2>
          <p>We leverage cross-platform frameworks like React Native<br></br>
            and Flutter to develop apps that can run on both iOS and Android platforms.<br></br>
            This approach saves time and resources while ensuring a consistent<br></br>
            user experience across devices.</p>
          </div>
          <img src={cpImg} alt='iosImg' />
        </div>
    </div>

    {/* <GetStarted /> */}

    </div>
  )
}

export default ServicesMobile;