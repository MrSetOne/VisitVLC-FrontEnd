import { Button, Form, Input, Select } from 'antd';
import React from 'react';
import { filterRoute } from '../../features/Routes/RoutesSlice';
import { useSelector, useDispatch } from "react-redux";
import SearchResults from './SearchResults/SearchResults';
const { Option } = Select;


const Search = () => {
  const [form] = Form.useForm();
  const { filteredRoutes } = useSelector((state) => state.routes);
  // console.log(filteredRoutes)
  const dispatch = useDispatch()

  const onFinish = (values) => {
    dispatch(filterRoute(values))
  };

  return (
    <div className="Search">
    <Form form={form} name="control-hooks" onFinish={onFinish}>

      <Form.Item
        name="note"
        label="Note"
      >
        <Input />
      </Form.Item>
      
      <Form.Item
        name="type"
        label="Type"
      >
        <Select
          placeholder="Select a option and change input text above"
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
      >
        <Select
          placeholder="Select a option and change input text above"
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
      >
        <Select
          placeholder="Select a option and change input text above"
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
      
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Buscar
        </Button>
      </Form.Item>
    </Form>
    {filteredRoutes.length === 0 ? <h2>No hay rutas</h2> : filteredRoutes.map(item => <SearchResults item={item}/>)}
    </div>
  );
};

export default Search;