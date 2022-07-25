import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  favoriteRoute,
  favoriteRouteOut,
} from "../../../features/Routes/RoutesSlice";
import { createEvaluation } from "../../../features/Evaluation/evaluationSlice";
import {
  faChevronDown,
  faHandPointLeft,
  faCaretLeft,
  faCaretRight,
  faCircleInfo,
  faHeartCirclePlus,
  faHeartCircleMinus,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./MapFooter.scss";
import { motion } from "framer-motion";
import ModalSiteDetail from "../ModalSiteDetail/ModalSiteDetail";
import { useSelector, useDispatch } from "react-redux";
import { Button, Input, Rate, Modal, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { addToFav, removeToFav } from "../../../features/auth/authSlice";

const MapFooter = ({
  setVisibleFooter,
  setCurrent,
  current,
  routeLength,
  id,
}) => {
  const [visibleModalDetail, setVisibleModalDetail] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rating, setRating] = useState(0);
  const { routeDetail } = useSelector((state) => state.routes);
  const { favoriteRoutes } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { TextArea } = Input;
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const onFinish = async (values) => {
    await dispatch(createEvaluation({ ...values, score: rating, id }));
    navigate("/");
  };

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
            onClick={() => navigate(`/route/${id}`)}
          >
            <FontAwesomeIcon icon={faHandPointLeft} />
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
                    ? () => {
                        showModal();
                      }
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
            onClick={async () => {
              if (
                favoriteRoutes.some(
                  (objetive) => Number(objetive.route_id) === Number(id)
                )
              ) {
                await dispatch(favoriteRouteOut(id));
                dispatch(removeToFav(id));
              } else {
                await dispatch(favoriteRoute(id));
                dispatch(addToFav(routeDetail));
              }
            }}
          >
            <FontAwesomeIcon
              icon={
                favoriteRoutes.some(
                  (objetive) => Number(objetive.route_id) === Number(id)
                )
                  ? faHeartCircleMinus
                  : faHeartCirclePlus
              }
            />
          </Button>
        </div>
      </motion.div>
      <ModalSiteDetail
        visibleModalDetail={visibleModalDetail}
        setVisibleModalDetail={setVisibleModalDetail}
        place={routeDetail.poi[current]}
      />
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={onFinish}>
          <Form.Item name="comment">
            <TextArea
              placeholder="¿Qué te ha parecido la ruta?"
              name=""
              autoSize={{ minRows: 2, maxRows: 6 }}
            />
          </Form.Item>
          <Form.Item name="score">
            <Rate allowHalf onChange={setRating} defaultValue={0} />
            <br />
            <br />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Publicar
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default MapFooter;
