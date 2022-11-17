import React from 'react'

export default function Contact() {
  return <>
    <div className="contact">

      <div className="container">
        <div className="contact-header text-center">
          <h2 className='text-uppercase fa-3x mt-5 mb-3'>contact me</h2>
          <div className="d-flex justify-content-center align-items-center mb-5">
            <div className="star1"></div>

            <div> <i className=' fa-solid fa-star fa-2x'></i></div>
            <div className="star1"></div>

          </div> </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="mb-3 mt-5">
              <input type="text" className="form-control " id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div className="mb-3 mt-2">
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address" />
            </div>
            <div className="mb-3 mt-2">
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="PhoneNumber" />
            </div>
            <div className="mb-3">
              <textarea className="form-control" placeholder='Message' id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" className='btn btn-success'>Send</button>
          </div>
        </div>

      </div>
    </div>



  </>
}
