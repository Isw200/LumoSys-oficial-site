import React from "react";
import "./style.scss"

import GetStarted from '../../Services/GetStarted/index.js';
import ServiceCard from "../../../Common/ServiceCards/index.js";


import ReactImg from "../../../Assets/Images/React.png";
import Angular from "../../../Assets/Images/Angular.png";
import Node from "../../../Assets/Images/Node.png";
import JS from "../../../Assets/Images/JavaScript.png";
import VeuJs from "../../../Assets/Images/VueJs.png";
import Kubernetes from "../../../Assets/Images/Kubernetes.png";
import Docker from "../../../Assets/Images/Docker.png";
import Firebase from "../../../Assets/Images/Firebase.png";
import Mongo from "../../../Assets/Images/Mongo.png";
import Express from "../../../Assets/Images/Express.png";
import Dotnet from "../../../Assets/Images/Dotnet.png";
import Laravel from "../../../Assets/Images/Laravel.png";
import Django from "../../../Assets/Images/Django.png";
import Azure from "../../../Assets/Images/Azure.png";

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


function ServicesFullStack() {
  return (
    <div className='servicesfs'>
    <div className='pallet1'>
      <h4 className='title-top'>Empowering Your business for Success</h4>
      <h1 className='mainHeading'>Full Stack<br></br>Development</h1>
      <br></br>
      <p>At LumoSys, we specialize in creating exceptional mobile applications that
        empower businesses and individuals to succeed in the digital era.
        Our experienced team of developers combines cutting-edge technologies with
        innovative design to deliver high-quality, user-friendly mobile apps tailored 
        to your unique requirements.</p>

      <div className='services-btn' data-aos="fade-up">
        <a href='/'> Read More </a>
      </div>
      
    </div>

    <div className='pallet2'>
      <div className='pallet2_container'>
        <h2 className='title-top'>Our Methodology</h2>
        <h2 className='title'>Crafting Full Stack Applications with <br></br>Precision and Care</h2>

        <ServiceCard details={details} />

      </div>
    </div>

    <div className='pallet3'>
        <h2  className='title-top'>Powering Innovation</h2>
        <h2 className='title'> The Technologies Behind Our <br></br> Full Stack Development</h2>

        <div className='container1'>
          <img className="icon" src={ReactImg} alt='React'/>
          <img className="icon" src={Angular} alt='Angular'/>
          <img className="icon" src={Node} alt='Node'/>
          <img className="icon" src={JS} alt='JS'/>
          <img className="icon" src={VeuJs} alt='VeuJs'/>
        </div>

        <div className='container2'>
          <img className="icon" src={Kubernetes} alt='Kubernetes'/>
          <img className="icon" src={Django} alt='Django'/>
          <img className="icon" src={Laravel} alt='Laravel'/>
          <img className="icon" src={Firebase} alt='Firebase'/>
        </div>

        <div className='container3'>
          <img className="icon" src={Dotnet} alt='Dotnet'/>
          <img className="icon" src={Docker} alt='Docker'/>
          <img className="icon" src={Azure} alt='Azure'/>
          <img className="icon" src={Mongo} alt='Mongo'/>
          <img className="icon" src={Express} alt='Express'/>
        </div>

    </div>
    < GetStarted />
    </div>
  )
}

export default ServicesFullStack;