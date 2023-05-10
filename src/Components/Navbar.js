import React from "react";
import { HashLink } from "react-router-hashlink";


function Navbar() {
  return ( 
    <>
      <div class="justify-content-center " style={{backgroundColor:"white",position:"fixed",zIndex:"99",width:"100%"}}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" >
          <div class="container d-flex">
            <a href=""><img src="https://files.thesirona.com/site-images/original/253x72.png" class="image-fluid w-75 h-50" alt="" /></a>
            <form class="d-flex " role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div class="collapse navbar-collapse d-flex r" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-cart-shopping mx-2" style={{fontSize:"30px",}}></i></a>
                </li>
                <li style={{fontSize:"30px",}}>|</li>
                <li class="nav-item">
                  <a class="nav-link active" href="#"><i class="fa-solid fa-user mx-2" style={{fontSize:"30px",}}></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
          <div class="container">
            <ul class="navbar-nav gap-4  mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active"  href="#"><HashLink to="#Bestseller">SHOP ALL</HashLink>  </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">PERIOD CARE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link "  href="#">INTIMATE CARE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">TOILET HYGIENE</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">HAIR REMOVAL</a>
              </li>
              <li class="nav-item">
                <a class="nav-link "  href="#">PERSONAL SAFETY</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">KITS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link ">BLOG</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    </>

  );
}

export default Navbar;