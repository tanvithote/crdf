import React, { Component } from 'react';
import './header.css';
import logo from '../images/logo_crdf.png';
import {Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

class Header extends Component {

  state = {
    isOpen: false,
    filter: ""
  };

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

  handleSelect=(e)=>{
    e.preventDefault();
    // console.log(e.target.innerText);
    this.setState({filter: e.target.innerText});
    console.log(this.state);
  }

  render() {
    return (
      //   <nav class="navbar navbar-dark navbar-expand-sm">
      //   <a class="navbar-brand" href="/">
      //       <img src={logo} width="100" height="50" alt=""></img>  
      //   </a>
      //   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      //     <span class="navbar-toggler-icon"></span>
      //   </button>
      //   <div class="collapse navbar-collapse" id="navbarNav">
      //     <ul class="navbar-nav ml-auto">
      //       <li class="nav-item">
      //         <Link to="/about" class="nav-link">About Us</Link>
      //       </li>
      //       <li class="nav-item dropdown">
      //         <a class="nav-link dropdown-toggle" href="#" onClick={this.toggleOpen} id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      //           Projects
      //         </a>
      //         <ul class={menuClass} aria-labelledby="navbarDropdown">
      //           <li class="dropdown-list-item">
      //           <Link to={{
      //             pathname: "/projects",
      //             state: {
      //               filter:"Computer Vision"
      //             }
      //           }} class="dropdown-item">Computer Vision</Link>
      //           </li>
      //           <div class="dropdown-divider"></div>
      //           <li class="dropdown-list-item">
      //           <Link to={{
      //             pathname: "/projects",
      //             state: {
      //               filter:"Electric Vehicle"
      //             }
      //           }} class="dropdown-item">Electric Vehicle</Link>
      //           </li>
      //           <div class="dropdown-divider"></div>
      //           <li class="dropdown-list-item">
      //           <Link to={{
      //             pathname: "/projects",
      //             state: {
      //               filter:"Robotics and Path Planning"
      //             }
      //           }} class="dropdown-item" href="/projects">Robotics and Path Planning</Link>
      //           </li>
      //         </ul>
      //       </li>
      //       <li class="nav-item">
      //         <a class="nav-link" href="/contact">Contact Us</a>
      //       </li>
      //     </ul>
      //   </div>
      // </nav>

      <Navbar  expand="lg">
  <Navbar.Brand href="/"><img src={logo} width="100" height="50" alt=""></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link class="nav-link" href="/about">About Us</Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown">
        <NavDropdown.Item class="dropdown-list-item"><Link to={{
                  pathname: "/projects",
                  state: {
                    filter:"Computer Vision"
                  }
                }} class="dropdown-item">Computer Vision</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item class="dropdown-list-item"><Link to={{
                  pathname: "/projects",
                  state: {
                    filter:"Electric Vehicle"
                  }
                }} class="dropdown-item">Electric Vehicle</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item class="dropdown-list-item"><Link to={{
                  pathname: "/projects",
                  state: {
                    filter:"Robotics and Path Planning"
                  }
                }} class="dropdown-item">Robotics and Path Planning</Link></NavDropdown.Item>
      </NavDropdown>
      <Nav.Link class="nav-link" href="/contact">Contact Us</Nav.Link>
      
    </Nav>

  </Navbar.Collapse>
</Navbar>
    );
  }
}

export default Header;
