import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './navigation.css';
import Nav from 'react-bootstrap/Nav';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
    {
        title: "GTA 5 Car Detection using CNN",
        domain: "Computer Vision",
        description: "To detect the presence and location of cars in an image using the dataset from GTA 5 game.",
        img: require('../images/Vehicle Classification.jpg'),
        id: "cv1"
    },
    {
        title: "Fall Detection System for elderly",
        domain: "Computer Vision",
        description: "Through our project, we focus on prevention and protection of elderly from the negative effects of falls by timely alerts and reliable surveillance.",
        img: require('../images/Fall Detection.jpg'),
        id: "cv2"
    },
    {
        title: "Reduction of vibrations in PCB of an Electric Vehicle",
        domain: "Electric Vehicle",
        description: "To reduce the vibrations transferred to the PCB of electric vehicles to eliminate the failure of solder joints.",
        img: require('../images/pcb.png'),
        id: "ev1"
    },
    {
        title: "Optimizing the Sizing of Busbar",
        domain: "Electric Vehicle",
        description: "To design an Excel Calculator to optimize the sizing of the Busbar for certain materials like Copper, Aluminium and Nickel.",
        img: require('../images/busbar.png'),
        id: "ev2"
    },
    {
        title: "Design and development of IP68 6 pin connector",
        domain: "Electric Vehicle",
        description: "To design and manufacture an IP68 rating 6 pin connector with cost lower than the OEMs.",
        img: require('../images/6pin.png'),
        id: "ev3"
    },
    {
        title: "Design and development of Protection Circuit Module (BMS)",
        domain: "Electric Vehicle",
        description: "Design and development of BMS with over-voltage, under-voltage and over-current protection along with cell balancing.",
        img: require('../images/1.jpg'),
        id: "ev4"
    },
    {
        title: "Development of open-source haptic robotic arm",
        domain: "Robotics and Path Planning",
        description: "To create a robotic arm with n-degrees of freedom, capable of executing complex motions.",
        img: require('../images/robotic.PNG'),
        id: "rpp1"
    },
    {
        title: "Maze Solving Micromouse Robot",
        domain: "Robotics and Path Planning",
        description: "The main goal of the project is to implement &amp; analyze various algorithms for fast & reliable maze solving.",
        img: require('../images/simulation.gif'),
        id: "rpp2"
    },
]

const display = [
    {
        title: "Reduction of vibrations in PCB of an Electric Vehicle",
        domain: "Electric Vehicle",
        description: "To reduce the vibrations transferred to the PCB of electric vehicles to eliminate the failure of solder joints.",
        img: require('../images/pcb.png'),
        id: "ev1"
    },
    {
        title: "Optimizing the Sizing of Busbar",
        domain: "Electric Vehicle",
        description: "To design an Excel Calculator to optimize the sizing of the Busbar for certain materials like Copper, Aluminium and Nickel.",
        img: require('../images/busbar.png'),
        id: "ev2"
    },
    {
        title: "Design and development of IP68 6 pin connector",
        domain: "Electric Vehicle",
        description: "To design and manufacture an IP68 rating 6 pin connector with cost lower than the OEMs.",
        img: require('../images/6pin.png'),
        id: "ev3"
    },
    {
        title: "Design and development of BMS",
        domain: "Electric Vehicle",
        description: "Design and development of BMS with over-voltage, under-voltage and over-current protection along with cell balancing.",
        img: require('../images/1.jpg'),
        id: "ev4"
    }
]

class Navigation extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            projects: projects,
            display: display,
            domain: "",
        };
    }
    
    setDomain=(selectedKey)=>{
        // const { target } = selectedKey;
        // console.log(selectedKey);
        this.setState({ domain: selectedKey });
        this.setState({display: this.state.projects.filter(function(project){
                return project.domain === selectedKey;           
        })
    });
    // console.log(this.state.display);
    }

    render(){

        var settings = {
            dots: true,
            infinite: true,
            speed: 700,
            slidesToShow: 2,
            slidesToScroll: 2,
            autoplay: true,
            centerPadding: '100px',
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
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
          const { display} = this.state;
          console.log(display)

        return(
            <div>
            <Nav fill variant="tabs" defaultActiveKey="Electric Vehicle" onSelect={this.setDomain}>
                <Nav.Item>
                    <Nav.Link eventKey="Computer Vision">Computer Vision</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Electric Vehicle">Electric Vehicle</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Robotics and Path Planning">Robotics and Path Planning</Nav.Link>
                </Nav.Item>
            </Nav>

            <Slider {...settings}>
            {
                this.state.display.map((project) => {
                    return(
                    <div className='container'>
                        <div class="card h-100">
                            <img class="card-img-top navi-image" src={project.img} alt="Card cap"></img>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title">{project.title}</h5>
                                <p class="card-text">{project.description}</p>
                                <Link to={`/project/${project.id}`} class="mt-auto mr-auto btn btn-primary cv-button align-self-end hvr-grow">Details</Link>
                            </div>
                        </div>
                     </div>
                    )
                })    
            }

            </Slider>
            </div>
        );
    }
}

export default Navigation;