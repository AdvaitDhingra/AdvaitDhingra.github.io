import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";

import emailjs from 'emailjs-com'

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const message = this.props.data.contactmessage;

    function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_72tuz39', 'template_dlvmdra', e.target, 'user_YpM0vxhk88qMpJCF8dzXA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }

    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p className="lead">{message}</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
            <form className="contact-form" onSubmit={sendEmail}>
            <input type="hidden" name="contact_number" />
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <button className = "submit" type="submit" value="Send">Send</button>
          </form>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Email Address:</h4>
                <p className="address">
                  advait.dhingra1006@gmail.com
                  <br />
                </p>
              </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
