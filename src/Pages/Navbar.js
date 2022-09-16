import React from 'react';
import { Link } from 'react-router-dom';
import soroar from "../assets/soroar.png";


const Navbar = () => {
    return (
        <div>
          <div class="navbar bg-fuchsia-700 text-white  ">
            <div class="navbar-start">
                <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link to='/' >Home</Link ></li>
                <li><Link to='/About' >About</Link ></li>
                <li><Link to='/Skill' >Skill</Link ></li>
                <li><Link to='/RecentWork' >Recent Work</Link ></li>
                <li><Link to='/About' >Testimonials</Link ></li>
                <li><Link to='/ContactUs' >Contact US</Link ></li>
                </ul>
                </div>
                <img src={soroar} className="w-10 rounded-full ring ring-primary ml-5 ring-offset-base-100 ring-offset-2 " alt=''/>
               
                <Link class="btn btn-ghost ml-3 normal-case text-xl" to='/' >Soroar Mia</Link >
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-1xl  font-bold ">
                <li><Link to='/' >Home</Link ></li>
                <li><Link to='/About' >About</Link ></li>
                <li><Link to='/Expert' >Expertise</Link ></li>
                <li><Link to='/RecentWork' >Recent Work</Link ></li>
                <li><Link to='/Testimonials' >Testimonials</Link ></li>
                <li><Link to='/ContactUs' >Contact US</Link ></li>
                </ul>
            </div>
        </div>
     </div>
    );
};

export default Navbar;