import Button from '@/components/button';
import React from 'react';

function Contact() {
  return (
    <div id='contact' className='contact'>
      <h2 className='contact-title'>What&apos;s Next</h2>
      <h2 className='contact-sub-title'>Get in Touch</h2>
      <p className='contact-text'>
        Feel free to reach out to me via email, phone, or LinkedIn. I am excited
        to explore new opportunities, collaborate with like-minded
        professionals, and contribute to the success of innovative projects.
      </p>
      <div className='contact-cta'>
        <Button link={'mailto:tripurarisingh159@gmail.com'} text='Say Hello' />
      </div>
    </div>
  );
}

export default Contact;
