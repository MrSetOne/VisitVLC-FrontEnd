import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightLong,
  faArrowLeftLong,
  faRoute,
  faCircleChevronDown,
  faStar,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./MapFooter.scss";
import RouteInfo from "../RouteInfo/RouteInfo";
import { motion } from "framer-motion";

const MapFooter = ({
  data,
  setVisibleDrawer,
  visibleDrawer,
  visibleFooter,
  setVisibleFooter,
  setCurrent,
  current,
}) => {
  return (
    <motion.div
      className="mapFooter"
      // animate={{
      //   y: visibleFooter ? 30 : 180,
      // }}
    >
      <FontAwesomeIcon
        className="footer__back"
        icon={faChevronDown}
        onClick={() => setVisibleFooter(false)}
      />
      <div>
        <button className="footer-btns">
          <FontAwesomeIcon icon={faRoute} />
        </button>
        <button className="footer-btns">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            onClick={() => setCurrent(current - 1)}
          />
        </button>
        <button className="center-btn">
          <FontAwesomeIcon icon={faCircleChevronDown} />
        </button>
        <button className="footer-btns">
          <div className="svg-text">
            <FontAwesomeIcon
              icon={faArrowRightLong}
              onClick={() => setCurrent(current + 1)}
            />
          </div>
        </button>
        <button className="footer-btns">
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </motion.div>
  );
};

export default MapFooter;
