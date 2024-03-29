import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import {
  Modal,
  Form,
  Radio,
  Space,
  Button,
  DatePicker,
  Select,
  Checkbox,
} from "antd";
import React, { useState } from "react";
import "./AIForm.scss";
import { useDispatch, useSelector } from "react-redux";
import { setAiOn } from "../../../../features/auth/authSlice";

const AIForm = ({ modalAIVisible, setModalAIVisible }) => {
  const [value, setValue] = useState("");
  const { isLoadingAI } = useSelector((state) => state.auth);

  const [step, setStep] = useState(0);

  const { Option } = Select;

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onChangeDate = (date, dateString) => {
    setValue({ ...value, age: dateString });
  };

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };

  const onChangeTime = (num, type) => {
    setValue({ ...value, [type]: num });
  };

  const dispatch = useDispatch();

  const questions = [
    <>
      <h2 style={{ fontSize: "2rem", color: "#ff6000" }}>
        Antes de continuar...
      </h2>
      <p>
        Para poderte recomendar una ruta necesitamos saber algunos datos más
        sobre ti. No estás obligado a contestar si no quieres, pero cuanta más
        información nos proporciones mejor te podremos aconsejar...
      </p>
    </>,
    <Form.Item noStyle name="age">
      <h3>¿Cuando naciste?</h3>
      <DatePicker
        picker="year"
        onChange={onChangeDate}
        disabledDate={disabledDate}
        placement="bottomRight"
      />
    </Form.Item>,
    <Form.Item noStyle name="gender">
      <h3>¿Cual es tu género?</h3>
      <Radio.Group
        onChange={onChange}
        name="gender"
        defaultValue={value.gender}
      >
        <Space direction="vertical">
          <Radio value={"hombre"}>Hombre</Radio>
          <Radio value={"mujer"}>Mujer</Radio>
          <Radio value={"otro"}>Prefiero no decirlo</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item noStyle name="acompañamiento">
      <h3>¿Como vas a hacer la ruta?</h3>
      <Radio.Group
        onChange={onChange}
        name="companions"
        defaultValue={value.companions}
      >
        <Space direction="vertical">
          <Radio value={"solo"}>Solo</Radio>
          <Radio value={"pareja"}>En pareja</Radio>
          <Radio value={"familia"}>En familia</Radio>
          <Radio value={"amigos"}>Con amigos</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item noStyle name="duration">
      <h3>¿Que duración prefieres?</h3>
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        <div>
          <p>Horas</p>
          <Select
            defaultValue={value.hours ? value.hours : "0"}
            onChange={(num) => onChangeTime(num, "hours")}
          >
            <Option value={0}>0</Option>
            <Option value={1}>1</Option>
            <Option value={2}>2</Option>
            <Option value={3}>3</Option>
            <Option value={4}>4</Option>
            <Option value={5}>5</Option>
            <Option value={6}>6</Option>
            <Option value={7}>7</Option>
          </Select>
        </div>
        <div>
          <p>Minutos</p>
          <Select
            defaultValue={value.mins ? value.mins : "00"}
            onChange={(num) => onChangeTime(num, "mins")}
          >
            <Option value={0}>00</Option>
            <Option value={15}>15</Option>
            <Option value={30}>30</Option>
            <Option value={45}>45</Option>
          </Select>
        </div>
      </div>
    </Form.Item>,
    <Form.Item name="price">
      <h3>¿Cuanto te quieres gastar?</h3>
      <Radio.Group onChange={onChange} name="price" defaultValue={value.price}>
        <Space direction="vertical">
          <Radio value={"Gratis"}>Nada</Radio>
          <Radio value={"1-50"}>Entre 1€ y 50€</Radio>
          <Radio value={"+50"}>Más de 50€</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item name="difficulty">
      <h3>¿Que dificultad prefieres?</h3>
      <Radio.Group
        onChange={onChange}
        name="difficulty"
        defaultValue={value.difficulty}
      >
        <Space direction="vertical">
          <Radio value={"alta"}>Alta</Radio>
          <Radio value={"baja"}>Baja</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item name="transport">
      <h3>¿Como prefieres hacer la ruta?</h3>
      <Radio.Group
        onChange={onChange}
        name="transport"
        defaultValue={value.transport}
      >
        <Space direction="vertical">
          <Radio value={"Bicicleta"}>En bicicleta</Radio>
          <Radio value={"A Pie"}>A pie</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <Form.Item name="route_type">
      <h3>¿Que tipo de ruta prefieres?</h3>
      <Radio.Group
        onChange={onChange}
        name="route_type"
        defaultValue={value.route_type}
      >
        <Space direction="vertical">
          <Radio value={"Historica"}>Historica</Radio>
          <Radio value={"Turistica"}>Turística</Radio>
          <Radio value={"Literaria"}>Literaria</Radio>
          <Radio value={"Patrimonio"}>Patrimonio</Radio>
        </Space>
      </Radio.Group>
    </Form.Item>,
    <div>
      <h2>¡Ya casi has acabado!</h2>
      <p>¿Desea confirmar el envio de los datos?</p>
      <Button type="primary" loading={isLoadingAI} onClick={() => onFinish()}>
        Enviar
      </Button>
    </div>,
  ];

  const handleCancel = () => {
    setModalAIVisible(false);
  };

  const onFinish = async () => {
    const result = { ...value, duration: value.hours * 60 + value.mins };
    await dispatch(setAiOn(result));
    setModalAIVisible(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal
      centered
      title="Cuentanos..."
      visible={modalAIVisible}
      onCancel={handleCancel}
      footer={[
        <Button key="back" onClick={handleCancel}>
          Volver
        </Button>,
      ]}
    >
      <Form
        className="Signup__Form"
        requiredMark={false}
        onFinish={() => onFinish()}
        initialValues={{
          remember: false,
        }}
      >
        <div>
          <Button
            shape="circle"
            type="primary"
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
            onClick={() => setStep(step - 1)}
            disabled={step <= 1}
          />
          <div>{questions[step]}</div>
          <Button
            shape="circle"
            type="primary"
            icon={<FontAwesomeIcon icon={faChevronRight} />}
            onClick={() => setStep(step + 1)}
            disabled={step >= questions.length - 1}
          />
        </div>
      </Form>
    </Modal>
  );
};

export default AIForm;
