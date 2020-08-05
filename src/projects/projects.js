import React, { Component } from 'react';
import './projects.css';
import {Link} from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';


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
        description: "To implement & analyze various algorithms for fast & reliable maze solving.",
        img: require('../images/simulation.gif'),
        id: "rpp2"
    },
]

class Projects extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            projects: projects,
            display: projects,
            filter: "All"
        };
      }
      componentDidMount (){
        const { filter } = this.props.location.state;
        this.setState({filter: filter});
        this.setState({display: this.state.projects.filter(function(project){
            if(filter === "All"){
                return project;
            }
            else{
                return project.domain === filter;
            }
            
        })
    });
      }

    handleSelect=(event)=>{
        const { target } = event;
        event.stopPropagation();
        this.setState({ filter: target.innerText });
        this.setState({display: this.state.projects.filter(function(project){
            if(target.innerText === "All"){
                return project;
            }
            else{
                return project.domain === target.innerText;
            }
            
        })
    });
    }

    renderProjects = display => {
        return (
            <div class="row">
                {display.map((project) => {
                    // const path = "../"+project.img;
                    return (
                        <div class="col-md-4 mb-4 card ">
                            <img class="card-img-top" src={project.img} alt={project.title} height="200"></img>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title"><u>Title</u>: {project.title}</h5>
                                <p class="domain-name"><u>Domain</u>: {project.domain}</p>
                                <p class="card-text">{project.description}</p>
                                <Link to={`/project/${project.id}`} class="mt-auto mr-auto btn btn-primary">Details</Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    render() {
        const { display, filter} = this.state;

        return(
            <div class="project-page">
                <Header/>
                <section>
                    <div class="custom-container container">
                        <div class="heading">
                            <h2 class="project-heading">Projects</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-3 filter-list">
                                <ul class="list-unstyled sidebar">
                                    <li><a className={`filters ${filter==="All" ? "active" : ""}`} href="#" onClick={this.handleSelect}>All</a></li>
                                    <li><a className={`filters ${filter==="Computer Vision" ? "active" : ""}`} href="#" onClick={this.handleSelect}>Computer Vision</a></li>
                                    <li><a className={`filters ${filter==="Electric Vehicle" ? "active" : ""}`} href="#" onClick={this.handleSelect}>Electric Vehicle</a></li>
                                    <li><a className={`filters ${filter==="Robotics and Path Planning" ? "active" : ""}`} href="#" onClick={this.handleSelect}>Robotics and Path Planning</a></li>
                                </ul>
                            </div>
                            <div class="col-md-9">
                            {this.renderProjects(display)}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        );
    }
}

export default Projects;