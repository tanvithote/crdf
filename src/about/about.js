import React, { Component } from 'react';
import './about.css';
import Header from '../common/header';
import Footer from '../common/footer';
import home_image from '../images/home_image.png';
import model_image from '../images/Picture2.png';
import international from '../images/Picture3.png';
import professors from '../images/Picture4.png';
import undergrad from '../images/Picture5.png';
import industry from '../images/Picture6.png';

class About extends Component {
    render(){
        return(
            <div>
                <Header/>
                <section class="objective">
                    <h1 class="obj-heading">Our Objective</h1>
                    <h5 class="obj-text">To facilitate research culture in India through industry and international collaboration. </h5>
                    <h3 class="obj-heading">What is CRDF?</h3>
                    <h5 class="obj-text">CRDF is a platform for collaboration for industries, professors, international graduates and college students to solve challenging problems in technology and research.
                    </h5>
                </section>
                <section class="challenge">
                    <div class="row">
                        <div class="col-md-6 text-center vertical-center">
                        <div class="challenge-text ">
                            <h2 class="challenge-heading">The Model</h2>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Industries and investors bring challenging problem statements and resources</li>
                                <li class="int-student-items">International graduates bring domain expertise and project management</li>
                                <li class="int-student-items">Professors provide student mentoring and logistics</li>
                                <li class="int-student-items">University students work on project execution and reporting results</li>
                            </ul>
                           </p>
                        </div>
                        </div>
                        <div class="col-md-6 text-center vertical-center">
                        <img class="img-fluid model_image" src={model_image} alt="about_crdf"></img>
                        </div>
                    </div>
                </section>
                <section class="students">
                    <div class="row">
                        <div class="col-md-6 text-center vertical-center">
                        <img class="img-fluid home_image" src={international} alt="about_crdf" width="500" height="450"></img>
                        </div>
                        <div class="col-md-6 text-center vertical-center">
                        <div class="challenge-text ">
                            <h2 class="students-heading">International Graduate Students</h2>
                            
                            <p class="link-itmes int-students-list-heading">
                            What will they bring?
                            </p>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Project proposals, ideas and domain selections.</li>
                                <li class="int-student-items">Resources and guidance to projects.</li>
                                <li class="int-student-items">Showcasing good projects at international stage.</li>
                                <li class="int-student-items">Student mentoring.</li>
                            </ul>
                            </p>
                            <p class="link-itmes int-students-list-heading">
                            Takeaways:
                            </p>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Good projects, research paper and patents.
                                </li>
                                <li class="int-student-items">Start up and venture ideas.</li>
                                <li class="int-student-items">Networking with talented students in India. 
                            </li>                               
                            </ul>
                            </p>                            
                        </div>                       
                        </div>
                    </div>
                </section>
                <section class="professors">
                    <div class="row">
                        <div class="col-md-6 text-center vertical-center">
                        <div class="challenge-text">
                            <h2 class="professors-heading">Professors</h2>
                            
                            <p class="link-itmes int-students-list-heading">
                            What will they bring?
                            </p>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Domain expertise and experience.</li>
                                <li class="int-student-items">Student selection and problem statement definition.</li>
                                <li class="int-student-items">Active part in project execution.</li>
                                <li class="int-student-items">Student mentoring.</li>
                            </ul>
                            </p>
                            <p class="link-itmes int-students-list-heading">
                            Takeaways:
                            </p>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Excellent project, research papers and patent portfolio.
                                </li>
                                <li class="int-student-items">Research lab setup.</li>
                                <li class="int-student-items">Implementing research culture in college.</li>                               
                            </ul>
                            </p>                            
                        </div>                       
                        </div>
                        <div class="col-md-6 text-center vertical-center">
                        <img class="img-fluid home_image" src={professors} alt="about_crdf" width="500" height="450"></img>
                        </div>
                    </div>
                </section>

                <section class="undergrad">
                    <div class="row">
                        <div class="col-md-6 text-center vertical-center">
                            <img class="img-fluid home_image" src={undergrad} alt="about_crdf" width="500" height="450"></img>
                        </div>
                        <div class="col-md-6 text-center vertical-center">
                        <div class="challenge-text">
                            <h2 class="undergrad-heading">Undergraduate Students/Interns</h2>
                            
                            <p class="link-itmes int-students-list-heading">
                            What will they bring?
                            </p>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Prototyping and project implementation.</li>
                                <li class="int-student-items">Testing and results.</li>
                                <li class="int-student-items">Presenting the project at different levels.</li>
                                <li class="int-student-items">Defining future possibilities and handover.</li>
                            </ul>
                            </p>
                            <p class="link-itmes int-students-list-heading">
                            Takeaways:
                            </p>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Exposure to working with international collaboration.
                                </li>
                                <li class="int-student-items">Skills upgrading and learning research methodology.</li>
                                <li class="int-student-items">Networking with international universities.</li>                               
                            </ul>
                            </p>                            
                        </div>                       
                        </div>
                        
                    </div>
                </section>
                <section class="industry">
                    <div class="row">
                        
                        <div class="col-md-6 text-center vertical-center">
                        <div class="challenge-text">
                            <h2 class="industry-heading">Industry</h2>
                            
                            <p class="link-itmes int-students-list-heading">
                            What will they bring?
                            </p>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Project ideas applicable to the industry</li>
                                <li class="int-student-items">Key resources</li>
                                <li class="int-student-items">Funding for projects</li>
                                
                            </ul>
                            </p>
                            <p class="link-itmes int-students-list-heading">
                            Takeaways:
                            </p>
                            <p class="link-itmes">
                            <ul>
                                <li class="int-student-items">Intellectual Property (IP) generation
                                </li>
                                <li class="int-student-items">Future employees</li>
                                <li class="int-student-items">Collaboration with educational institutes</li>
                                <li class="int-student-items">Cost efficiency of projects</li>
                                <li class="int-student-items">Growing of network</li>
                                                          
                            </ul>
                            </p>                            
                        </div>                       
                        </div>
                        <div class="col-md-6 text-center vertical-center">
                        <img class="img-fluid home_image" src={industry} alt="about_crdf" width="500" height="450"></img>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default About;