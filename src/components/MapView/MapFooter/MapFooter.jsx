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
}) => {
  const [current, setCurrent] = useState(0);

  return (
    <motion.div
      className="mapFooter"
      animate={{ y: visibleFooter ? -150 : 0, zIndex: 1001 }}
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
      <RouteInfo
        current={current}
        setCurrent={setCurrent}
        data={data}
        visibleDrawer={visibleDrawer}
        setVisibleDrawer={setVisibleDrawer}
      />
    </motion.div>
  );
};

export default MapFooter;
