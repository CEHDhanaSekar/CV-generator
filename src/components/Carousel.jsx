import { useState } from "react"
import "../styles/App.css"
import { NavLink, Navigate, useNavigate } from 'react-router-dom'

export default function Carousel({isAuthenticated,onSignIn})  {
  
  const navigate = useNavigate()

  function ClicktoResume(){
    onSignIn()
  }
  const navLinkStyles = {
    textDecoration: 'none',
  }
  return (
    <>
<main className='container-lg'>
  <div className="landing-page-elements row pb-3">
    <div id="carousel-div" className="col-12 col-lg-6 g-0 p-1 pt-4 d-flex justity-content-center align-items-center flex-column">
      <div id="carousel-slider" className="carousel slide pb-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval={2000}>
            <img src="carousel1.png" alt="" className="d-block w-100"/>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="carousel3.png" alt="" className="d-block w-100"/>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="carousel4.png" alt="" className="d-block w-100"/>
          </div>
          <div className="carousel-item" data-bs-interval={2000}>
            <img src="carousel2.png" alt="" className="d-block w-100"/>
          </div>
        </div>
        <button className="carousel-control-next carousel-navigator" type="button" data-bs-slide="next" data-bs-target="#carousel-slider">
            <span className="carousel-control-next-icon"></span>
        </button>
        <button className="carousel-control-prev carousel-navigator" type="button" data-bs-slide="prev" data-bs-target="#carousel-slider">
            <span className="carousel-control-prev-icon"></span>
        </button>
      </div>
      <div id="create-button-div">
        { isAuthenticated && <NavLink to="App" style={navLinkStyles}>
          <button type="button"><span>Create Resume</span><i></i></button>
        </NavLink>}
        { !isAuthenticated && <button type="button" onClick={ClicktoResume}><span>Create Resume</span><i></i></button>}
      </div>
    </div>
    <div id="left-card" className="col-12 col-sm-6 col-lg-3 mb-3 d-flex justify-content-center align-items-center">
      <div className="card bg-dark text-white">
        <img src="resume1.jpg" className="card-img" alt="" />
        <div className="card-img-overlay d-flex align-items-center justity-content-center">
          <h5 className="card-title text-uppercase text-center">"Craft Your Dream Tech Job Resume in Minutes."</h5>
        </div>
      </div>
    </div>
    <div id="right-card" className="col-12 col-sm-6 col-lg-3 mb-3 d-flex justify-content-center align-items-center">
      <div className="card bg-dark text-white">
        <img src="resume2.jpg" className="card-img" alt="" />
        <div className="card-img-overlay d-flex align-items-center justity-content-center">
          <h5 className="card-title text-uppercase text-center">"Stand Out From the Crowd. Build a Powerful Tech Resume."</h5>
        </div>
      </div>
    </div>
    <div id="resume-add-1" className="resume-add col-12 row g-3 d-flex justify-content-center align-items-center">
      <div className="add-img col-12 col-sm-4 col-md-6">
        <img src="resume_pic.jpg" alt="" className="img-fluid img-thumbnail rounded-3"/>
      </div>
      <p className="col-12 col-sm-8 col-md-6 px-3 add-text">"Craft your professional identity effortlessly with our innovative resume builder project, empowering you to create standout resumes tailored to your unique skills and experiences."</p>
    </div>
    <div id="resume-add-2" className="resume-add col-12 row g-3 d-flex justify-content-center align-items-center">
      <div className="add-img col-12 col-sm-4 col-md-6 order-sm-2">
        <img src="job_key.jpg" alt="" className="img-fluid img-thumbnail rounded-3 img-end"/>
      </div>
      <p className="col-12 col-sm-8 col-md-6 px-3 add-text">"Unlock your career potential with our intuitive resume builder – create compelling resumes that grab employers' attention and land your dream job, effortlessly."</p>
    </div>
  </div>
</main>
<footer className="w-100 bg-dark p-3"> 
    <div className="footer-content row">
      <div className="about-side d-flex flex-column align-items-center justify-content-center pb-4 col col-12 col-md-6">
        <p className="text-light fw-bold">More About The CV Generator ?</p>
        <i className="fa-solid fa-circle-down text-light p-2"></i>
        <NavLink to="About">
          <button type="button" className="btn btn-outline-info px-4">About !</button>
        </NavLink>
      </div>
      <div className="profile-side d-flex flex-column col col-12 col-md-6 align-items-center justify-content-center pb-4">
        <p>Share Your FeedBack & Contact With Us</p>
        <div className="profile-side-links d-flex gap-2 mt-3">
          <div className="mail-link">
            <a href="mailto:viratvikii1618@gmail.com" className="text-light">
              <i className="fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className="github-link">
            <a href="https://github.com/CEHDhanaSekar" target="_blank" className="text-light">
              <i className="fa-brands fa-square-github"></i>
            </a>
          </div>
          <div className="linkedin-link">
            <a href="https://www.linkedin.com/in/dhanasekar-r-71693029a/" target="_blank" className="text-light">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
</footer>
    </>
  )
}
