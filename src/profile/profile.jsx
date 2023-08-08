// import * as Context from "../context";
import user from "./avatar.png";
// import style from "./profile.module.scss";
import "./profile.scss";
import React, { useState, useEffect, useRef } from "react";
import * as Context from "../context";

function Dropdown() {
  const { theme } = Context.Theme.useTheme();
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className={`profile ${theme ? "dark" : ""}`}>
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={user}></img>
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <h3>R. Abdulloh</h3>
          <ul>
            {/* <DropdownItem text={"My Profile"} /> */}
            {/* <DropdownItem text={"Edit Profile"}><Link to={"/edit-profile"} /></DropdownItem>
            <DropdownItem text={"Logout"}/> */}
            {/* <li><Link to={"/edit-profile"}>Edit Profile</Link></li> */}
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// function DropdownItem(props) {
//   return (
//     <li className="dropdownItem">
//       <a>{props.text} </a>
//     </li>
//   );
// }

export default Dropdown;
