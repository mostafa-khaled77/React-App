import React from 'react'

export default function Footer() {
  return (
    <>
    
    <div className='main-bg p-5 text-white w-100'>
      <div className="container-fluid py-5 text-center">
        <div className="row g-sm-5">
        <div className="col-12 col-md-4">
          <h3 className='text-uppercase'>location</h3>
          <p className='pt-2'>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className="col-12 col-md-4">
          <h3 className='text-uppercase'>AROUND THE WEB</h3>
          <div className='icons d-flex justify-content-center gap-3 mt-4'>
            <a href="#" className='text-decoration-none text-white d-flex justify-content-center align-items-center'><i class="fa-brands fa-facebook fs-5"></i></a>
            <a href="#" className='text-decoration-none text-white d-flex justify-content-center align-items-center'><i class="fa-brands fa-twitter fs-5"></i></a>
            <a href="#" className='text-decoration-none text-white d-flex justify-content-center align-items-center'><i class="fa-brands fa-linkedin-in fs-5"></i></a>
            <a href="#" className='text-decoration-none text-white d-flex justify-content-center align-items-center'><i class="fa-solid fa-globe fs-5"></i></a>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <h3 className='text-uppercase pb-3'>ABOUT FREELANCER</h3>
          <p>Freelance is a free to use, licensed Bootstrap <br /> theme created by Route</p>
        </div>
      </div>
      </div>
      
    </div>
    <div className='footer-bg py-3'>
      <p className='text-white mb-0'>Copyright © Your Website 2021</p>
    </div>
    
    </>
  )
}
