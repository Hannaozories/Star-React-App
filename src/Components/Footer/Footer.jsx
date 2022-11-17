import React from 'react'
import './footer.css'
export default function Footer() {
  return <>

    <div className="footer mt-5">
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-4 text-center py-5 ">
            <h2 className='text-uppercase text-white'>location</h2>
            <p className='text-white'>2215 John Daniel Drive <br />Clark, MO 65243</p>
          </div>
          <div className="col-md-4 text-center py-5">
            <h2 className='text-uppercase text-white'>around the web</h2>
            <div className="icons-list">
              <i className='fa-brands fa-facebook-f'></i>
              <i className='fa-brands fa-twitter'></i>
              <i className='fa-brands fa-linkedin'></i>
              <i className="fa-solid fa-globe"></i>
            </div>
          </div>
          <div className="col-md-4 text-center py-5">
            <h2 className='text-uppercase text-white'>about freelancer</h2>
            <p className='text-white'>Freelance is a free to use, MIT licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      
      </div>
    </div>
    <p className='text-center text-white bg-dark p-3'>Copyright © Your Website 2021</p>
  </>


}
