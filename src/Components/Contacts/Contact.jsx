import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0744ff77-e285-44e4-90c1-49be4f747f21");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

 
  return (
    
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us message <img src={msg_icon} alt="" /></h3>
            <p>The contact form facilitates seamless communication for customers, 
                offering a direct platform to express inquiries and provide specific 
                instructions regarding vehicle care. Whether seeking service information
                 or detailing maintenance preferences, customers can effortlessly convey their
                  needs, With a commitment to prompt and
                   professional responses, we ensure that every inquiry receives thorough attention.
                    Experience the convenience of tailored vehicle care solutions
            </p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@venkateswaraRaoVemulakonda.com</li>
                <li><img src={phone_icon} alt="" />+91 9059727413</li>
                <li><img src={location_icon} alt="" /> "Padmaja Water Servicing Centre, located at G. Konduru<br/>Vijayawada-Mylavaram bypass road</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel"  name='phone' placeholder='Enter your mobile number' required/>
            <label >Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /> </button>

          </form>
          <span>{result}</span>
        </div>
    </div>

  )
}

export default Contact
