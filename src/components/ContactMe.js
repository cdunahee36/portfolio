import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_e54mfqg', 'template_mkbmuyk', e.target, 'user_zql9epcTQCFNP6esPEJqz')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" id="contact-input" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number"/>
        <label>Name</label>
        <input type="text" name="user_name"/>
        <label>Email</label>
        <input type="email" name="user_email"/>
        <label>Message</label>
        <textarea name="message" id="email-msg"/>
        <input type="submit" value="Send" id="email-sub"/>
    </form>
  );
}