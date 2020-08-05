import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import {Link as Li} from 'react-router-dom';
import './footer.css';

class Footer extends Component {
    state = {
        filter: ""
      };

      handleSelect=(e)=>{
        e.preventDefault();
        this.setState({filter: e.target.innerText});
        console.log(this.state);
      }

    render() {
        return(
            <footer class="page-footer dark">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <h5 class="footer-heading"><a class="footer-link" href="/">Home</a></h5>
                            <ul class="footer-link">
                                <li class="footer-link"><Link to="/#about" class="footer-link">What is CRDF?</Link></li>
                                <li class="footer-link"><Link to="/#projects" class="footer-link">Projects</Link></li>
                                <li class="footer-link"><Link to="/#industry-partners" class="footer-link">Industry Partners</Link></li>
                                <li class="footer-link"><Link to="/#university-partners" class="footer-link">University Partners</Link></li>
                                <li class="footer-link"><Link to="/#testimonials" class="footer-link">Testimonials</Link></li>
                            </ul>
                        </div>
                        <div class="col-sm-3">
                            <h5 class="footer-heading"><a class="footer-link" href="/about">About Us</a></h5>
                            <ul class="footer-link">
                                <li class="footer-link"><Link to="/about#objective" class="footer-link">Our Objective</Link></li>
                                <li class="footer-link"><Link to="/about#challenge" class="footer-link">The Model</Link></li>
                                <li class="footer-link"><Link to="/about#students" class="footer-link">International Graduate Students</Link></li>
                                <li class="footer-link"><Link to="/about#professors" class="footer-link">Professors</Link></li>
                                <li class="footer-link"><Link to="/about#undergrad" class="footer-link">Undergraduate Students/Interns</Link></li>
                                <li class="footer-link"><Link to="/about#industry" class="footer-link">Industry</Link></li>
                            </ul>
                        </div>
                        <div class="col-sm-3">
                            <h5 class="footer-heading">Projects</h5>
                            <ul class="footer-link">
                                <li class="footer-link"><Link to={{
                                    pathname: "/projects",
                                    state: {
                                        filter:"Computer Vision"
                                    }
                                    }} class="footer-link">Computer Vision</Link></li>
                                <li class="footer-link"><Link to={{
                                    pathname: "/projects",
                                    state: {
                                        filter:"Electric Vehicle"
                                    }
                                    }} class="footer-link">Electric Vehicle</Link></li>
                                <li class="footer-link"><Link to={{
                                pathname: "/projects",
                                state: {
                                    filter:"Robotics and Path Planning"
                                }
                                }} class="footer-link">Robotics and Path Planning</Link></li>
                            </ul>
                        </div>
                        <div class="col-sm-3">
                            <h5 class="footer-heading"><a class="footer-link" href="/contact">Contact Us</a></h5>
                        </div>
                    </div>
                </div>
                <div class="footer-copyright">
                    <p class="copyright-text">© 2020 CRDF</p>
                </div>
            </footer>
        );
    }
}

export default Footer;