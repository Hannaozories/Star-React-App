import React from 'react';
import safeImg from './safe.png';
import cabinImg from './cabin.png';
import cakeImg from './cake.png';
import circusImg from './circus.png';
import gameImg from './game.png';
import subImg from './submarine.png';
import './portfolio.css';

export default function Portfolio() {
  return <>
    <div className="portfolio ">
      <div className="container">
        <div className="head text-center">
          <h2 className='text-uppercase fa-3x mt-5 mb-3'>portfolio</h2>
          <div className="d-flex justify-content-center align-items-center mb-5">
            <div className="star1"></div>

            <div> <i className=' fa-solid fa-star fa-2x'></i></div>
            <div className="star1"></div>

          </div>

        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="item">
              <img src={cabinImg} className='w-100 rounded-3' alt="" srcSet="" />
              <div className="item-layer rounded-3">
                <i className="fa-solid plus fa-plus fa-5x"></i>
              </div>
            </div>

          </div>
          <div className="col-md-4">
            <div className="item">
              <img src={cakeImg} className='w-100 rounded-3' alt="" srcSet="" />
              <div className="item-layer rounded-3">
                <i className="fa-solid plus fa-plus fa-5x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src={circusImg} className='w-100 rounded-3' alt="" srcSet="" />
              <div className="item-layer rounded-3">
                <i className="fa-solid plus fa-plus fa-5x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src={gameImg} className='w-100 rounded-3' alt="" srcSet="" />
              <div className="item-layer rounded-3">
                <i className="fa-solid plus fa-plus fa-5x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src={safeImg} className='w-100 rounded-3' alt="" srcSet="" />
              <div className="item-layer rounded-3">
                <i className="fa-solid plus fa-plus fa-5x"></i>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="item">
              <img src={subImg} className='w-100 rounded-3' alt="" srcSet="" />
              <div className="item-layer rounded-3">
                <i className="fa-solid plus fa-plus fa-5x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}
