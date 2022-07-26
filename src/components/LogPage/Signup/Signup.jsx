import { Form, Button, Input } from "antd";
import "./Signup.scss";
import { resetNotifications, signUp } from "../../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Signup = ({ setNeedsignup }) => {
  const {
    notification: feedback,
    isLoading,
    isError,
    isSucces,
  } = useSelector((state) => state.auth);

  const dataInit = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm: "",
  };

  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    await dispatch(signUp({ ...values }));
  };

  useEffect(() => {
    if (isSucces) {
      form.resetFields();
      setTimeout(() => {
        console.log("Voy a petar");
        dispatch(resetNotifications());
        setNeedsignup(false);
      }, 1000);
    }
  }, [feedback]);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="Signup">
      <Form
        className="Signup__Form"
        requiredMark={false}
        onFinish={onFinish}
        form={form}
        initialValues={{
          remember: false,
        }}
      >
        <Form.Item
          label="Nombre"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Introduce tu nombre",
            },
          ]}
        >
          <Input placeholder="Tu nombre" />
        </Form.Item>
        <Form.Item
          label="Apellido"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Introduce tu apellido",
            },
          ]}
        >
          <Input placeholder="Tu apellido" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Introduce un email válido",
            },
          ]}
        >
          <Input placeholder="tu@email.com" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: "Introduce tu contraseña",
            },
          ]}
          hasFeedback
        >
          <Input.Password placeholder="Tu contraseña" />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirma tu contraseña"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Confirma tu contraseña",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("Las dos contraseñas tienen que ser iguales")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirma tu contraseña" />
        </Form.Item>

        <Form.Item noStyle>
          <nav>
            <Button onClick={() => setNeedsignup(false)}>Iniciar sesión</Button>
            <Button htmlType="submit" type="primary" loading={isLoading}>
              Crear usuario
            </Button>
          </nav>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
