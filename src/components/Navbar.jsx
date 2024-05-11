import { useState } from 'react'
import "../styles/App.css"
import { signOut,onAuthStateChanged } from 'firebase/auth'
import { auth,provider } from '../config/firebase.config'
import { useAuth } from './Auth'

export const Navbar = ({ 
  isAuthenticated,
  gotoSignIn,
  onSignIn,
  onBack,
  onLogin,
  onLogout,
  onUsername,
  onMailId,
  Uname,
  MailId,
  profileImg,
  onProfileImg,
}) => {
  const userAuth = useAuth()

  // to show the profile 
  function showProfile(){
    let profile = document.getElementById('user-profile-options');
    let wrapper = document.getElementById('profile-wrapper');
    profile.classList.toggle('show');
    wrapper.classList.toggle('show');
    wrapper.addEventListener('click',()=>{
      wrapper.classList.remove('show');
      profile.classList.remove('show');
    });
  };
  // Google Signout Api
  const userSignOut = async() => {
    signOut(auth).then(() => {
      alert("You Have Signed out Successfully");
      localStorage.clear()
      userAuth.logout()
    }).catch( (error) => {
      alert("Sign Out is Failure ! Something went wrong");
      console.log(`Error : ${error.message}`)
    })
  }
  onAuthStateChanged(auth, (user) =>{
    if(user){ }
    else{
      onUsername(null)
      onMailId(null)
      onProfileImg("")
      onLogout()
    }
  })
  
  const UserProfile = () => {
    return (
      <>
        <button type="button" id="user-profile-btn" onClick={showProfile}>
          <img src={profileImg} alt="" width="40px" height="40px"/>
        </button>
        <div id="user-profile-options">
          <div className="mail-id-part fw-bold">
            <p>{MailId}</p>
          </div>
          <div className="profile-img-part">
            <img src={profileImg} className="img-fluid rounded-circle" alt="" />
          </div>
          <div className="profile-name-part fw-bold">
            <p>Hi, {Uname}</p>
          </div>
          <button type="button" className='btn btn-outline-dark d-flex fw-bold' onClick={userSignOut}>
            Sign Out <span className="material-symbols-outlined ps-2">logout</span>
          </button>
        </div>
      </>
    )
  }

  return (
    <>
<nav className='navbar navbar-dark bg-dark px-1 pe-2 pe-sm-3 pe-md-4 pe-lg-5' id='nav-bar'>
  <div className="container-fluid">
    <div className="navbar-title d-flex align-items-center">
      <h1 className="navbar-brand">
        <img src="resumeLogo.png" alt="" className='tr-logo mx-1' width="50px"/>TECH RESUMES
      </h1>
    </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        { !isAuthenticated && !gotoSignIn && <button type='button' className='btn btn-outline-info fw-md-bold p-1 px-sm-3 py-sm-2' onClick={onSignIn}>SignIn</button>}
        { !isAuthenticated && gotoSignIn && <button type='button' className='btn btn-outline-info fw-bold' onClick={onBack}>Back</button>}
        { isAuthenticated && <UserProfile /> }
      </li>
    </ul>
  </div>
</nav>

<div className="profile-wrapper" id="profile-wrapper">

</div>
    </>
  )
};
