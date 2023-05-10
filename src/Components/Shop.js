import React from 'react'

export default function Shop() {
  return (
    <div className="bg-light" style={{position:"relative",top:"125px",}}>
        <div className='container py-5'>
        <h3 className='text-center  m-auto' style={{borderBottom:"5px solid rgb(254, 148, 190)",width:"300px",align:"center",}}><b>SHOP BY CATEGORIES</b></h3>
            <div className='row d-flex justify-content-between pt-5' >
                <div class="col-lg-2 text-center">
                <img src="https://files.thesirona.com/site-images/original/01-Period-Care_2.png" class="card-img-top " style={{width:"150px",}} alt="..."/>
                    <p class="card-text my-3"><b>Period Care</b></p>
                </div>
                <div class="col-lg-2 text-center">
                <img src="https://files.thesirona.com/site-images/original/02-Intimate-Care_2.png" class="card-img-top" style={{width:"150px",}} alt="..."/>
                    <p class="card-text my-3"><b>Intimate Care</b></p>
                </div>
                <div class="col-lg-2 text-center">
                <img src="https://files.thesirona.com/site-images/original/04-Toilet-Care_1.png" class="card-img-top " style={{width:"150px",}} alt="..."/>
                    <p class="card-text my-3"><b>Toilet Hygiene</b></p>
                </div>
                <div class="col-lg-2 text-center">
                <img src="https://files.thesirona.com/site-images/original/3--top-nav-hair-removal_2.jpg" class="card-img-top " style={{width:"150px",}} alt="..."/>
                    <p class="card-text my-3"><b>Hair Removal</b></p>
                </div>
                <div class="col-lg-2 text-center">
                <img src="https://files.thesirona.com/site-images/original/KitsCombos.png" class="card-img-top " style={{width:"150px",}} alt="..."/>
                    <p class="card-text my-3"><b>Kits & Combos</b></p>
                </div>
            </div> 
        </div>
    </div>
  );
}
