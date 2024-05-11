import React, { useState } from 'react'
import '../styles/App.css'
import { auth,provider } from '../config/firebase.config'
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth'
import { useAuth } from './Auth'

export const GoogleAuth = ({ onLogin,onLogout,onSignIn,onBack,onUsername,onMailId,onProfileImg }) => {
  
  const userAuth = useAuth()
  const [loader,setLoader] = useState(false)

  function SignInAccount(){
    setLoader(true)
    signInWithPopup(auth,provider)
    .then((res) =>{
      onProfileImg(res.user.photoURL)
      userAuth.login(res.user.displayName)
      onUsername(res.user.displayName)
      onMailId(res.user.email)
      const euser = JSON.stringify({
        "uname" : res.user.displayName,
        "id" : res.user.email,
        "img" : res.user.photoURL,
      })
      localStorage.setItem("user",euser)
      setLoader(false)
    }).catch((error) =>{
      alert("Something Error When SignIn With Google")
      console.log(error)
      onSignIn()
      onLogout()
      setLoader(false)
    })
  }

  onAuthStateChanged(auth, (user) =>{
    if(user){
      onBack()
      onLogin()
    }
    else{ }
  });

  return (
    <>
    <div id='GoogleAuth-container' className='d-flex justify-content-center align-items-center'>
      <div id="Google-Auth">
        <button type="button" id='google-btn' className='signIn-btn' onClick={SignInAccount} disabled={loader}>
            <img src="google.png" alt="" className='button-icon'/>
            <span className='btn-text'>Sign In With Google</span>
            <i className="bi bi-box-arrow-in-right bs-icon"></i>
        </button>
      </div>
    </div>
    </>
  )
};

export default GoogleAuth