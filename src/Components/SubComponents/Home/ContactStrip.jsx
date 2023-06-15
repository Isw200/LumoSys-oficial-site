import "../../../Styles/ContactStrip.css";

function ContactStrip() {
  return (
    <div className="ContactStrip">
      <div className="mainContainer">
        <div className="imageContainer"></div>
        <div className="descContainer">
          <h5>Contact Us</h5>
          <h4>Let's Dive into Your Product </h4>
          <h3>Exploring Possibilities and Solutions</h3>
          <p id="para">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem
            totam, omnis, facilis ad nemo accusamus repudiandae, veritatis
            voluptatibus eveniet non vero magnam unde facere perspiciatis nobis
            alias natus nisi tempore fugiat rem porro. Sequi, consequatur.
          </p>
          <div className="buttonContainer">
            <button id="helloBtn">hello@lumosys.io</button>
            <button id="numBtn">+940 123 5678</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactStrip;
