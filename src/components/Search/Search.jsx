import { Button, Form, Input, Select } from 'antd';
import React from 'react';
const { Option } = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const App = () => {
  const [form] = Form.useForm();

//   const onGenderChange = (value) => {
//     switch (value) {
//       case 'male':
//         form.setFieldsValue({
//           note: 'Hi, man!',
//         });
//         return;

//       case 'female':
//         form.setFieldsValue({
//           note: 'Hi, lady!',
//         });
//         return;

//       case 'other':
//         form.setFieldsValue({
//           note: 'Hi there!',
//         });
//     }
//   };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

//   const onFill = () => {
//     form.setFieldsValue({
//       note: 'Hello world!',
//       gender: 'male',
//     });
//   };

  return (
    <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      {/* <Form.Item
        name="note"
        label="Note"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item> */}
      
      <Form.Item
        name="type"
        label="Type"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
        //   onChange={onGenderChange}
          allowClear
        >
          <Option value="Històrica">Històrica</Option>
          <Option value="Turística">Turística</Option>
          <Option value="Patrimonial">Patrimonial</Option>
          <Option value="Literària">Literària</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="difficulty"
        label="Difficulty"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
        //   onChange={onGenderChange}
          allowClear
        >
          <Option value="Baja">Baja</Option>
          <Option value="Media">Media</Option>
          <Option value="Difícil">Difícil</Option>
¡        </Select>
      </Form.Item>

      <Form.Item
        name="duration"
        label="Duration"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Select
          placeholder="Select a option and change input text above"
        //   onChange={onGenderChange}
          allowClear
        >
          <Option value="30 min.">30 min.</Option>
          <Option value="60 min">60 min.</Option>
          <Option value="105 min.">105 min.</Option>
          <Option value="120 min.">120 min.</Option>
          <Option value="180 min.">180 min.</Option>
          <Option value="oth240 min.er">240 min.</Option>
          <Option value="360 min.">360 min.</Option>
          <Option value="420 min.">420 min.</Option>

¡        </Select>
      </Form.Item>
      
      {/* <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item
              name="customizeGender"
              label="Customize Gender"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item> */}
      
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
        {/* <Button type="link" htmlType="button" onClick={onFill}>
          Fill form
        </Button> */}
      </Form.Item>
    </Form>
  );
};

export default App;