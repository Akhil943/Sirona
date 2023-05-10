import React from 'react'

export default function Spotlight() {
  return (
    <div className='p-3 bg-light' style={{position:"relative",top:"125px",}}>
        <h3 className='text-center  m-auto' style={{borderBottom:"5px solid rgb(254, 148, 190)",width:"300px",align:"center",}}><b>IN THE SPOTLIGHT</b></h3>
      <div id="carouselExampl" className=" container carousel slide py-5">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="row justify-content-evenly">
                        <div className=" col-lg-3 card" style={{ width: "300px", }}>
                            <img src="https://files.thesirona.com/site-images/400x400/mini-travel-razor-1.jpg" className="image-fluid w-100 py-2" alt="..." />
                            <div className="card-body text-center">
                                <h6 className="card-title"><b>MINI TRAVEL CART RAZOR</b></h6>
                                <p className="card-text">Replacable cartridge |stainless steel blade | reusable</p>
                                
                                <span style={{fontSize:"20PX",}}> <b>&#8377; 413</b></span> &nbsp; <strike>&#8377; 499</strike>
                            </div>
                        </div>
                        <div className="col-lg-3 card" style={{ width: "300px", }}>
                            <img src="https://files.thesirona.com/site-images/400x400/toilet-spray-vanilla-1.jpg" className="image-fluid w-100 py-2" alt="..." />
                            <div className="card-body text-center">
                                <h6 className="card-title"><b>PEEBUDDY TOILET SPRAY</b></h6>
                                <p className="card-text">Odour and Germs Eliminating Toilet Spray | Toilet Sanitiser</p>

                                <span style={{fontSize:"20PX",}}> <b>&#8377; 165</b></span> &nbsp; <strike>&#8377; 189</strike>
                            </div>
                        </div>
                        <div className="col-lg-3 card" style={{ width: "300px", }}>
                            <img src="https://files.thesirona.com/site-images/400x400/Intimate-Serum.jpg" className="image-fluid w-100 py-2" alt="..." />
                            <div className="card-body text-center">
                                <h6 className="card-title"><b>DEPIGMENTING INTIMATE SER</b></h6>
                                <p className="card-text">Evens Skin Tone,Moisturises Skin & Restores pH Level with Kojic</p>
                                
                                <span style={{fontSize:"20PX",}}> <b>&#8377; 479</b></span> &nbsp; <strike>&#8377; 599</strike>
                            </div>
                        </div>
                        <div className=" col-lg-3 card" style={{ width: "300px", }}>
                            <img src="https://files.thesirona.com/site-images/400x400/Flowtime-Duo-Pack-Medium.jpg" className="image-fluid w-100 py-2" alt="..." />
                            <div className="card-body text-center">
                                <h6 className="card-title"><b>FLOWTIME DUO PACK</b></h6>
                                <p className="card-text">100% Medical Grade Silicone| FDA Approved | Kills 99% of Germs, </p>
                                
                                <span style={{fontSize:"20PX",}}> <b>&#8377; 358</b></span> &nbsp; <strike>&#8377; 598</strike>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                <div className="row justify-content-evenly">
                       
                        <div className="col-lg-3 card" style={{ width: "300px", }}>
                            <img src="https://files.thesirona.com/site-images/400x400/microwave-sterilizerr-2.jpg" className="card-img-top py-2" alt="..." />
                            <div className="card-body text-center">
                                <h6 className="card-title"><b>MENSTRUAL CUP STERILIZING </b></h6>
                                <p className="card-text">Microwavable | Foldable | 100% food-grade Silicone| Non- Toxic</p>
                                
                                <span style={{fontSize:"20PX",}}> <b>&#8377; 379</b></span> &nbsp; <strike>&#8377; 499</strike>
                            </div>
                        </div>
                        <div className=" col-lg-3 card" style={{ width: "300px", }}>
                            <img src="https://files.thesirona.com/site-images/400x400/mini-travel-razor-1.jpg" className="image-fluid w-100 py-2" alt="..." />
                            <div className="card-body text-center">
                                <h6 className="card-title"><b>MINI TRAVEL CART RAZOR</b></h6>
                                <p className="card-text">Replacable cartridge |stainless steel blade | reusable</p>
                                
                                <span style={{fontSize:"20PX",}}> <b>&#8377; 413</b></span> &nbsp; <strike>&#8377; 499</strike>
                            </div>
                        </div>
                        <div className="col-lg-3 card" style={{ width: "300px", }}>
                            <img src="https://files.thesirona.com/site-images/400x400/toilet-spray-vanilla-1.jpg" className="image-fluid w-100 py-2" alt="..." />
                            <div className="card-body text-center">
                                <h6 className="card-title"><b>PEEBUDDY TOILET SPRAY</b></h6>
                                <p className="card-text">Odour and Germs Eliminating Toilet Spray | Toilet Sanitiser</p>

                                <span style={{fontSize:"20PX",}}> <b>&#8377; 165</b></span> &nbsp; <strike>&#8377; 189</strike>
                            </div>
                        </div>
                        <div className="col-lg-3 card" style={{ width: "300px", }}>
                            <img src="https://files.thesirona.com/site-images/400x400/Intimate-Serum.jpg" className="image-fluid w-100 py-2" alt="..." />
                            <div className="card-body text-center">
                                <h6 className="card-title"><b>DEPIGMENTING INTIMATE SER</b></h6>
                                <p className="card-text">Evens Skin Tone,Moisturises Skin & Restores pH Level with Kojic</p>
                                
                                <span style={{fontSize:"20PX",}}> <b>&#8377; 479</b></span> &nbsp; <strike>&#8377; 599</strike>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampl" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampl" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>

        </div>
    </div>
  )
}
