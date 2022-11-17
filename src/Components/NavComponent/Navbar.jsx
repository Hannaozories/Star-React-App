import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './nav.css'
export default function Navbar() {
  return <>
    <nav className="navbar nav-bar  navbar-expand-lg ">
      <div className="container">
        <h2> <Link className="navbar-brand text-uppercase text-white fw-bolder" to="/">start react</Link></h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="fa-solid  fa-bars text-white"> Menue</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2  mb-lg-0">

            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link  text-white text-uppercase fw-bolder active-links' : 'nav-link  text-white text-uppercase fw-bolder'} to='home'>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link  text-white text-uppercase fw-bolder active-links' : 'nav-link  text-white text-uppercase fw-bolder'} to='portfolio'>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link  text-white text-uppercase fw-bolder active-links' : 'nav-link  text-white text-uppercase fw-bolder'} to='about'>About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link  text-white text-uppercase fw-bolder active-links' : 'nav-link  text-white text-uppercase fw-bolder'} to='contact'>Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>

}
