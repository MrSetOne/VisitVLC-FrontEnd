import React from "react";
import { Form, Select, Switch, DatePicker } from "antd";
import "./StepTwo.scss";
const { Option } = Select;

const StepTwo = () => {
  return (
    <div className="StepTwo">
      <h2>For a better experience</h2>
      <Form.Item label="Do you have any disability?" name="disabled">
        <Switch checkedChildren="Yes" unCheckedChildren="No" />
      </Form.Item>
      <Form.Item label="Gender" name="gender">
        <Select placeholder>
          <Option value="init" disabled>
            Select a Gendre
          </Option>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Date of birth" name="dateOfBirth">
        <DatePicker />
      </Form.Item>
    </div>
  );
};

export default StepTwo;
