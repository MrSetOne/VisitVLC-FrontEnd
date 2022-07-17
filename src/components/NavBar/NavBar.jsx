import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import brand from "../../assets/visitVLCiconOrange.svg";
import { Menu, Dropdown, notification, Popconfirm } from "antd";
import "./NavBar.scss";
import { logOut, resetNotifications } from "../../features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faCrown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const {
    user,
    isLoading,
    isSucces,
    notification: feedback,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [visibleDropDown, setVisibleDropDown] = useState(false);
  const [showPopConfirm, setShowPopConfirm] = useState(false);

  const handleVisibleChange = (flag) => {
    setVisibleDropDown(flag);
  };

  const goLogOut = async () => {
    await dispatch(logOut());
    setShowPopConfirm(false);
    setVisibleDropDown(false);
  };

  useEffect(() => {
    if (isSucces) {
      notification.success({
        message: "Wellcome",
        description: feedback,
        placement: "bottom",
      });
      setTimeout(() => {
        dispatch(resetNotifications());
      }, 2000);
    }
  }, [feedback]);

  const menu = (
    <Menu
      items={[
        {
          label: (
            <div
              className="Dropdown__Item"
              onClick={() => setVisibleDropDown(false)}
            >
              <FontAwesomeIcon icon={faUser} />
              <p>Your Profile</p>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <div
              className="Dropdown__Item"
              onClick={() => setVisibleDropDown(false)}
            >
              <FontAwesomeIcon icon={faCrown} />
              <p>Favorite Routes</p>
            </div>
          ),
          key: "1",
        },
        {
          label: (
            <Popconfirm
              placement="leftTop"
              title="Are you sure?"
              visible={showPopConfirm}
              onConfirm={() => goLogOut()}
              okText="Yes"
              cancelText="No"
              okButtonProps={{ loading: isLoading }}
            >
              <div
                className="Dropdown__Item"
                onClick={() => setShowPopConfirm(!showPopConfirm)}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
                <p>Logout</p>
              </div>
            </Popconfirm>
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
        onVisibleChange={handleVisibleChange}
        visible={visibleDropDown}
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
