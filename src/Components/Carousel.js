import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false"  style={{position:"relative",top:"125px",}}>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://files.thesirona.com/site-images/original/2Web-banner-1920x527.gif" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://files.thesirona.com/site-images/original/period-track-hd.gif" class="d-block w-100" alt="..."/>
                </div>
                <div class="carousel-item">
                    <img src="https://files.thesirona.com/site-images/original/desktop-banner-1920x527.gif" class="d-block w-100" alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
  )
}

