import { useState } from "react";
import { Tab } from "./tabs";
import { Forms } from "./Forms";
import FormFields from "./formFields";
import { schools } from "../App";
import { workExperienceList } from "../App";
import { SideBar } from "./SideBar";

export default function EditSide({
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
  return (
    <div className="appChild edit-side">
      <SideBar
        contentActive={contentActive}
        setContentActive={setContentActive}
        customizeActive={customizeActive}
        setCustomizeActive={setCustomizeActive}
      />
      <FormFields
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
        schoolList={schoolList}
        onSchoolList={onSchoolList}
        workList={workList}
        onWorkList={onWorkList}
        project={project}
        onProject={onProject}
        skills={skills}
        onSkills={onSkills}
        achievements={achievements}
        onAchievements={onAchievements}
        certifications={certifications}
        onCertifications={onCertifications}
        langs={langs}
        onLangs={onLangs}
        interests={interests}
        onInterests={onInterests}
        contentActive={contentActive}
        setContentActive={setContentActive}
        customizeActive={customizeActive}
        setCustomizeActive={setCustomizeActive}
      />
    </div>
  );
}
