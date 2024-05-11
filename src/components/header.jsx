import { useState } from "react";

export default function Header({ curName, curEmail, curPhone, curPhone2, curAddress, curRole }) {
  return (
    <div className="personal-info-holder">
      <h1 className="text-uppercase">{curName}</h1>
      <h5 className="job-role text-capitalize">{curRole}</h5>
      <div className="details">
        {curEmail !== "" ? (
          <PersonalDetail icon="email" detail={curEmail} />
        ) : (
          ""
        )}

        {curPhone !== "" ? (
          <PersonalDetail icon="phone" detail={curPhone} />
        ) : (
          ""
        )}

        {curPhone2 !== "" ? (
          <PersonalDetail icon="forum" detail={curPhone2} />
        ) : (
          ""
        )}

        {curAddress !== "" ? (
          <PersonalDetail icon="location_on" detail={curAddress} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

function PersonalDetail({ detail, icon }) {
  return (
    <div className="personal-detail">
      <span className="material-icons detail-icon">{icon}</span> {detail}
    </div>
  );
}
