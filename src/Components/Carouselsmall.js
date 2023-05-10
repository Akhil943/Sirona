import React from 'react'

export default function Carouselsmall() {
    return (
    <div>
      
        <div id="carouselExample" className="carousel slide " style={{position:"relative",top:"125px",}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://files.thesirona.com/site-images/original/Mobikwik-3360x279.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="https://files.thesirona.com/site-images/original/simpl-3360x279.png" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
}
