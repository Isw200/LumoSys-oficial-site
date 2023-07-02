import React from "react";
import "../Styles/ContactUs.css";

function ContactUs() {
  return(
    <div className='ContactUs'>

    <div className='topheading'>
    <h2>Any questions or remarks?</h2>
    <h2 className='bottomHeading' >Contact Us</h2>
    </div>

    <div className='contactus_container'>
      <div className='contactus_container_top'>
        <h2>Contact Information</h2>
        <br></br>
        <p>Fill up the form and our team will get back to you as soon as possible.</p>
        <button>hello@lumosys.io</button>
        <button>+940 123 5678</button>
      </div>

      <div className='contactus_container_bottom'>
      
      <form action="#" method="post" id="contact_form">

        <div class="fname">
          <label for="name"></label>
          <input type="text" placeholder="First Name:" name="fname" id="name_input" required></input>
        </div>
        <div class="lname">
          <label for="name"></label>
          <input type="text" placeholder="Last Name:" name="lname" id="name_input" required></input>
        </div>


        <div class="email">
          <label for="email"></label>
          <input type="email" placeholder="E-mail:" name="email" id="email_input" required></input>
        </div>
        <div class="telephone">
          <label for="name"></label>
          <input type="text" placeholder="Telephone:" name="telephone" id="telephone_input" required></input>
        </div>
      
        <div class="message">
          <label for="message"></label>
          <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required></textarea>
        </div>
        
        <div class="submit">
          <input type="submit" value="Submit" class="form_button" />
        </div>
      </form>

      </div>

      </div>   
    </div>
  )
}

export default ContactUs;
