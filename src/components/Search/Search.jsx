import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { filterRoute } from "../../features/Routes/RoutesSlice";
import { useSelector, useDispatch } from "react-redux";
import SearchResults from "./SearchResults/SearchResults";
import "./Search.scss";
const { Option } = Select;

const Search = () => {
  const [form] = Form.useForm();
  const { filteredRoutes } = useSelector((state) => state.routes);
  const [firstTime, setFirstTime] = useState(true);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    setFirstTime(false);
    dispatch(filterRoute(values));
  };

  return (
    <div className="Search">
      <Form
        className="Search__Form"
        form={form}
        name="control-hooks"
        onFinish={onFinish}
      >
        <Form.Item name="name" label="Nombre">
          <Input />
        </Form.Item>
        <Form.Item name="type" label="Categoria">
          <Select placeholder="Selecciona una categoria" allowClear>
            <Option value="Històrica">Històrica</Option>
            <Option value="Turística">Turística</Option>
            <Option value="Patrimonial">Patrimonial</Option>
            <Option value="Literària">Literària</Option>
          </Select>
        </Form.Item>
        <Form.Item name="difficulty" label="Dificultad">
          <Select placeholder="Selecciona una dificultad" allowClear>
            <Option value="Baja">Baja</Option>
            <Option value="Media">Media</Option>
            <Option value="NaN">Difícil</Option>¡{" "}
          </Select>
        </Form.Item>
        <Form.Item name="transport" label="Medio de transporte">
          <Select placeholder="Selecciona una duracion" allowClear>
            <Option value="bicicleta">Bicicleta</Option>
            <Option value="peu">A pie</Option>
          </Select>
        </Form.Item>
        <Form.Item noStyle>
          <div className="Search__Form--submit">
            <Button type="primary" htmlType="submit">
              Buscar
            </Button>
          </div>
        </Form.Item>
      </Form>
      <div className="Result__Container">
        {firstTime ? null : filteredRoutes.length === 0 ? (
          <h2>Cargando...</h2>
        ) : (
          filteredRoutes.map((item) => <SearchResults item={item} />)
        )}
      </div>
    </div>
  );
};

export default Search;
