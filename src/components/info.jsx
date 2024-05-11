import { useState } from "react";

export default function ListInfo({ itemList, heading }) {
  return (
    <div className="info-container">
      <div className="header-container">
        { itemList!="" && <h4>{heading}</h4>}
      </div>
      <div className={itemList.Skills !=false ? "grid-info-outer" : "grid-info-outer-normal"}>
        <InfoDisplay itemList={itemList} />
      </div>
    </div>
  );
}

function InfoDisplay({ itemList }) {
  return itemList.map(
    (item,index) =>
      item.visible && (
        <ListItem item={item} key={item.name || item.School || item.Company || item.Title || item.Skills || index } />
      )
  );
}

function ListItem({ item }) {
  return (
    <>
    { item.School && <div className="grid-info">
      <p className="left-align">{`${item["Start date"]} - ${item["End date"]}`} </p>
      <p className="right-align">
        <b>{item.School}</b>
      </p>
      <p className="left-align">{item.Location}</p>
      <p className="right-align">{item.Degree}</p>
      {item.Description && (
        <>
          <span></span>
          <p className="job-description right-align">{item.Description}</p>
        </>
      )}
    </div> }
    { item.Company && <div className="grid-info">
      <p className="left-align">{`${item["Start date"]} - ${item["End date"]}`} </p>
      <p className="right-align">
        <b>{item.Company}</b>
      </p>
      <p className="left-align">{item.Location}</p>
      <p className="right-align">{item["Position Title"]}</p>
      {item.Description && (
        <>
          <span></span>
          <p className="job-description right-align">{item.Description}</p>
        </>
      )}
    </div> }
    { item.Title && <div className="grid-info2">
      <p className="project-title left-align">
        <b className="text-center">{item.Title}</b>
      </p>
      <p className="text-justify right-align">{item.Description}</p>
    </div>}
    { item.Skills  && 
      <div className="grid-info-list-items">
        <li className="text-Uppercase fw-bold">{item.Skills}</li>
      </div>
    }
    { item.Achievement && 
      <div className="grid-info-list-items2">
        <p className="p-0">{item.Achievement}</p>
      </div>
    }
    { item.Certification  && 
      <div className="grid-info-list-items2">
        <p className="p-0">{item.Certification}</p>
      </div>
    }
    { item.Language && 
      <div className="grid-info-list-items">
        <li className="text-Uppercase fw-bold">{item.Language}</li>
      </div>
    }
    { item.Interests && 
      <div className="grid-info-list-items">
        <li className="text-Uppercase fw-bold">{item.Interests}</li>
      </div>
    }
    </>
  );
}
