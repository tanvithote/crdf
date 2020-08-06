import React, { Component } from 'react';
import './testimonials.css';
import { FaQuoteLeft } from 'react-icons/fa';

class Testimonials extends Component {
    render() {
        return(
    <div class="testimonials text-center container">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center" style={{height:"40em"}}>
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"><FaQuoteLeft size={50}/></i>
            <div class="card-body blockquote">
              <p class="card-text">The opportunity of getting to work on a research-based project in collaboration with Devise Electronics through CRDF was a valuable experience. This project helped me develop certain skills in me that would prove to be propitious in the future. CRDF has given a chance to work on real-life problem statements and apply my theoretical knowledge practically</p>
              <footer class="blockquote-footer"><cite title="Source Title">Kajol Ghatole</cite></footer>
              
              <footer><blockquote class="test-position text-muted"><cite title="Source Title">CRDF Project Intern</cite></blockquote></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center" style={{height:"40em"}}>
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"><FaQuoteLeft size={50}/></i>
            <div class="card-body blockquote">
              <p class="card-text">Mentoring the teams was a rewarding experience for me as our discussions gave rise to new ideas and a continuous exchange of knowledge. Additionally, CRDF has provided me a great platform to network and build strong relations with like-minded undergraduate and graduate students as well as industry professionals.</p>
              <footer class="blockquote-footer"><cite title="Source Title">Samarth Kalluraya</cite></footer>
              <footer><blockquote class="test-position text-muted"><cite title="Source Title">Project Mentor at CRDF</cite></blockquote></footer>
            </div>
          </div>
        </div>

        <div class="col-md-6 col-lg-4">
          <div class="card border-light bg-light text-center" style={{height:"40em"}}>
            <i class="fa fa-quote-left fa-3x card-img-top rounded-circle" aria-hidden="true"><FaQuoteLeft size={50}/></i>
            <div class="card-body blockquote">
              <p class="card-text">We have started 4 projects with the CRDF team. All the projects were selected such that they turn out to be import substitution products. Graduate students' involvement helped the products to mature. All the students are dedicated and we want to continue our association with CRDF.</p>
              <footer class="blockquote-footer"><cite title="Source Title">Durvankur Raut</cite></footer>
              <footer><blockquote class="test-position text-muted"><cite title="Source Title">Chief Engineer at Devise Electronics Pvt. Ltd</cite></blockquote></footer>
            </div>
          </div>
        </div>

      </div>
    </div>

        );
    }
}

export default Testimonials;