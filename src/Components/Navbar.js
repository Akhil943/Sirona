import React from "react";


function Navbar() {
  return ( 
    <>
      <div className="justify-content-center " style={{backgroundColor:"white",position:"fixed",zIndex:"99",width:"100%"}}>
        <nav className="navbar navbar-expand-lg bg-body-tertiary" >
          <div className="container d-flex">
            <a href=""><img src="https://files.thesirona.com/site-images/original/253x72.png" className="image-fluid w-75 h-50" alt="" /></a>
            <form className="d-flex " role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <div className="collapse navbar-collapse d-flex r" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#"><i className="fa-solid fa-cart-shopping mx-2" style={{fontSize:"30px",}}></i></a>
                </li>
                <li style={{fontSize:"30px",}}>|</li>
                <li className="nav-item">
                  <a className="nav-link active" href="#"><i className="fa-solid fa-user mx-2" style={{fontSize:"30px",}}></i></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container">
            <ul className="navbar-nav gap-4  mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active"  href="#">SHOP ALL  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">PERIOD CARE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link "  href="#">INTIMATE CARE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">TOILET HYGIENE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">HAIR REMOVAL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link "  href="#">PERSONAL SAFETY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">KITS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link ">BLOG</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

    </>

  );
}

export default Navbar;