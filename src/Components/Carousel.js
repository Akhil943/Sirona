import React from 'react'

export default function Carousel() {
  return (
    <div id="carouselExampleControlsNoTouching" className="carousel slide maincarousel" data-bs-touch="false"  >
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://files.thesirona.com/site-images/original/2Web-banner-1920x527.gif" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://files.thesirona.com/site-images/original/period-track-hd.gif" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://files.thesirona.com/site-images/original/desktop-banner-1920x527.gif" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
  )
}

