import React from 'react'
import { Link, NavLink } from 'react-router-dom'


export default function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg fixed-top py-4 main-bg">
  <div className="container">
    <Link className="navbar-brand fs-2 text-white fw-bolder text-uppercase" href="/">Start Framework</Link>
    <button className="navbar-toggler border-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars fa-2 text-white "></i>
    </button>
    <div className="collapse navbar-collapse w-25" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-3 ">
        <li className="nav-item">
          <NavLink className="nav-link px-2 text-white fs-6 fw-bold rounded-3" aria-current="page" to="about">ABOUT</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-2 text-white fs-6 fw-bold rounded-3" aria-current="page" to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link px-2 text-white fs-6 fw-bold rounded-3" aria-current="page" to="contact">CONTACT</NavLink>
        </li>
      </ul> 
    </div>
  </div>
</nav>


    </>
  )
}


//#2C3E50