import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import "./Login.scss";

const Login = ({ setNeedsignup }) => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

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
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
            <Button
              htmlType="submit"
              className="login-form-button"
              onClick={() => setNeedsignup(true)}
            >
              Sign up
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
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
