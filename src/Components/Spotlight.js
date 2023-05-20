import React from 'react';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Spotlight() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
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

        <div className=' bg-light spotlight px-3' >

            <h3 className='text-center  m-auto spot' ><b>IN THE SPOTLIGHT</b></h3>
            <div className='container my-4'>

                <Slider {...settings}>
                    <div className=" card" >
                        <img src="https://files.thesirona.com/site-images/400x400/mini-travel-razor-1.jpg" className="image-fluid w-100 py-2" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>MINI TRAVEL CART RAZOR</b></h6>
                            <p className="card-text">Replacable cartridge |stainless steel blade | reusable</p>

                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 413</b></span> &nbsp; <strike>&#8377; 499</strike>
                        </div>
                    </div>
                    <div className=" card" >
                        <img src="https://files.thesirona.com/site-images/400x400/toilet-spray-vanilla-1.jpg" className="image-fluid w-100 py-2" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>PEEBUDDY TOILET SPRAY</b></h6>
                            <p className="card-text">Odour and Germs Eliminating Toilet Spray | Toilet Sanitiser</p>

                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 165</b></span> &nbsp; <strike>&#8377; 189</strike>
                        </div>
                    </div>
                    <div className=" card" >
                        <img src="https://files.thesirona.com/site-images/400x400/Intimate-Serum.jpg" className="image-fluid w-100 py-2" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>DEPIGMENTING INTIMATE SER</b></h6>
                            <p className="card-text">Evens Skin Tone,Moisturises Skin & Restores pH Level with Kojic</p>

                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 479</b></span> &nbsp; <strike>&#8377; 599</strike>
                        </div>
                    </div>
                    <div className="  card" >
                        <img src="https://files.thesirona.com/site-images/400x400/Flowtime-Duo-Pack-Medium.jpg" className="image-fluid w-100 py-2" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>FLOWTIME DUO PACK</b></h6>
                            <p className="card-text">100% Medical Grade Silicone| FDA Approved | Kills 99% of Germs, </p>

                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 358</b></span> &nbsp; <strike>&#8377; 598</strike>
                        </div>
                    </div>
                    <div className=" card" >
                        <img src="https://files.thesirona.com/site-images/400x400/microwave-sterilizerr-2.jpg" className="card-img-top py-2" alt="..." />
                        <div className="card-body text-center">
                            <h6 className="card-title"><b>MENSTRUAL CUP STERILIZING </b></h6>
                            <p className="card-text">Microwavable | Foldable | 100% food-grade Silicone| Non- Toxic</p>

                            <span style={{ fontSize: "20PX", }}> <b>&#8377; 379</b></span> &nbsp; <strike>&#8377; 499</strike>
                        </div>
                    </div>



                </Slider >
            </div >
        </div >

    )
}