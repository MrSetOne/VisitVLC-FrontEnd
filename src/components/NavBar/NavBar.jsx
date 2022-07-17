import React from "react";
import { useSelector } from "react-redux";
import brand from "../../assets/visitVLCiconOrange.svg";
import { Menu, Dropdown, Space } from "antd";
import "./NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCrown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const { user } = useSelector((state) => state.auth);

  const menu = (
    <Menu
      items={[
        {
          label: (
            <div className="Dropdown__Item">
              <FontAwesomeIcon icon={faUser} />
              <p>Your Profile</p>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div className="Dropdown__Item">
              <FontAwesomeIcon icon={faCrown} />
              <p>Favorite Routes</p>
            </div>
          ),
          key: "1",
        },
        {
          label: (
            <div className="Dropdown__Item">
              <FontAwesomeIcon icon={faCircleXmark} />
              <p>Logout</p>
            </div>
          ),
          danger: true,
          key: "2",
        },
      ]}
    />
  );

  return (
    <nav className="NavBar">
      <img src={brand} alt="VisitVLC" />
      <Dropdown
        overlay={menu}
        trigger={["click"]}
        placement="bottomRight"
        arrow
      >
        <h2>{user.firstName}</h2>
      </Dropdown>
    </nav>
  );
};

export default NavBar;
