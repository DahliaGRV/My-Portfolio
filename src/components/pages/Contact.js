import React, {useState} from 'react';
import '../../styles/Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleFormSubmit = () => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        if (email && name && message){
            const serviceID = "service_5050j57"
            const templateID = "template_cvumg5r"
            const publicKey = "qbwqUpBUs14ZJj17h"
            const templateParams = {name, email, message}
            emailjs.send(serviceID, templateID, templateParams, publicKey)    
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
             }, function(error) {
                console.log('FAILED...', error);
             });

        }

    
    //     //clear the inputs
        setName('');
        setEmail('');
        setMessage('');
      };

    return(
        <div>
        <h1>Contact Me!</h1>
        {/* Review forms in React for this portion. Include an email form with a comment & name section */}
        <form className="form">
        <input
          value={name}
          name="name"
          onChange={(e)=>{setName(e.target.value)}}
          type="text"
          placeholder="Your Name"
        />
        <input
          value={email}
          name="email"
          onChange={(e)=>{setEmail(e.target.value)}}
          type="email"
          placeholder="Your Email"
        />
        <input
          value={message}
          name="message"
          onChange={(e)=>{setMessage(e.target.value)}}
          type="text"
          placeholder="Your Message"
        />
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
        </div>
    );
}