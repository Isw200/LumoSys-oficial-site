import React,{useEffect} from 'react';
import "./style.scss";
import img1 from "../Assets/1.png";
import img2 from "../Assets/2.png";
import img3 from "../Assets/3.png";
import img4 from "../Assets/4.png";
import img5 from "../Assets/5.png";

import GetStarted from "../GetStarted/index.js";
import ServiceCard from "../../../Common/ServiceCards/index.js";


const details = [
  {
      id: "01",
      topic: "Discovery",
      content: "We conduct in-depth user research to gain valuable insights into your target audience. This helps us understand their behaviors, preferences, and pain points, allowing us to design experiences tailored to their needs.",
  }
  ,
  {
      id: "02",
      topic: "Design",
      content: "We structure and organize the information on your website or application in a way that is intuitive and easy to navigate. Our information architecture ensures that users can find what they're looking for quickly and effortlessly.",
  }
  ,
  {
      id: "03",
      topic: "Development",
      content: "Our team creates wireframes and interactive prototypes that provide a visual representation of your product's layout, functionality, and user flow. This allows you to visualize the design early in the process and gather feedback before moving into development.",
  }
  ,
  {
      id: "04",
      topic: "Testing and QA",
      content: "We focus on creating visually appealing interfaces that align with your brand identity while maintaining usability. Our designers pay attention to color schemes, typography, imagery, and iconography to create a cohesive and engaging visual experience.",
  }
  ,
  {
      id: "05",
      topic: "Deployment and Support",
      content: "With the increasing use of mobile devices, we ensure that your website or application is optimized for different screen sizes and devices. Our responsive designs adapt seamlessly to provide a consistent user experience across desktops, tablets, and smartphones.",
  }
  ,
  {
    id: "06",
    topic: "Usability Testing",
    content: "We conduct usability tests to evaluate how well your design performs with real users. Through user feedback and observations, we identify areas for improvement and make iterative refinements to enhance the overall user experience.",
  }
]

function ServicesUiUx() {
  const scrollToElement = () => {
    const target = document.querySelector("#methodology");
    const padding = 60;
    window.scrollTo({
        top: target.offsetTop - padding,
        behavior: "smooth"
    });
  }

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
    <div className='ServicesUiUx'>
      <div className='pallet1'>
        <h4 className='title-top'>Empowering Your business for Success</h4>
        <h1 className='mainHeading'>UI/UX<br></br>Engineering</h1>
        <p className='para'>At LumoSys, we believe that user experience (UX) and user interface (UI) 
          design are essential elements of creating successful digital products. Our 
          team of experienced designers is dedicated to crafting intuitive and visually 
          appealing user interfaces that elevate your brand and delight your users.
        </p>

        <div onClick={scrollToElement} className='services-btn'>
          <button> Read More </button>
        </div>

      </div>

      <div className='pallet2' id='methodology'>
        <div className='pallet2_container'>
          <h2 className='title-top'>Our Methodology</h2>
          <h2 className='title'>Crafting UX/UI Designs with<br></br>Precision and Care</h2>

          <ServiceCard details={details} />

        </div>
      </div>

      <div className='pallet3'>
        <h2 className='title-top'>Our Design Philosophy</h2>
        <h2 className='title'>Crafting User-Centric Designs with<br></br>Precision and Care</h2>

        <div className='container1'>
          <div className='infoText'>
            <h2>User-Centricity</h2>
            <p className='para'>We put your users at the forefront of our design process. By
              understanding their needs, behaviors, and goals, we create 
              designs that cater to their preferences and provide intuitive 
              interactions.</p>
          </div>

          <div className='image'>
            <img src={img1} alt='iosImg' />
          </div>
        </div>

        <div className='container2'>
          <div className='image'>
            <img src={img2} alt='iosImg' />
          </div>
          <div className='infoText'>
            <h2> Simplicity and Clarity</h2>
            <p className='para'>We strive for simplicity and clarity in our designs. We believe 
              that clean and uncluttered interfaces enable users to focus on
              what matters most, resulting in a more enjoyable and efficient 
              user experience.</p>
          </div>

        </div>

        <div className='container3'>
          <div className='infoText'>
            <h2>Consistency</h2>
            <p className='para'>Consistency is key to building a strong brand identity and 
              fostering user trust. We ensure that your design elements, such
              as colors, typography, and interactions, remain consistent 
              throughout your digital product, creating a cohesive and
              memorable experience.</p>
          </div>
          <div className='image'>
            <img src={img3} alt='iosImg' />
          </div>
        </div>

        <div className='container4'>
          <div className='image'>
            <img src={img4} alt='iosImg' />
          </div>
          <div className='infoText'>
            <h2>Accessibility</h2>
            <p className='para'>We design with inclusivity in mind. Our designs adhere to 
              accessibility standards, making your digital product usable and 
              as colors, typography, and interactions, remain consistent 
              tenjoyable for people of all abilities, including those with disabilities.</p>
          </div>
        </div>

        <div className='container5'>
          <div className='infoText'>
            <h2>Emotional Connection</h2>
            <p className='para'>We understand the power of emotional connection in design. 
              By incorporating elements that evoke positive emotions, we 
              create experiences that resonate with your users on a deeper
              level, forging a lasting connection between them and your
              brand.</p>
          </div>
          <div className='image'>
            <img src={img5} alt='iosImg' />
          </div>
        </div>

      </div>

      <GetStarted />

    </div>
  )
}
export default ServicesUiUx;