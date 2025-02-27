import '../../App.css';
import  { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  const form = useRef<HTMLFormElement>(null);

const sendEmail = (e: FormEvent) => {
e.preventDefault();
// service_id, templte_id and public key will get from Emailjs website when you create account and add template service and email service 
if (form.current) {
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 
  'YOUR_PUBLIC_KEY')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}
};
  return (
    <div className="ContactPage">
      <h3 className='aboutTitle'>Contact</h3>
      <div className="ContactStacks">
      <form className="ContactForm" ref={form} onSubmit={sendEmail}>
  <h3 style={{margin:'0 0 0 10px', color: 'var(--primary-color)'}}>Contact Us</h3>
  <input type="text" name="user_name" placeholder='Type your name here' />
  <br />
 
  <input type="email" name="user_email" placeholder='Type your email here'/>
  <br />

  <textarea name="message" placeholder="Type your message here" />
  <br />
  <input type="submit" value="Submit" />
</form>

<div className="ContactInfo">
<p> <FontAwesomeIcon className='ContactIcons' icon={faPhone} /> +1 321-557-5033</p>
<p> <FontAwesomeIcon className='ContactIcons' icon={faPhone} /> +1 321-527-1784</p>
<p> <FontAwesomeIcon className='ContactIcons'  icon={faEnvelope} />stefanpeninsilyn@gmail.com</p>
</div>
      </div>
        <div className='emptySpace' ></div>
       
        </div>
  )
}

export default Contact