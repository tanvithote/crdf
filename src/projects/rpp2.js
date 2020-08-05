import React, { Component } from 'react';
import './cv1.css';
import Header from '../common/header';
import Footer from '../common/footer';
import mouse from '../images/simulation.gif';
import { FaUserGraduate } from "react-icons/fa";
import { FaIndustry } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";

class Single_Project extends Component{
    render(){
        return(
            <div class="project-page">
                <Header/>
                <section class="portfolio-block project">
                    <div class="container">
                        <div class="heading">
                            <h2>Maze Solving Micromouse Robot</h2>
                        </div>
                        <div class="image">
                        <img class="card-img-top project-image" src={mouse}></img>
                        </div>
                        <div class="row">
                            <div class="col-md-6 offset-md-1 info">
                                <h2 class="description">DESCRIPTION</h2>
                                <p class="project-paragaph">The project aims to solve a 30-year old problem which has an unparalleled importance
in the field of robotics with complete analysis &amp; implementation of various decision
making algorithms like flood fill &amp; A*. The algorithms are implemented to accurately
solve the maze in the shortest time with some robotic intelligence. This project aims
towards development of the “brain of the system”, particularly for robots concerned with
path planning and navigation. Path planning to plan its actions including collision-free
movement &amp; searching the maze are the two most important aspects in maze solving
which were implemented on softwares like Unity &amp; Matlab.</p>
                                {/* <p class="project-paragaph">Lorem ipsum dapibus dolor non, malesuada mauris. Aliquam eleifend mauris non odio mattis auctor. Aenean sit amet elementum tellus, a facilisis ligula. Pellentesque ac vehicula mauris.</p> */}
                            </div>
                            <div class="col-md-3 offset-md-1 meta">
                                <div class="tags">
                                    <span class="meta-heading">Domain</span>
                                    <br/>
                                    <span class="text-muted">Robotics and Path Planning</span>
                                    <br/><br/>
                                    <span class="meta-heading">Collaborators</span>
                                    <div class="row ml-3 text-muted">
                                        <FaUserGraduate size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Vedant Ghodke, Ameya Panchpor, Anirudh Kolwadkar, Anushka Bhave</span>                                        
                                    </div>
                                    {/* <div class="row ml-3 text-muted">
                                        <FaIndustry size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">DriveBuddy AI</span>                                        
                                    </div> */}
                                    <div class="row ml-3 text-muted">
                                        <FaUniversity size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">VIT</span>                                        
                                    </div>
                                    <div class="row ml-3 text-muted">
                                        <GiTeacher size={18} class="mr-3 mt-3" />
                                        <span class="mt-3">Samarth Kalluraya</span>                                        
                                    </div>
                                    <br/>
                                    <span class="meta-heading">Date</span><br/>
                                    <span class="text-muted">26/07/2020</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <Footer/>
            </div>

        );
    }
}

export default Single_Project;