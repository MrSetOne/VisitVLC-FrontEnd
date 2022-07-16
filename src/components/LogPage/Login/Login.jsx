import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { logIn } from "../../../features/auth/authSlice";
import { Button, Form, Input, notification } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { resetNotifications } from "../../../features/auth/authSlice";
import "./Login.scss";
import { useEffect } from "react";

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

  useEffect(() => {
    if (isSucces) {
      notification.success({
        message: "¡Ya casi estamos!",
        description: feedback,
        placement: "bottom",
      });
      setTimeout(() => {
        dispatch(resetNotifications());
      }, 2000);
    }
    if (isError) {
      notification.error({
        message: "Something has gone wrong...",
        description: feedback,
        placement: "bottom",
      });
      setTimeout(() => {
        dispatch(resetNotifications());
      }, 2000);
    }
  }, [feedback]);

  return (
    <div className="Login">
      <h1>Login</h1>
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
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item noStyle={true}>
          <div className="Login__form--btns">
            <Button onClick={() => setNeedsignup(true)}>Sign up</Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={isLoading}
            >
              Log in
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
