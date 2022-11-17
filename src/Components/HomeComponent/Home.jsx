import React from 'react';
import './Home.css';
import img from '../../avataaars.svg'
export default function Home() {
  return <>
    <div className='header'>

      <div className="container">
        <img src={img} className='image' alt="" srcSet="" />
        <h1 className='fw-bolder fa-5x text-uppercase mt-3 mb-3'>Start React</h1>

        <div className="d-flex justify-content-center align-items-center">
          <div className="star"></div>

          <div> <i className=' fa-solid fa-star fa-2x'></i></div>
          <div className="star"></div>

        </div>
        <p className='mt-4 fa-2x'>Graphic Artist - Web Designer - Illustrator</p>

      </div>

    </div>


  </>


}
