import React from 'react';
import About from './About';
import Banner from './Banner';
import Certificate from './Certificate';
import ContactUs from './ContactUs';
import Expert from './Expert';
import RecentWork from './RecentWork';
import Skill from './Skill';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='bg-purple-100'>
        <Banner />
        <Skill />
        <RecentWork />
        <Expert />
        <Certificate />
        <About />
        <Testimonials />
        <ContactUs />
        </div>
    );
};

export default Home;