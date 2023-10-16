import React from 'react'
import "./style.scss"

import GetStarted from '../../Services/GetStarted/index.js';

import Kubernetes from "../../../Assets/Images/Kubernetes.png";
import Docker from "../../../Assets/Images/Docker.png";
import Firebase from "../../../Assets/Images/Firebase.png";
import Azure from "../../../Assets/Images/Azure.png";
import AWS from "../../../Assets/Images/AWS.png"

import img9 from "../Assets/9.png";
import img10 from "../Assets/10.png";
import img11 from "../Assets/11.png";
import img12 from "../Assets/12.png";
import img13 from "../Assets/13.png";

import ServiceCard from "../../../Common/ServiceCards/index.js";

const details = [
  {
    id: "01",
    topic: "Flexibility and Scalability",
    content: "Our cloud solutions offer the flexibility to scale your resources up or down based on your business requirements. our cloud infrastructure can adapt to your needs, ensuring optimal performance and cost-efficiency.",
  },
  {
    id: "02",
    topic: "Enhanced Security",
    content: "We understand the importance of safeguarding your data. Our cloud solutions prioritize data security through advanced encryption and regular backups to protect against unauthorized access and breaches.",
  },
  {
    id: "03",
    topic: "Improved Collaboration",
    content: "Whether they are working inathe same office or across different locations, Our cloud services promote efficient team collaboration with real-time document sharing, version control and fostering productivity and innovation.",
  },
  {
    id: "04",
    topic: "Cost Savings",
    content: "By leveraging cloud solutions, you can significantly reduce IT infrastructure costs. Instead of investing in expensive hardware and software, you can access the necessary resources through the cloud, paying only for what you use.",
  },
  {
    id: "05",
    topic: "Business Continuity",
    content: "Disruptions can occur unexpectedly, but with our cloud solutions, you can ensure business continuity. Our redundant infrastructure and automated backups enable quick data recovery, keeping your operations running smoothly.",
  },
]


function ServicesCloud() {
  return (
    <div className='servicescloud'>
    <div className='pallet1'>
      <h4 className='title-top'>Empowering Your business for Success</h4>
      <h1 className='mainHeading'>Cloud Services</h1>
      <br></br>
      <p>Welcome to LumoSys, where we provide cutting-edge cloud solutions to help 
        businesses thrive in the digital era. Our comprehensive suite of cloud services 
        empowers organisations to streamline operations, enhance collaboration, and scale 
        their business effortlessly. With our expertise and dedication to innovation, we deliver 
        tailored cloud solutions that align with your unique business needs.
      </p>

      <div className='services-btn' data-aos="fade-up">
          <a href='/'> Read More </a>
      </div>

    </div>

    <div className='pallet2'>
      <div className='pallet2_container'>
        <h2 className='title-top'>Unparalleled Excellence</h2>
        <h2 className='title'>Why Our Crafted Cloud Solutions<br></br> Stand Out</h2>

        <ServiceCard details={details} />

        </div>
        </div>

        <div className='pallet3'>
        <h2 className='title-top'>Our Services</h2>
        <h2 className='title'>Elevate Your Business with Our Carefully<br></br>Crafted Cloud Solutions</h2>

        <div className='container1'>
          <div className='infoText'>
          <h2 >Cloud Infrastructure</h2>
          <p>We offer a robust and reliable cloud infrastructure that enables 
            seamlessly. Whether you need virtual machines, storage
            solutions, or networking capabilities, our cloud infrastructure 
            provides the foundation for your digital operations.</p>
          </div>

          <div className='image'>
            <img src={img9} alt='img9' />
          </div>
        </div>

        <div className='container2'>
          <div className='image'>
            <img src={img10} alt='img10' />
          </div>
          <div className='infoText'>
          <h2 >Cloud Storage</h2>
          <p>With our secure cloud storage solutions, you can store, access, 
            and share your data from anywhere, at any time. Say goodbye to physical 
            storage limitations and embrace the scalability and accessibility 
            of the cloud, ensuring that your critical files are always within reach.</p>
          </div>

        </div>

        <div className='container3'>
          <div className='infoText'>
          <h2>Cloud Backup and Disaster Recovery</h2>
          <p>Our SaaS solutions provide cloud-based applications that cater
            to specific business needs. From project management tools to customer
            relationship management systems, we offer a range of SaaS applications 
            that are ready to use, eliminating the need for complex installations 
            and maintenance.</p>
          </div>
          <div className='image'>
            <img src={img11} alt='img11' />
          </div>
        </div>

        <div className='container4'>
          <div className='image'>
            <img src={img12} alt='img12' />
          </div>
          <div className='infoText'>
          <h2>Cloud Consulting and Migration</h2>
          <p>We understand the power of emotional connection in design.
            By incorporating elements that evoke positive emotions, we create 
            experiences that resonate with your users on a deeper level,
            forging a lasting connection between them and your brand.</p>
          </div>
        </div>

        <div className='container5'>
          <div className='infoText'>
          <h2 >Software as a Service (SaaS)</h2>
          <p>Seeking to move to the cloud? Our expert team offers end-to-end cloud consulting, 
            from assessing needs to designing solutions and managing the migration. Let us guide you.</p>
          </div>
          <div className='image'>
            <img src={img13} alt='img13' />
          </div>
        </div>
    </div>


    <div className='pallet4'>
      <h2 className='title-top'>Powering Innovation</h2>
      <h2 className='title'>The Technologies Behind Our<br></br>Cloud Services</h2>
      
      <div className='container'>
      <img src={Azure} alt='azure'></img>
      <img src={Firebase} alt='firebase'></img>
      <img src={AWS} alt='aws'></img>
      <img src={Kubernetes} alt='kubernetes'></img>
      <img src={Docker} alt='docker'></img>
      </div>
      
    </div>

    <GetStarted/>

    </div>
  )
}

export default ServicesCloud