export default function Button({ icon, children, className, buttonFunction }) {
  //   const saveCancel = className;
  return className === "save-cancel" ? (
    <div className={className}>
      <button className="save-cancel-btn cancel">cancel</button>
      <button className="save-cancel-btn save-btn">save</button>
    </div>
  ) : (
    <button className={className} onClick={buttonFunction}>
      {icon ? <span className="material-symbols-outlined">{icon}</span> : ""}
      {children}
    </button>
  );
}
