import { Modal, Form, Radio, Space } from "antd";
import React, { useState } from "react";

const AIForm = ({ modalAIVisible, setModalAIVisible }) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  const questions = [
    <Form.Item label="¿Que edad tienes?" name="age">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"0-18"}>De 0 a 18 años</Radio>
          <Radio value={"18-35"}>De 18 a 35 años</Radio>
          <Radio value={"35-45"}>De 35 a 45 años</Radio>
          <Radio value={"+45"}>Mas de 45 años</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item label="¿Cual es tu genero?" name="gender">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"male"}>Hombre</Radio>
          <Radio value={"female"}>Mujer</Radio>
          <Radio value={"other"}>Prefiero no decirlo</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item label="¿Como vas a hacer la ruta?" name="acompañamiento">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"alone"}>Solo</Radio>
          <Radio value={"couple"}>En pareja</Radio>
          <Radio value={"family"}>En familia</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item label="¿Cuanto preferirias que durase?" name="duration">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"1-2"}>Entre 1 y 2 horas</Radio>
          <Radio value={"3-4"}>Entre 3 y 4 horas</Radio>
          <Radio value={"5-6"}>Entre 5 y 6 horas</Radio>
          <Radio value={"7-8"}>Entre 7 y 8 horas</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item label="¿Cuanto estarias dispuesto a gastar?" name="cost">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"none"}>Nada</Radio>
          <Radio value={"1-50"}>Entre 1€ y 50€</Radio>
          <Radio value={"+50"}>Mas de 50€</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item label="¿Que dificultad prefieres?" name="difficult">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"hard"}>Alta</Radio>
          <Radio value={"easy"}>Baja</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item label="¿Como prefieres hacer la ruta?" name="vehicle">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"bycicle"}>En bicicleta</Radio>
          <Radio value={"walking"}>A pie</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item label="¿Que tipo de ruta prefieres?" name="type">
      <Radio.Group onChange={onChange} value={value}>
        <Space direction="vertical">
          <Radio value={"historical"}>Historica</Radio>
          <Radio value={"tour"}>Turistica</Radio>
          <Radio value={"literary"}>Literaria</Radio>
          <Radio value={"heritage"}>Patrimonio</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
  ];

  const handleOk = () => {
    setModalAIVisible(false);
  };

  const handleCancel = () => {
    setModalAIVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      title="Basic Modal"
      visible={modalAIVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form
        className="Signup__Form"
        requiredMark={false}
        onFinish={onFinish}
        initialValues={{
          remember: false,
        }}
      >
        <div>{questions[1]}</div>
      </Form>
    </Modal>
  );
};

export default AIForm;
