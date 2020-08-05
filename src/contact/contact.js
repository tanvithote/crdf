import React, { Component } from 'react';
import './contact.css';
import Header from "../common/header";
import Footer from "../common/footer";
import * as emailjs from 'emailjs-com';

class Contact extends Component {
    state= {
      name: "",
      email: "",
      message: "",
      subject: "" 
    }
  

  handleChange = (name) => event => {
    this.setState({ [name]: event.target.value});
    console.log(this.state);
  };
  
  handleSubmit(e) {
    e.preventDefault()
    const { name, email, message, subject } = this.state
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'agnihotri.shubham410@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_EYTlJRfG',
       templateParams,
      'user_PFchz1UZWxz352GS41Poj'
     )
     this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }

  render() {
    return (
      <div> 
          <Header />
      <div className="App">
        <div className="App-header">
          <h1 class="contact-us">Contact Us</h1>
          <h5 class="sub-title">Our inbox is always open, whether you wish to collaborate or have a question.</h5>
          <div class="container contact-container">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div class="form-row">
                <div class="form-group col-md-6">
                <div class="form-group col-md-12">
                  <div class="form-row">
                    <label for="inputname">Enter Your Name *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="inputname" 
                      placeholder="Name" 
                      required 
                      onChange={this.handleChange("name")}
                    />
                  </div>
                  <div class="form-row">
                    <label for="inputemail">Enter Your Email *</label>
                    <input 
                      type="email" 
                      class="form-control" 
                      id="inputemail" 
                      placeholder="Email" 
                      required
                      onChange={this.handleChange("email")}  
                    />              
                  </div>
                  <div class="form-row">
                    <label for="inputsubject">Enter Your Subject *</label>
                    <input 
                      type="text" 
                      class="form-control" 
                      id="inputsubject" 
                      placeholder="Subject"
                      required
                      onChange={this.handleChange("subject")}
                    />
                  </div>
                </div>
                </div>
                <div class="form-group col-md-6 ">
                <div class="form-group col-md-12 ">
                  <div class="form-row">
                    <label for="inputmessage">Enter Your Message *</label>
                    <textarea 
                      rows="8"
                      type="message" 
                      class="form-control message-text" 
                      id="inputmessage" 
                      placeholder="Message"
                      required
                      onChange={this.handleChange("message")}
                    />
                  </div>
                </div>
                </div>
              </div>              
              <button 
                class="submitbutton"
                type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
        <Footer />
      </div> 
    );
  }
}

export default Contact;
