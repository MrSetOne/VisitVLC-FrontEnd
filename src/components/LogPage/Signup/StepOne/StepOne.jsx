import { Form, Input, Button } from "antd";
import "./StepOne.scss";

const StepOne = ({ data }) => {
  return (
    <div className="StepOne">
      <Form.Item
        label="Firsname"
        name="firstName"
        rules={[
          {
            required: true,
            message: "Please enter your firstname",
          },
        ]}
      >
        <Input placeholder="Your firstname" />
      </Form.Item>
      <Form.Item
        label="Lastname"
        name="lastName"
        rules={[
          {
            required: true,
            message: "Please enter your lastname",
          },
        ]}
      >
        <Input placeholder="Your Lastname" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "The input is not valid E-mail",
          },
        ]}
      >
        <Input placeholder="your@email.com" />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password",
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder="Your password" />
      </Form.Item>
      <Form.Item
        name="confirm"
        label="Repeat Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match")
              );
            },
          }),
        ]}
      >
        <Input.Password placeholder="Please confirm your password" />
      </Form.Item>
    </div>
  );
};

export default StepOne;
