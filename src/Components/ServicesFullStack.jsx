import React from "react";
import "../Styles/ServicesFullStack.css";
import GetStarted from './SubComponents/GetStarted/GetStarted';

import ReactImg from "../Assets/Images/React.png";
import Angular from "../Assets/Images/Angular.png";
import Node from "../Assets/Images/Node.png";
import JS from "../Assets/Images/JavaScript.png";
import VeuJs from "../Assets/Images/VueJs.png";
import Kubernetes from "../Assets/Images/Kubernetes.png";
import Docker from "../Assets/Images/Docker.png";
import Firebase from "../Assets/Images/Firebase.png";
import Mongo from "../Assets/Images/Mongo.png";
import Express from "../Assets/Images/Express.png";
import Dotnet from "../Assets/Images/Dotnet.png";
import Laravel from "../Assets/Images/Laravel.png";
import Django from "../Assets/Images/Django.png";
import Azure from "../Assets/Images/Azure.png";
import CodingIcon from "../Assets/Images/CodingIcon.png"

function ServicesFullStack() {
  return (
    <div className='servicesfs'>
    <div className='pallet1'>
      <h4>Empowering Your business for Success</h4>
      <h1 className='mainHeading'>Full Stack<br></br>Development</h1>
      <br></br>
      <p>At LumoSys, we specialize in creating exceptional mobile applications that<br></br>
        empower businesses and individuals to succeed in the digital era.<br></br> 
        Our experienced team of developers combines cutting-edge technologies with<br></br>
        innovative design to deliver high-quality, user-friendly mobile apps tailored <br></br>
        to your unique requirements.</p>

      <button>Read More</button>
    </div>

    <div className='pallet2'>
      <div className='pallet2_container'>
        <h2>Our Methodology</h2>
        <p>Crafting Full Stack Applications with <br></br>Precision and Care</p>

        <div className='card_pallet1'>
          <div className='box1'>
            <h1>01.</h1>
            <h2>Discovery</h2>
            <br></br>
            <p>We kick-start the project by gaining insights into your business goals, target users, and desired features. 
              This helps us define a clear roadmap and identify the best strategies for your mobile app.</p>
              <br></br>
            <img class="CodingIcon" src={CodingIcon} alt="codingicon"></img>
          </div>

          <div className='box2'>
            <h1>02.</h1>
            <h2>Design</h2>
            <br></br>
            <p>Our talented designers create visually appealing and intuitive interfaces that enhance user engagement. 
              We focus on creating seamless user experiences while maintaining a consistent brand identity throughout the app.</p>
            <img class="CodingIcon" src={CodingIcon} alt="codingicon"></img>
          </div>

          <div className='box3'>
            <h1>03.</h1>
            <h2>Development</h2>
            <br></br>
            <p>Our skilled development team brings your app to life using the latest technologies and frameworks. 
              We follow agile development methodologies, allowing for iterative feedback and efficient project management.</p>
              <img class="CodingIcon" src={CodingIcon} alt="codingicon"></img>
          </div>
        </div>

        <div className='card_pallet2'>
          <div className='box1'>
            <h1>04.</h1>
            <h2>Testing and QA</h2>
            <br></br>
            <p>To ensure a flawless user experience, we conduct rigorous testing across multiple devices and operating systems. 
              We identify and fix any bugs or performance issues, making sure your app is reliable and responsive.</p>
            <img class="CodingIcon" src={CodingIcon} alt="codingicon"></img>
          </div>

          <div className='box2'>
            <h1>05.</h1>
            <h2>Deployment and Support</h2>
            <br></br>
            <p>Once your app is ready, we guide you through the deployment process and help you launch it on the relevant app stores. 
              We provide ongoing maintenance and support services, ensuring your app remains.</p>
            <img class="CodingIcon" src={CodingIcon} alt="codingicon"></img>
          </div>
        </div>

      </div>
    </div>

    <div className='pallet3'>
        <h2>Powering Innovation</h2>
        <p>The Technologies Behind Our <br></br> Full Stack Development</p>

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