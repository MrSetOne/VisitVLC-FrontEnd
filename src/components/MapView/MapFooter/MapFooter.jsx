import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { favoriteRoute } from '../../../features/Routes/RoutesSlice'
import {
  faCircleChevronDown,
  faStar,
  faChevronDown,
  faHandPointLeft,
  faCaretLeft,
  faCaretRight,
  faCircleInfo,
  faHeartCirclePlus,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./MapFooter.scss";
import { motion } from "framer-motion";
import { Button } from "antd";
import ModalSiteDetail from "../ModalSiteDetail/ModalSiteDetail";
import { useSelector, useDispatch, useEffect } from "react-redux";

const MapFooter = ({ setVisibleFooter, setCurrent, current, routeLength, id }) => {
  const [visibleModalDetail, setVisibleModalDetail] = useState(false);

  const { routeDetail } = useSelector((state) => state.routes);
  const { addToFavourite } = useSelector((state) => state.routes);

  const dispatch = useDispatch()

  return (
    <>
      <motion.div className="mapFooter">
        <FontAwesomeIcon
          className="footer__back"
          icon={faChevronDown}
          onClick={() => setVisibleFooter(false)}
        />
        <div className="footer__Menu">
          <Button
            className="footer-btns"
            type="primary"
            shape="circle"
            size="large"
          >
            <FontAwesomeIcon icon={faHandPointLeft} />
            {/* ESTE BOTON TE TIENE QUE LLEVAR A LA VISTA DE ROUTE DETAIL */}
          </Button>
          <Button
            className="footer-btns"
            type="primary"
            shape="circle"
            size="large"
            disabled={current === 0}
          >
            <FontAwesomeIcon
              icon={faCaretLeft}
              onClick={current === 0 ? null : () => setCurrent(current - 1)}
            />
          </Button>
          <motion.button
            className="center-btn"
            whileTap={{ scale: 0.9 }}
            onClick={() => setVisibleModalDetail(true)}
          >
            <FontAwesomeIcon icon={faCircleInfo} />
          </motion.button>
          <Button
            type="primary"
            shape="circle"
            size="large"
            className="footer-btns"
          >
            <div className="svg-text">
              <FontAwesomeIcon
                icon={
                  routeDetail.poi.length === current + 1
                    ? faCircleCheck
                    : faCaretRight
                }
                onClick={
                  routeDetail.poi.length === current + 1
                    ? () => console.log("Aqui lanzamos formulario de opinion")
                    : () => setCurrent(current + 1)
                }
              />
            </div>
          </Button>
          <Button
            type="primary"
            shape="circle"
            size="large"
            className="footer-btns"
            onClick={() =>
              console.log(
                "Aqui lanzamos una req para añadir a favoritos o quitarla"
              )
            }
          >
            <FontAwesomeIcon icon={faHeartCirclePlus} onClick={() => dispatch(favoriteRoute(id)) }/>
          </Button>
        </div>
      </motion.div>
      <ModalSiteDetail
        visibleModalDetail={visibleModalDetail}
        setVisibleModalDetail={setVisibleModalDetail}
        place={routeDetail.poi[current]}
      />
    </>
  );
};

export default MapFooter;
