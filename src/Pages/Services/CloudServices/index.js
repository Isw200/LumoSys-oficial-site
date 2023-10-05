import React from 'react'
import "./style.scss"

import GetStarted from '../../Services/GetStarted/index.js';

import iosImg from "../../../Assets/Images/iosImg.png";
import androidImg from "../../../Assets/Images/androidImg.png";
import cpImg from "../../../Assets/Images/cpImg.png";
import CloudConsulting from "../../../Assets/Images/CloudConsulting.jpg"
import Saas from "../../../Assets/Images/Saas.jpg"
import Kubernetes from "../../../Assets/Images/Kubernetes.png";
import Docker from "../../../Assets/Images/Docker.png";
import Firebase from "../../../Assets/Images/Firebase.png";
import Azure from "../../../Assets/Images/Azure.png";
import AWS from "../../../Assets/Images/AWS.png"

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
      <p>Welcome to LumoSys, where we provide cutting-edge cloud solutions to help <br></br>
        businesses thrive in the digital era. Our comprehensive suite of cloud services <br></br>
        empowers organisations to streamline operations, enhance collaboration, and scale <br></br>
        their business effortlessly. With our expertise and dedication to innovation, we deliver <br></br>
        tailored cloud solutions that align with your unique business needs.
      </p>

      <button>Read More</button>
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
          <h2 className='title-top'>Cloud Infrastructure</h2>
          <p>We offer a robust and reliable cloud infrastructure that enables<br></br> 
            you to deploy and manage your applications and services<br></br>
            seamlessly. Whether you need virtual machines, storage<br></br>
            solutions, or networking capabilities, our cloud infrastructure <br></br>
            provides the foundation for your digital operations.</p>
          </div>

          <img src={iosImg} alt='iosImg' />
        </div>

        <div className='container2'>
          <img src={androidImg} alt='androidImg' />
          <div className='infoText'>
          <h2 className='title-top'>Cloud Storage</h2>
          <p>With our secure cloud storage solutions, you can store, access, <br></br>
            and share your data from anywhere, at any time. Say goodbye to physical <br></br>
            storage limitations and embrace the scalability and accessibility <br></br>
            of the cloud, ensuring that your critical files are always within reach.</p>
          </div>

        </div>

        <div className='container3'>
          <div className='infoText'>
          <h2 className='title-top'>Cloud Backup and <br></br>Disaster Recovery</h2>
          <p>Our SaaS solutions provide cloud-based applications that cater<br></br> 
            to specific business needs. From project management tools to customer<br></br>
            relationship management systems, we offer a range of SaaS applications <br></br>
            that are ready to use, eliminating the need for complex installations <br></br>
            and maintenance.</p>
          </div>
          <img src={cpImg} alt='iosImg' />
        </div>

        <div className='container4'>
        <img src={CloudConsulting} alt='CloudConsulting' />
          <div className='infoText'>
          <h2 className='title-top'>Cloud Consulting and Migration</h2>
          <p>We understand the power of emotional connection in design.<br></br> 
            By incorporating elements that evoke positive emotions, we create <br></br>
            experiences that resonate with your users on a deeper level,<br></br> 
            forging a lasting connection between them and your brand.</p>
          </div>
        </div>

        <div className='container5'>
          <div className='infoText'>
          <h2 className='title-top'>Software as a Service (SaaS)</h2>
          <p>If you're looking to migrate your existing infrastructure to the cloud, <br></br>
            our team of experts is here to guide you through the process. We provide <br></br> 
            comprehensive cloud consulting services, assessing your requirements, <br></br>
            designing a tailored cloud architecture, and managing the migration seamlessly.</p>
          </div>
          <img src={Saas} alt='Saas' />
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