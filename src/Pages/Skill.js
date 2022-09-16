import React from 'react';
import right from "../assets/right-tick.png";

const Skill = () => {
    return (
        <div className='mx-auto mt-10 px-10 skilimg'>
            <h1 className='text-fuchsia-700 my-10 text-center text-4xl'>DRVELOPMENT SKILL</h1>
            <div class="grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class=" text-center text-2xl font-bold text-fuchsia-700 pb-2">Frontend <span className='text-rose-500'> Development</span></h2>
                    <div className='grid  md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 '>
                        <div >
                            <ul className='grid grid-cols-1 pl-2 font-bold'>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className="text-1xl">HTML5</p>
                                </li>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className=" mt-2">Bootstrap</p>
                                </li>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className="">JavaScript</p>
                                </li>
                            </ul>
                        </div>
                        <div className=''>
                        <ul className='grid grid-cols-1 pl-2 font-bold'>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className="">CSS3</p>
                                </li>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className=" mt-2">Tailwind</p>
                                </li>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className="">React JS</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                </div>
              
                <div>
                <div class="card  bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class=" text-center text-2xl font-bold text-fuchsia-700 pb-2">Backend <span className='text-rose-500'> Development</span></h2>
                    <div className='grid  md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'>
                        <div >
                            <ul className='grid grid-cols-1 p-auto font-bold'>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className="text-1xl">Node JS</p>
                                </li>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className=" mt-2">Firebase</p>
                                </li>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className="">Rest API</p>
                                </li>
                            </ul>
                        </div>
                        <div >
                        <ul className='grid grid-cols-1  font-bold'>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className="">Express JS</p>
                                </li>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className=" mt-2">Heroku</p>
                                </li>
                                <li className='inline-flex items-center'>
                                <img src={right} className=" " alt='' />
                                <p className="">Next JS</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Skill;