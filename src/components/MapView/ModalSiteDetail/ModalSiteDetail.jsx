import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import './ModalSiteDetail.scss'

const ModalSiteDetail = ({setVisibleModalDetail, visibleModalDetail , place}) => {
  
  const handleOk = () => {
    console.log('le has dado a ok')
  };

  const handleCancel = () => {
    setVisibleModalDetail(false);
  };

  return (
    <>
      <Modal
        visible={visibleModalDetail}
        title="Ruta 1"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Volver
          </Button>,
          <Button key="submit" type="primary"  onClick={handleOk}>
            Puntuar
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <div className='modal-container'>
          <h2>{place.name}</h2>
          <p>{place.description}</p>
        </div>

      </Modal>
    </>
  );
};

export default ModalSiteDetail;