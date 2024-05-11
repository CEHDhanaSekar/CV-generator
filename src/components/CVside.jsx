import React,{ useRef, useState } from "react";
import ListInfo from "./info";
import Header from "./header";
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import { useReactToPrint } from "react-to-print";

const CVside = ({
  curName,
  onCurName,
  curEmail,
  onSetEmail,
  curPhone,
  onSetPhone,
  curPhone2,
  onSetPhone2,
  curAddress,
  onSetAddress,
  curRole,
  onSetRole,
  schoolList,
  workList,
  project,
  onProject,
  skills,
  onSkills,
  achievements,
  onAchievements,
  certifications,
  onCertifications,
  langs,
  onLangs,
  interests,
  onInterests,
}) => {
 
  const [loader, setLoader] = useState(false);
  const componentPDF = useRef() 
  const capture = document.getElementById('CV-Generator')
  const downloadPDF = () => {

    setLoader(true);
  
    html2canvas(capture).then((canvas)=>{
      const imgData = canvas.toDataURL('image/png');
      const doc = new jsPDF({
        orientation : "portrait",
        unit : "px",
        format : "a4"
      });
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
  // to convert print to Html
  // const pdfDownload = useReactToPrint({
  //   content : ()=> componentPDF.current,
  //   documentTitle : "userData",
  //   onAfterPrint : ()=> alert("Data saved in pdf")
  // })


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

  return (
    <>
    <div className="cvSide-div">
      <div id="CV-Generator" className="appChild cvSide" ref={componentPDF}>
        <Header
          curName={curName}
          curEmail={curEmail}
          curPhone={curPhone}
          curPhone2={curPhone2}
          curAddress={curAddress}
          curRole={curRole}
        />
        <ListInfo itemList={skills} heading="Skills"/>
        <ListInfo itemList={schoolList} heading="Education" />
        <ListInfo itemList={certifications} heading="Certifications" />
        <ListInfo itemList={workList} heading="Experience" />
        <ListInfo itemList={project} heading="Projects" />
        <ListInfo itemList={achievements} heading="Achievements & Winnings" />
        <ListInfo itemList={langs} heading="Languages" />
        <ListInfo itemList={interests} heading="Interests" />

      </div>
    </div>
    <div className="download-resume-part container-fluid p-5 d-flex justify-content-center align-items-center">
      <button type='button' className='d-flex align-items-center justify-content-center p-2 fw-bold mx-2 mx-md-3 mx-lg-4 my-3' disabled={!(loader === false)} data-bs-toggle="modal" data-bs-target="#exampleModal" >
        Download PDF <span className="material-symbols-outlined px-1">picture_as_pdf</span>
      </button>
      <button type='button' className='d-flex align-items-center justify-content-center p-2 fw-bold mx-2 mx-md-3 mx-lg-4 my-3' disabled={!(loader === false)} data-bs-toggle="modal" data-bs-target="#exampleModal2" >
        Download Img <span className="material-symbols-outlined px-1">image</span>
      </button>
    </div>
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Download Pdf (.pdf)</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are You sure to Download the Resume in PDF Formate ?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={downloadPDF} >Download</button>
          </div>
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Download Image (.png)</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are You sure to Download the Resume in Image Formate ?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary" onClick={downloadImg} >Download</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CVside