import { useState } from "react";
import { schools } from "../App";
import { workExperienceList } from "../App";
import { Forms } from "./Forms";

function Tab({
  description,
  icon,
  formType,
  activeTab,
  onActiveTab,
  itemList,
  onItemList,
}) {
  // active tab is nothing
  const [showForm, setShowForm] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  function handleClick(event) {
    const arrow = event.currentTarget.querySelector(".expand");
    const allArrows = document.querySelectorAll(".expand");

    allArrows.forEach((arrow) => {
      arrow.classList.remove("rotate");
    });
    // make active tab state == ""
    // setShowAdd to false
    if (activeTab === formType) {
      onActiveTab("");
      setShowAdd(false);
      setShowForm(false);
    } else {
      onActiveTab(formType);
      setShowAdd(true);
      arrow.classList.add("rotate");
    }
  }

  function handleAdd() {
    setShowForm(true);
    setShowAdd(false);
  }

  return (
    <div>
      <div className="tab" onClick={handleClick}>
        <span className="material-icons">{icon}</span>
        <p>{description}</p>
        <span className="material-symbols-outlined expand">expand_more</span>
      </div>

      {showAdd && activeTab === formType ? (
        <AddItem
          description={description}
          handleAdd={handleAdd}
          itemList={itemList} 
          onItemList={onItemList}
        />
      ) : (
        ""
      )}

      {showForm && (
        <Forms
          formType={formType}
          itemList={itemList}
          onItemList={onItemList}
          setShowForm={setShowForm}
          setShowAdd={setShowAdd}
        />
      )}
    </div>
  );
}

function AddItem({ description, handleAdd, itemList, onItemList }) {
  return (
    <div className="add-item">
      {itemList.map((item, index) => (
        <ListItem
          title={item.name || item.School || item.Company || item.Title || item.Skills || item.Achievement || item.Certification || item.Language || item.Interests }
          key={item.name || item.School || item.Company || item.Title || item.Skills || index || index || index }
          index={index}
          itemList={itemList}
          onItemList={onItemList}
        />
      ))}

      <div className="add-button-container">
        <button className="add-button" onClick={handleAdd}>
          + {description}
        </button>
      </div>
    </div>
  );
}
function ListItem({ title, index, itemList, onItemList }) {
  function handleDelete() {
    onItemList((prevList) => {
      return [...prevList.slice(0, index), ...prevList.slice(index + 1)];
    });
  }
  function handleHide() {
    const updatedArray = [...itemList];
    updatedArray[index].visible =
      updatedArray[index].visible === false ? true : false;
    onItemList(updatedArray);
  }
  return (
    <div className="list-item">
      <p className="list-item-title">{title}</p>
      <div className="view-delete-btn">
        <button>
          <span className="material-symbols-outlined" onClick={handleHide}>
            {itemList[index].visible ? "visibility" : "visibility_off"}
          </span>
        </button>
        <button>
          <span className="material-symbols-outlined" onClick={handleDelete}>
            remove
          </span>
        </button>
      </div>
    </div>
  );
}

export { Tab, Forms };
