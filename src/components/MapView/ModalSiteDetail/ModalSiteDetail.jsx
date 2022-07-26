import { Button, Modal } from "antd";
import React from "react";
import "./ModalSiteDetail.scss";
import { useSelector } from "react-redux";

const ModalSiteDetail = ({
  setVisibleModalDetail,
  visibleModalDetail,
  place,
}) => {
  const { routeDetail } = useSelector((state) => state.routes);

  const handleCancel = () => {
    setVisibleModalDetail(false);
  };

  return (
    <>
      <Modal
        visible={visibleModalDetail}
        title={routeDetail.name}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Volver
          </Button>,
        ]}
      >
        <div className="modal-container">
          <h2>{place.name}</h2>
          <p>{place.description_es !== "NaN" ? place.description_es : ""}</p>
        </div>
      </Modal>
    </>
  );
};

export default ModalSiteDetail;
