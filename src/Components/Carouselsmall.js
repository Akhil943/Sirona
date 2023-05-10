import React from 'react'

export default function Carouselsmall() {
    return (
    <div>
      
        <div id="carouselExample" class="carousel slide " style={{position:"relative",top:"125px",}}>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://files.thesirona.com/site-images/original/Mobikwik-3360x279.png" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                <img src="https://files.thesirona.com/site-images/original/simpl-3360x279.png" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
  );
}
