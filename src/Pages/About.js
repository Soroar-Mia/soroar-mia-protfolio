import React from 'react';
import soroarmia from "../assets/soroar_mia_1.png";

const About = () => {
    return (
        <div id='About'>
<div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <div className='p-10  scale-about'><img src={soroarmia} alt="Shoes" class="max-w-sm soroar rounded-lg shadow-3xl" /></div>
    <div className='text-center p-10'>
      <h1 class=" font-bold text-rose-500">Get To Know</h1>
      <h1 class="text-3xl font-bold text-violet-800">About Me</h1>
      <p class="py-6">I'm a MERN Stack Developer having a strong knowledge in React.js in building React Applications. Bringing excellent proficiency in JavaScript, HTML, CSS, Bootstrap, Tailwind css, Node.js, Express.js, Mongodb, Firebase and more. Ready to learn and explore new technology.</p>
      <button class="btn btn-primary">Lets'S TALK</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default About;