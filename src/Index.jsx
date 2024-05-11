import { useState,useEffect, useContext } from 'react'
import { Navbar } from './components/Navbar'
import { Routes,Route} from 'react-router-dom'
import GoogleAuth from "./components/GoogleAuth"
import App from "./App"
import Carousel from './components/Carousel'
import { AuthProvider, useAuth } from './components/Auth'
import { RequireAuth } from './components/RequiredAuth'
import { About } from './components/About'

export const Index = () => {

  const userAuth = useAuth()

  const [gotoSignIn,setGotoSignIn] = useState(false)
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  const [uName,setUserName] = useState("")
  const [mailId,setUserMail] = useState("")
  const [profileImg,setProfileImg] = useState("")

  const handleSignIn = () =>{ setGotoSignIn(true) }
  const handleBack = () =>{ setGotoSignIn(false) }
  const handleLogin = () =>{ setIsAuthenticated(true) }
  const handleLogout = () =>{ setIsAuthenticated(false) }

  const handleUname = (value) =>{ setUserName(value) }
  const handleMailId = (value) =>{ setUserMail(value) }
  const handleProfileImg = (value) => { setProfileImg(value) }

  // For Download Resume (pdf,img)
  const [loader, setLoader] = useState(false);
  const capture = document.querySelector("#CV-Generator");

  const downloadPDF = () => {

    setLoader(true);
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'a4');
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, 'PNG', 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save('resume.pdf');
    })
    .catch( (error)=>{ 
      alert("Unable to Download")
      setLoader(false)
      console.error(error)
    });
  }

  const downloadImg = () => {
    setLoader(true);

    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const imgLink = document.createElement('a');
      imgLink.setAttribute('href',imgData);
      imgLink.setAttribute('download','resume.png')
      imgLink.click();
      imgLink.remove();
      setLoader(false)
    })
    .catch( (error)=>{ 
      alert("Unable to Download")
      setLoader(false)
      console.error(error)
    })
  }


  useEffect( () => {
    let user_details = localStorage.getItem('user') || null
    if(user_details){
      const User = JSON.parse(user_details)
      handleLogin()
      handleUname(User.uname)
      handleMailId(User.id)
      handleProfileImg(User.img)
      userAuth.login(User.uname)
    }
    else{
      handleLogout()
      handleUname("")
      handleMailId("")
      userAuth.logout()
    }
  },[]);

  return (
    <>
      <Navbar gotoSignIn={gotoSignIn} isAuthenticated={isAuthenticated} onSignIn={handleSignIn} onBack={handleBack} onLogin={handleLogin} onLogout={handleLogout} onUsername={handleUname} onMailId={handleMailId} Uname={uName} MailId={mailId} profileImg={profileImg} onProfileImg={setProfileImg} />
      <Routes>
        { !gotoSignIn && <Route path='/' element={<Carousel isAuthenticated={isAuthenticated} onSignIn={handleSignIn} />} />}
        { gotoSignIn && <Route path='/' element={<GoogleAuth onLogin={handleLogin} onLogout={handleLogout} onSignIn={handleSignIn} onBack={handleBack} onUsername={handleUname} onMailId={handleMailId} onProfileImg={setProfileImg}/>} />}
        <Route path='/App' element={<RequireAuth><App /></RequireAuth>} />
        <Route path='About' element={<About />}/>
      </Routes>
    </>
  )
}

export default Index