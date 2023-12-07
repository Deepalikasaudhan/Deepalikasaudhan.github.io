import React from 'react'
import './Contact.css'
function Contact() {
  return (
    <div id='contact' className='contact-container-page'>
      <h1 className='heading-page'>Get in touch</h1>
      <h1 className='heading2-page'>Deepali Kasaudhan</h1>
      <div className='contact-allLinksDiv'>
        <div>
          <a href="https://www.linkedin.com/in/deepali-kasaudhan-86786327a/" rel='norerrer' target='black'>
           <div className='contact-platfromLinks'>Linkedin</div>
          </a>
          </div>
          <div>
            <a href="https://github.com/Deepalikasaudhan" rel='norerrer' target='black'>
              <div className='contact-platfromLinks'>Github</div>
            </a>
          </div>
          <div>
            <a href="mailto:kasaudhandeepali7@gmail.com" rel='norerrer' target='black'>
              <div className='contact-platfromLinks'>E-mail</div>
            </a>
          </div>
          <div>
            <a href="tel:+919336040903" rel='norerrer' target='black'>
              <div className='contact-platfromLinks'>Phone</div>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/deepali23_10/" rel='norerrer' target='black'>
            <div className='contact-platfromLinks'>Instagram</div>
            </a>
          </div>

      </div>
    </div>
  )
}

export default Contact;
