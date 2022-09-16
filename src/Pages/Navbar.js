import React from 'react';
import { Link } from 'react-router-dom';
import soroar from "../assets/soroar.png";


const Navbar = () => {
    return (
        <div id='nav' >
          <div class="navbar bg-fuchsia-700  ">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a  href="#nav">Home</a></li>
                <li><a  href="#About">About</a></li>
                <li><a  href="#Expertise">Expertise</a></li>
                <li><a  href="#RecentWork">Recent Work</a></li>
                <li><a  href="#Testimonials">Testimonials</a></li>
                <li><a  href="#Contact">Contact US</a></li>
                </ul>
                </div>
                <img src={soroar} className="w-10 rounded-full ring ring-primary ml-5 ring-offset-base-100 ring-offset-2 " alt=''/>
                <a class="btn btn-ghost text-white  normal-case text-xl ml-2 " href="#nav">Soroar Mia</a>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-1xl text-white  font-bold ">
                <li><a  href="#nav">Home</a></li>
                <li><a  href="#About">About</a></li>
                <li><a  href="#Expertise">Expertise</a></li>
                <li><a  href="#RecentWork">Recent Work</a></li>
                <li><a  href="#Testimonials">Testimonials</a></li>
                <li><a  href="#Contact">Contact US</a></li>
                </ul>
            </div>
        </div>
     </div>
    );
};

export default Navbar;