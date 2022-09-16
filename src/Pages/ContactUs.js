import React from 'react';

const ContactUs = () => {
  return (
    <div className='m-auto skilimg'>
      <div class="hero min-h-screen px-10">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center px-10  lg:text-left">
            <h1 class="text-xl text-center font-bold text-rose-500">Contact Us</h1>
            <h1 class="text-3xl text-center font-bold text-violet-800">Stay connected with us</h1>
            <p class="py-6 text-center">Have any question or query? Send a message to me.Looking foroward to your important advice.</p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 scale-about">
            <div class="card-body">
              <div class="form-control">
                <input type="text" placeholder="Your Name" class="input input-bordered" />
              </div>
              <div class="form-control">
                <input type="email" placeholder="Your Email Address" class="input input-bordered" />
              </div>
              <div class="form-control">
              <textarea class="textarea textarea-success" placeholder="Your Message"></textarea>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;