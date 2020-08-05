import React from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
// import logo from '../images/image6.jpg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel3.css';
import fall_detection from '../images/Fall Detection.jpg';
import vehicle_classification from '../images/Vehicle Classification.jpg';
import pcb from '../images/pcb.png';
import busbar from '../images/busbar.png';
import pin from '../images/6pin.png';
import arm from '../images/robotic.PNG';
import mouse from '../images/simulation.gif';


class Carousel1 extends React.Component {
    render() {
      var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        speed: 700,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        centerPadding: '50px',
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
      return (
        <Slider {...settings}>
        <div class="smaller-container">
            <div class="container computer-vision">
                <div class="domain-heading">
                <h2 class="cv-heading">Computer Vision</h2>
                
                </div>
                <div class="row carousel-row">
                    <div class="col-lg-4 offset-lg-2">
                        {/* <div class="col-md-8 offset-md-3"> */}
                            <div class="container">
                                <div class="card" style={{height:"40em", marginBottom: "1em"}}>
                                <img class="card-img-top" src={vehicle_classification}  height="240" alt="Card cap" ></img>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">GTA 5 Car Detection using CNN</h5>
                                    <p class="card-text">To detect the presence and location of cars in an image using the dataset from GTA 5 game.</p>
                                    <Link to="/project/cv1" class="mt-auto mr-auto btn btn-primary cv-button align-self-end hvr-grow">Details</Link>
                                </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div class="col-lg-4">
                        {/* <div class="col-md-8 offset-md-1"> */}
                            <div class="container">
                                <div class="card" style={{height:"40em", marginBottom: "1em"}}>
                                <img class="card-img-top" src={fall_detection} height="240" alt="Card cap"></img>
                                <div class="card-body d-flex flex-column ">
                                    <h5 class="card-title">Fall Detection System</h5>
                                    <p class="card-text">Prevention and protection of elderly from the negative effects of falls by timely alerts and reliable surveillance.</p>
                                    <Link to="/project/cv2" class="mt-auto mr-auto btn btn-primary cv-button align-self-end hvr-grow">Details</Link>
                                </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                        
                </div>
                <div class="explore-button">
                    <Link to={{
                        pathname: "/projects",
                        state: {
                            filter:"Computer Vision"
                        }}}><button class="domain-button-cv btn-sm mt-auto"><span>Explore</span></button></Link>
                </div>
            </div>
        </div>

        <div class="smaller-container">
            <div class="container electric-vehicle">
                <h2 class="ev-heading">Electric Vehicle</h2>
                <div class="row carousel-row">
                        <div class="col-lg-4 offset-lg-2">
                            <div class="container">
                                <div class="card" style={{height:"40em", marginBottom: "1em"}}>
                                <img class="card-img-top" src={pcb} height="240" alt="Card cap" ></img>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Reduction of vibrations in PCB of an Electric Vehicle</h5>
                                    <p class="card-text">To reduce the vibrations transferred to the PCB of electric vehicles to eliminate the failure of solder joints.</p>
                                    <Link to="/project/ev1" class="mt-auto mr-auto btn btn-primary ev-button hvr-grow">Details</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="container">
                                <div class="card" style={{height:"40em", marginBottom: "1em"}}>
                                <img class="card-img-top" src={busbar} height="240" alt="Card cap"></img>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Optimizing the Sizing of Busbar</h5>
                                    <p class="card-text">To design an Excel Calculator to optimize the sizing of the Busbar for Copper, Aluminium and Nickel.</p>
                                    <Link to="/project/ev2" class="mt-auto mr-auto btn btn-primary ev-button hvr-grow">Details</Link>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="col-lg-4">
                            <div class="container">
                                <div class="card" style={{height:"40em", marginBottom: "1em"}}>
                                <img class="card-img-top" src={pin} height="240" alt="Card cap"></img>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Design and development of IP68 6 pin connector</h5>
                                    <p class="card-text">To design and manufacture an IP68 rating 6 pin connector with cost lower than the OEMs.</p>
                                    <a href="/project/ev3" class="mt-auto mr-auto btn btn-primary ev-button hvr-grow">Details</a>
                                </div>
                                </div>
                            </div>
                        </div> */}
                </div>
                <div class="explore-button">
                    <Link to={{
                  pathname: "/projects",
                  state: {
                    filter:"Electric Vehicle"
                  }
                }}><button class="domain-button-ev btn-sm mt-auto"><span>Explore</span></button></Link>
                </div>
            </div>
        </div>
                
        <div class="smaller-container">
            <div class="container robotics">
                <h2 class="rpp-heading">Robotics and Path Planning</h2>
                <div class="row carousel-row">
                    <div class="col-lg-4 offset-lg-2">
                        {/* <div class="col-md-8 offset-md-3"> */}
                            <div class="container">
                                <div class="card" style={{height:"40em", marginBottom: "1em"}}>
                                <img class="card-img-top" src={arm} height="240" alt="Card cap" ></img>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Development of haptic robotic arm</h5>
                                    <p class="card-text">To create a robotic arm with n-degrees of freedom, capable of executing complex motions.</p>
                                    <Link to="/project/rpp1" class="mt-auto mr-auto btn btn-primary rpp-button hvr-grow">Details</Link>
                                </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div class="col-lg-4">
                        {/* <div class="col-md-8 offset-md-1"> */}
                            <div class="container">
                                <div class="card" style={{height:"40em", marginBottom: "1em"}}>
                                <img class="card-img-top" src={mouse} height="240" alt="Card cap"></img>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">Maze Solving Micromouse Robot</h5>
                                    <p class="card-text">To implement & analyze various algorithms for fast & reliable maze solving.</p>
                                    <Link to="/project/rpp2" class="mt-auto mr-auto btn btn-primary rpp-button hvr-grow">Details</Link>
                                </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
                <div class="explore-button">
                    <Link to={{
                  pathname: "/projects",
                  state: {
                    filter:"Robotics and Path Planning"
                  }
                }}><button class="domain-button-rpp btn-sm mt-auto"><span>Explore</span></button></Link>
                </div>
            </div>
        </div>

        </Slider>
      );
    }
  }

export default Carousel1;