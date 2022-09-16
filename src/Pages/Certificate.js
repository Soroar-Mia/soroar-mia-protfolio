import React, { Component } from 'react';
import Slider from "react-slick";
import star from '../assets/soroar mia.jpg';
import certificate from '../assets/certificate.png';
import certificate1 from '../assets/certificate1.png';
import certificate2 from '../assets/certificate2.png';
import certificate3 from '../assets/certificate3.png';
import certificate4 from '../assets/certificate4.png';
import certificate5 from '../assets/certificate5.png';




export default class Certificate extends Component {
    constructor(props) {
      super(props);
      this.play = this.play.bind(this);
      this.pause = this.pause.bind(this);
    }
    play() {
      this.slider.slickPlay();
    }
    pause() {
      this.slider.slickPause();
    }
    render() {
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
        <div className='p-20 '>
          <h2 className='text-4xl  text-info text-center mb-3'>CERTIFICATE OF ACHIEVEMENT</h2>
          <Slider ref={slider => (this.slider = slider)} {...settings}>
            <div className='m-3 p-3'>
            <div class="card bg-white hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="">
                  <img  src={certificate} alt="Shoes" />
                  </div>
                </div>
                </figure>

        
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white hover:bg-purple-200 shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="">
                  <img src={certificate1} alt="Shoes" />
                  </div>
                </div>
                </figure>
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white  hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="">
                  <img src={certificate5} alt="Shoes" />
                  </div>
                </div>
                </figure>

            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white  hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="">
                  <img src={certificate} alt="Shoes" />
                  </div>
                </div>
                </figure>
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white   hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="">
                  <img src={certificate3} alt="Shoes" />
                  </div>
                </div>
                </figure>
            </div>
            </div>
            <div className='m-3 p-3'>
            <div class="card bg-white  hover:bg-purple-200  shadow-xl">
              <figure>
              <div class="avatar pt-3">
                  <div class="">
                  <img src={certificate4} alt="Shoes" />
                  </div>
                </div>
                </figure>
            </div>
            </div>
          </Slider>

        </div>
      );
    }
  }