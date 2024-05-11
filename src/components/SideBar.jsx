import Button from "./button";
import { useState } from "react";

export function SideBar({
  contentActive,
  setContentActive,
  customizeActive,
  setCustomizeActive,
}) {
  // sets which state is true, the UI will render based on which is true
  function handleContentShow() {
    setContentActive(true);
    setCustomizeActive(false);
    console.log("Show Form Fields");
  }
  function handleCustomize() {
    setContentActive(false);
    setCustomizeActive(true);
    console.log(
      "ContentActive ? and CustomizeActive?",
      contentActive,
      customizeActive
    );
    console.log("Show Customize Div");
  }
  return (
    <div className="sideBar">
      <Button
        className={`sideBar-btn ${contentActive ? "active-btn" : ""}`}
        icon="description"
        buttonFunction={handleContentShow}
      >
        <p>Content</p>
      </Button>

      <Button
        className={`sideBar-btn ${customizeActive ? "active-btn" : ""}`}
        icon="design_services"
        buttonFunction={handleCustomize}
      >
        <p>Customize</p>
      </Button>
    </div>
  );
}
