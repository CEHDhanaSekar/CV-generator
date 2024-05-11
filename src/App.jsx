import { useState } from "react";
import "./styles/App.css";
import EditSide from "./components/editSide";
import CVside from "./components/CVside";

export const schools = [
  {
    School: "San Diego State",
    Degree: "BS Information Systems",
    "Start date": "2017",
    "End date": "2021",
    Location: "San Diego, CA",
    visible: true,
  },
];
export const workExperienceList = [
  {
    Company: "New York Post",
    "Position Title": "Project Manager",
    "Start date": "2023",
    "End date": "2024",
    Location: "New York",
    Description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida tortor ac magna feugiat, sed dapibus ipsum ultricies. Proin nec massa ut magna luctus fermentum.",
    visible: true,
  },
];
export const Projects = [
  {
    Title : "Bus Tracking System",
    Description : "The Bus Tracking System is My final year Web Developments project. TechStacks : for Frontend ReactJs,Bootstrap and for Backend NodeJs,Firebase Authentications",
    visible : true,
  },
]
export const Achievements = [
  {
    Achievement : "1st Price in Code Debugging competition in SRM College of Engeneering Symposium",
    visible : true,
  },
]
export const Certifications = [
  {
    Certification : "Web Development Full Course completed in GUVI",
    visible : true,
  },
]
export const Skills = [
  {
    Skills : "JavaScript",
    visible : true,
  }
]
export const Langs = [
  {
    Language : "English",
    visible : true,
  }
]
export const Interests = [
  {
    Interests : "Problem Solving",
    visible : true,
  }
]

export default function App() {
  // State for Personal Form
  const [curName, setCurName] = useState("Brendan Eich R");
  const [curEmail, setEmail] = useState("HakonWiumLie@nextgen.io");
  const [curPhone, setPhone] = useState("298-536-0990");
  const [curPhone2, setPhone2] = useState("276-542-0095");
  const [curAddress, setAddress] = useState("Developers st, NY");
  const [curRole,setRole] = useState("SoftWare Developer");
  const [skills,setSkills] = useState(Skills)
  // State for the Array of Objects
  const [schoolList, setSchoolList] = useState(schools);
  const [workList, setWorkList] = useState(workExperienceList);
  const [project,setProject] = useState(Projects)
  const [achievements,setAchievements] = useState(Achievements)
  const [certifications,setCertifications] = useState(Certifications)
  // state for customize and content button
  const [contentActive, setContentActive] = useState(true);
  const [customizeActive, setCustomizeActive] = useState(false);
  // state for lang and interests
  const [langs,setLangs] = useState(Langs)
  const [interests,setInterests] = useState(Interests)

  return (
    <>
    <div className="app">
      <EditSide
        curName={curName} onCurName={setCurName}
        curEmail={curEmail} onSetEmail={setEmail}
        curPhone={curPhone} onSetPhone={setPhone}
        curPhone2={curPhone2} onSetPhone2={setPhone2}
        curAddress={curAddress} onSetAddress={setAddress}
        curRole={curRole} onSetRole={setRole}
        schoolList={schoolList} onSchoolList={setSchoolList}
        workList={workList} onWorkList={setWorkList}
        project={project} onProject={setProject}
        skills={skills} onSkills={setSkills}
        achievements={achievements} onAchievements={setAchievements}
        certifications={certifications} onCertifications={setCertifications}
        langs={langs} onLangs={setLangs}
        interests={interests} onInterests={setInterests}
        contentActive={contentActive} setContentActive={setContentActive}
        customizeActive={customizeActive} setCustomizeActive={setCustomizeActive}
      />
      <CVside
        curName={curName} onCurName={setCurName}
        curEmail={curEmail} onSetEmail={setEmail}
        curPhone={curPhone} onSetPhone={setPhone}
        curPhone2={curPhone2} onSetPhone2={setPhone2}
        curAddress={curAddress} onSetAddress={setAddress}
        curRole={curRole} onSetRole={setRole}
        schoolList={schoolList} setSchoolList={setSchoolList}
        workList={workList} setWorkList={setWorkList}
        project={project} onProject={setProject}
        skills={skills} onSkills={setSkills}
        achievements={achievements} onAchievements={setAchievements}
        certifications={certifications} onCertifications={setCertifications}
        langs={langs} onLangs={setLangs}
        interests={interests} onInterests={setInterests}
      />
    </div> 
    </>
  );
}
