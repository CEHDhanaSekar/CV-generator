import React from 'react'
import '../styles/App.css'
import { NavLink } from 'react-router-dom'

export const About = () => {
  return (
    <>
<div className="about-container px-3 py-4">
  <NavLink to={-1}>
    <button className='btn btn-danger px-3 fw-bold ms-2' type='button'>Back</button>
  </NavLink>
  <h2 className='text-center text-uppercase fw-bold text-primary py-3'>How to Use ?</h2>
  <div className="row ps-3">
    <dl className='pb-3 col col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3'>
        <dt>Step 1 :</dt>
        <dd>First SignIn With Your <b>Google Account</b></dd>
        <dt>Step 2 :</dt>
        <dd>After Successfully SignIn, Click the <b>Create Resume</b> Button. That Redirect to the CV Generator Page. </dd>
        <dt>Step 3 :</dt>
        <dd>Now You will seen the Basic and one and only Static Template for Resume. Then Start to Create Your Resume Through Multiple Inputs.</dd>
        <dt>Step 4 :</dt>
        <dd>Try to Give a <b>Proper Details</b> and Datas to the Generator</dd>
        <dt>Step 5 :</dt>
        <dd>If You Want to Change the Header BackGround Color or Font Style Choose the Customize Tab and Change that Anything Your Choice. But You Have only Three font styles.</dd>
        <dt>Step 6 :</dt>
        <dd>Create the Resume and confirm the Proper Alignment in Your Viewpoint of Resume as You Expected.</dd>
        <dt>Step 7 :</dt>
        <dd>After the Conformation, Click the <b>Download PDF or Download Img</b> Button</dd>
        <dt>Step 8 :</dt>
        <dd>Now You will Get Your Resume ! in <b>PDF</b> or <b>IMG</b> Formate</dd>
    </dl>
  </div>
</div>
    </>
  )
}
