import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { logIn } from "../../../features/auth/authSlice";
import { Button, Form, Input, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./Login.scss";

const Login = ({ setNeedsignup }) => {
  const {
    notification: feedback,
    isLoading,
    isSucces,
    isError,
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(logIn(values));
  };

  return (
    <div className="Login">
      <h1>Iniciar sesión</h1>
      <Form
        name="normal_login"
        className="Login__form"
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Introduce tu email",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Tu email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Introduce tu contraseña",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Tu contraseña"
          />
        </Form.Item>
        <Form.Item noStyle={true}>
          <div className="Login__form--btns">
            <Button onClick={() => setNeedsignup(true)}>Registrarse</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={isLoading}
            >
              Iniciar Sesión
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
