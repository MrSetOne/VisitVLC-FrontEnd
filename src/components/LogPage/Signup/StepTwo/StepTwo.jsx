import React from "react";
import { Form, Input, Select, Switch, DatePicker } from "antd";
import "./StepTwo.scss";
const { Option } = Select;

const StepTwo = () => {
  return (
    <div className="StepTwo">
      <h2>For a better experience</h2>
      <Form.Item label="Do you have any disability?">
        <div>
          <Switch checkedChildren="Yes" unCheckedChildren="No" />
        </div>
      </Form.Item>
      <Form.Item label="Gender">
        <Select defaultValue="init" placeholder>
          <Option value="init" disabled>
            Select a Gendre
          </Option>
          <Option value="jack">Male</Option>
          <Option value="jack">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item label="Date of birth">
        <DatePicker />
      </Form.Item>
    </div>
  );
};

export default StepTwo;
