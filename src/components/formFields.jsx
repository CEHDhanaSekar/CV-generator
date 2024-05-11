import { useState } from "react";
import { Tab } from "./tabs";
import { Forms } from "./Forms";
import Button from "./button";
import { Achievements, Certifications, Interests, Langs, Projects, Skills, schools } from "../App";
import { workExperienceList } from "../App";

export default function FormFields({
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
  onSchoolList,
  workList,
  onWorkList,
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
  contentActive,
  setContentActive,
  customizeActive,
  setCustomizeActive,
}) {
  const [activeTab, setActiveTab] = useState("");
  const [activeButton, setActiveButton] = useState("Sans");
  // state for color input
  const [headerBgColor, setHeaderBgColor] = useState("#e1e8ff");
  const [textColor, setTextColor] = useState("#000");

  function handleHeaderColorChange(event) {
    const headerContainer = document.querySelector(".personal-info-holder");
    const newHeaderColor = event.target.value;
    setHeaderBgColor(newHeaderColor);
    const luminance = calculateLuminance(newHeaderColor);
    setTextColor(luminance > 0.5 ? "#000" : "#fff");
    headerContainer.style.backgroundColor = headerBgColor;
    headerContainer.style.color = textColor;
  }

  function calculateLuminance(color) {
    const hex = color.slice(1);
    const rgb = parseInt(hex, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;
    return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255; // calculate luminance
  }

  function handleClearResume() {
    onCurName("");
    onSetEmail("");
    onSetPhone("");
    onSetPhone2("");
    onSetAddress("");
    onSchoolList([]);
    onWorkList([]);
    onProject([]);
    onSetRole("");
    onSkills([]);
    onAchievements([]);
    onCertifications([]);
    onLangs([]);
    onInterests([])
  }

  function handleLoadExample() {
    onCurName("Brendan Eich R");
    onSetEmail("HakonWiumLie@nextgen.io");
    onSetPhone("298-536-0990");
    onSetPhone2("276-542-0095");
    onSetAddress("Developers st, NY");
    onSetRole("SoftWare Developer");
    onSchoolList(schools);
    onWorkList(workExperienceList);
    onProject(Projects)
    onSkills(Skills)
    onAchievements(Achievements)
    onCertifications(Certifications)
    onLangs(Langs)
    onInterests(Interests)
    setHeaderBgColor("#e1e8ff");
    setTextColor("#000");
    const headerContainer = document.querySelector(".personal-info-holder");
    headerContainer.style.backgroundColor = headerBgColor;
    headerContainer.style.color = textColor;
  }
  function handleSansClick() {
    const cvSide = document.querySelector(".cvSide");
    cvSide.style.fontFamily = "Sans";
    setActiveButton("Sans");
  }
  function handleSerifClick() {
    const cvSide = document.querySelector(".cvSide");
    cvSide.style.fontFamily = "Serif";
    setActiveButton("Serif");
  }
  function handleInterClick() {
    const cvSide = document.querySelector(".cvSide");
    cvSide.style.fontFamily = "Inter";
    setActiveButton("Inter");
  }
  return (
    <div className="form-fields">
      <div className="form-edits">
        <Button
          className="form-edits-btn clear-resume"
          buttonFunction={handleClearResume}
        >
          <p>Clear Resume</p>
        </Button>
        <Button
          className="form-edits-btn load-example"
          buttonFunction={handleLoadExample}
        >
          <p>Load Example</p>
        </Button>
      </div>
      {/* THIS IS WHERE THE UI WILL RENDER DEPENDING ON CUSTOMIZE */}
      {customizeActive ? (
        <>
          <div className="customize-tabs">
            <p>Color</p>
            <span>
              <label>Accent Color</label>
              <input
                type="color"
                value={headerBgColor}
                onChange={handleHeaderColorChange}
              ></input>
            </span>
          </div>
          <div className="customize-tabs">
            <p>Fonts</p>
            <div className="font-btn-container">
              <button
                className={`font-btn sans-btn ${
                  activeButton === "Arial" ? "active" : ""
                }`}
                onClick={handleSansClick}
              >
                <span>Aa</span> Arial
              </button>
              <button
                className={`font-btn serif-btn ${
                  activeButton === "Times" ? "active" : ""
                }`}
                onClick={handleSerifClick}
              >
                <span>Aa</span> Times
              </button>
              <button
                className={`font-btn inter-btn ${
                  activeButton === "Inter" ? "active" : ""
                }`}
                onClick={handleInterClick}
              >
                <span>Aa</span> Inter
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <Forms
            formType="personal"
            formPersonal="form-personal"
            curName={curName}
            onCurName={onCurName}
            curEmail={curEmail}
            onSetEmail={onSetEmail}
            curPhone={curPhone}
            onSetPhone={onSetPhone}
            curPhone2={curPhone2}
            onSetPhone2={onSetPhone2}
            curAddress={curAddress}
            onSetAddress={onSetAddress}
            curRole={curRole}
            onSetRole={onSetRole}
          />
          <Tab
            description="Skills"
            icon="grade"
            formType="Skills"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={skills}
            onItemList={onSkills}
          />
          <Tab
            description="Education"
            icon="school"
            formType="education"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={schoolList}
            onItemList={onSchoolList}
          />
          <Tab
            description="Certifications"
            icon="workspace_premium"
            formType="Certifications"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={certifications}
            onItemList={onCertifications}
          />
          <Tab
            description="Experience"
            icon="work"
            formType="workExperience"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={workList}
            onItemList={onWorkList}
          />
          <Tab
            description="Projects"
            icon="badge"
            formType="projects"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={project}
            onItemList={onProject}
          />
          <Tab
            description="Achievements"
            icon="military_tech"
            formType="Achievements"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={achievements}
            onItemList={onAchievements}
          />
          <Tab
            description="Languages"
            icon="language"
            formType="Languages"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={langs}
            onItemList={onLangs}
          />
          <Tab
            description="Interests"
            icon="interests"
            formType="Interests"
            activeTab={activeTab}
            onActiveTab={setActiveTab}
            itemList={interests}
            onItemList={onInterests}
          />
        </>
      )}
    </div>
  );
}
