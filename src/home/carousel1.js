import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from '../images/image6.jpg';

class Carousel1 extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 1,
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
      return (
        <Slider {...settings}>
            <div class="container">
            <div class="card">
                <img class="card-img-top" src={logo} alt="Card cap"></img>
                <div class="card-body ">
                    <h5 class="card-title">Card 1</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/projects" class="btn btn-primary">Know More</a>
                </div>
            </div>
            </div>
            <div class="container">
            <div class="card">
                <img class="card-img-top" src={logo} alt="Card cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card 2</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/projects" class="btn btn-primary">Know More</a>
                </div>
            </div>
            </div>
            <div class="container">
            <div class="card">
                <img class="card-img-top" src={logo} alt="Card cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card 3</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/projects" class="btn btn-primary">Know More</a>
                </div>
            </div>
            </div>
            <div class="container">
            <div class="card">
                <img class="card-img-top" src={logo} alt="Card cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card 4</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/projects" class="btn btn-primary">Know More</a>
                </div>
            </div>
            </div>
            <div class="container">
            <div class="card">
                <img class="card-img-top" src={logo} alt="Card cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card 5</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/projects" class="btn btn-primary">Know More</a>
                </div>
            </div>
            </div>
            <div class="container">
            <div class="card">
                <img class="card-img-top" src={logo} alt="Card cap"></img>
                <div class="card-body">
                    <h5 class="card-title">Card 6</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/projects" class="btn btn-primary">Know More</a>
                </div>
            </div>
            </div>
        </Slider>
      );
    }
  }

export default Carousel1;