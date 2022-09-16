import React from 'react';
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

const RecentWork = () => {
    return (
        <div className='px-20 py-20' id='RecentWork'>
            <h1 className='text-4xl text-fuchsia-700 text-center mb-20'>MY RECENT WORK</h1>
            <div class="grid  md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-8">
                <div>
                <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p6} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Coders Clinic</h2>
                        <div class="card-actions justify-end">
                        <a href="https://github.com/akilinjamam/coders-clinic" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://coders-clinic-fc76f.web.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                </div>
                </div>
                <div >
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p1} alt="Shoes" /></figure>
                    <div class="card-body ">
                        <h2 class="card-title">BEST CAR PARTS</h2>
                        <div class="card-actions justify-end">
                        <a href=" https://github.com/Soroar-Mia/manufacturer-website-client" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://car-parts-manufacturer-47b35.web.app" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">FRESH FRUITS WAREHOUSE</h2>
                        <div class="card-actions justify-end">
                        <a href="https://github.com/Soroar-Mia/warehouse-management-client-side" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href=" https://fresh-fruits-warehouse.web.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Independent Service Provider</h2>
                        <div class="card-actions justify-end">
                        <a href=" https://github.com/Soroar-Mia/independent-service-provider" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href=" https://private-tutor-c96e1.web.app" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p4} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">BEST CAR PARTS</h2>
                        <div class="card-actions justify-end">
                        <a href="https://github.com/akilinjamam/coders-clinic" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://coders-clinic-fc76f.web.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div>
                    <div class="card  bg-base-100 shadow-xl scale">
                    <figure><img src={p5} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Books Shop</h2>
                        <div class="card-actions justify-end">
                        <a href="https://github.com/akilinjamam/coders-clinic" class="btn btn-outline btn-primary">GITHUB</a>
                        <a href="https://coders-clinic-fc76f.web.app/" class="btn btn-outline btn-secondary">LIVE DEMO</a>
                        </div>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RecentWork;