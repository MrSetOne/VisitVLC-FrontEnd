import { Form, Input, Button } from "antd";
import "./StepOne.scss";

const StepOne = () => {
  return (
    <div className="StepOne">
      <Form.Item
        label="Firsname"
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Lastname">
        <Input />
      </Form.Item>
      <Form.Item label="email">
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Tu contraseña" />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Repeat Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Confirma tu contraseña" />
      </Form.Item>
    </div>
  );
};

export default StepOne;
