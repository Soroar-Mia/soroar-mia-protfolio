import React from 'react';
import img from "../assets/coding.gif";
import soroar from "../assets/soroar.png";


const Banner = () => {
    return (
        <div className='navbarimg' id='Home'>
        <div className="hero px-10  navbarimg min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="sm:w-1/2" >
          <img src={img} className="lg:h-[400px] lg:w-[450px] mx-auto justify-item-end " alt=''/>
        </div>
        <div className='sm:w-1/2 px-2'>
          <h1 className="text-5xl font-bold text-fuchsia-700 font-sans">Hi there! <br />I'm Soroar Mia</h1>
          <p className="py-6">Always up for a challenge, I have a deep desire to excel and continuously improve in my work.</p>
          <a href="https://drive.google.com/file/d/1x4cPTv6vPOkbE2jRkfOkQyqGhZ6mY3JP/view" class="btn btn-outline btn-warning mx-2">DOWNLOAD RESUME</a>
          <a class="btn btn-outline btn-success mx-2">LETS TALK</a>

        </div>
        <div className="sm:w-1/2" >
          <img src={soroar} className="w-50 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 " alt=''/>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Banner;