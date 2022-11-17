import React from 'react';
import './about.css'

export default function About() {
  return <>
    <div className="about  mt-5">
      <div className="container">

        <div className="about-header text-white pt-5 text-center">
          <h2 className='text-uppercase fa-3x'>About</h2>

          <div className="d-flex justify-content-center align-items-center">
            <div className="star"></div>

            <div> <i className=' fa-solid fa-star fa-2x'></i></div>
            <div className="star"></div>

          </div>        </div>

        <div className="row justify-content-center my-5">
          <div className="col-md-4">
            <p className='text-white  p-size'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-4">
            <p className='text-white  p-size'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
          </div>
        </div>


      </div>
    </div>



  </>
}
