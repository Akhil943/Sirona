import React from "react";


function Navbar() {
  return (
    <>
        <div className=" container-fluid first">
          <div className="container">
            <div class="container top">
              <div className="">
                <a href=""><img src="https://files.thesirona.com/site-images/original/253x72.png" className="image-fluid logo" alt="" /></a>
              </div>

              <div className=" d-flex">
                <form className="d-flex w-75 h-75 " role="search">
                  <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-danger" type="submit">Search</button>
                </form>
                <a className="nav-link active " href="#"><i className="fa-solid fa-cart-shopping " style={{ fontSize: "30px", padding: "5PX 20px", marginRight: "20px", borderRight: "2px solid grey" }}></i></a>
                <a className="nav-link active" href="#"><i className="fa-solid fa-user " style={{ fontSize: "30px", padding: "5PX 0px", }}></i></a>
              </div>

            </div>

            <div className="container">
              <nav class="  navbar navbar-expand-lg bg-body-tertiary">
                <button class="navbar-toggler button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                  <ul className="navbar-nav gap- mt-2 mb-lg-0 ">
                    <li className="nav-item">
                      <a className="nav-link active" href="#">SHOP ALL  </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">PERIOD CARE</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">INTIMATE CARE</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">TOILET HYGIENE</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">HAIR REMOVAL</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">PERSONAL SAFETY</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">KITS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link active" href="#">BLOG</a>
                    </li>
                  </ul>

                </div>

              </nav >
            </div>
          </div>
        </div>

    </>

  );
}

export default Navbar;