import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import brand from "../../assets/visitVLCiconOrange.svg";
import { Menu, Dropdown, notification, Popconfirm } from "antd";
import "./NavBar.scss";
import { logOut, resetNotifications } from "../../features/auth/authSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const {
    user,
    isLoading,
    isSucces,
    notification: feedback,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const goTo = (dest) => {
    setVisibleDropDown(false);
    navigate(dest);
  };

  useEffect(() => {
    if (isSucces) {
      notification.success({
        message: "¡Bienvenid@!",
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
            <div className="Dropdown__Item" onClick={() => goTo("/profile")}>
              <FontAwesomeIcon icon={faUser} />
              <p>Mi Perfil</p>
            </div>
          ),
          key: "0",
        },
        {
          label: (
            <Popconfirm
              placement="leftTop"
              title="¿Estás seguro de salir?"
              visible={showPopConfirm}
              onConfirm={() => goLogOut()}
              onCancel={() => {
                setShowPopConfirm(false);
                setVisibleDropDown(false);
              }}
              okText="Si"
              cancelText="No"
              okButtonProps={{ loading: isLoading }}
            >
              <div
                className="Dropdown__Item"
                onClick={() => setShowPopConfirm(!showPopConfirm)}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
                <p>Cerrar Sesión</p>
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
      <img src={brand} alt="VisitVLC" onClick={() => goTo("/")} />
      <Dropdown
        onVisibleChange={handleVisibleChange}
        visible={visibleDropDown}
        overlay={menu}
        trigger={["click"]}
        placement="bottomRight"
        arrow
      >
        <h2 className={visibleDropDown ? "h2--active" : null}>
          {user.firstName}
        </h2>
      </Dropdown>
    </nav>
  );
};

export default NavBar;
