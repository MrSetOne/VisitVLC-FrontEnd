import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { faUser, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import "./MyProfile.scss";
import { Button, Modal, Input, Form, Select, Segmented } from "antd";
import React, { useEffect, useState } from "react";
import {
  changeUserPassword,
  getCurrentUser,
  updateUserData,
} from "../../features/auth/authSlice";
import ProfileFavs from "./ProfileFavs/ProfileFavs";
import ProfileReviews from "./ProfileReviews/ProfileReviews";
const { Option } = Select;

const MyProfile = () => {
  const { user, favoriteRoutes, evaluations } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisiblePassword, setIsModalVisiblePassword] = useState(false);
  const [segment, setSegment] = useState("fav");

  useEffect(() => {
    dispatch(getCurrentUser());
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = async (values) => {
    await dispatch(updateUserData(values));
    await dispatch(getCurrentUser());
    setIsModalVisible(false);
  };

  const showModal1 = () => {
    setIsModalVisiblePassword(true);
  };

  const handleCancel1 = () => {
    setIsModalVisiblePassword(false);
  };

  const onFinish1 = (values) => {
    dispatch(changeUserPassword(values));
    setIsModalVisiblePassword(false);
  };

  return (
    <section className="MyProfile">
      <div className="MyProfile__header">
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div className="MyProfile__Btns">
        <Button type="primary" onClick={showModal}>
          Editar Perfil
        </Button>
        <Button type="primary" onClick={showModal1}>
          Cambiar Contraseña
        </Button>
      </div>
      <div className="MyProfile__Interactions">
        <Segmented
          value={segment}
          onChange={setSegment}
          options={[
            {
              label: (
                <div className="Segmented__option">
                  <FontAwesomeIcon icon={faHeart} />
                  <p>Rutas Favoritas</p>
                </div>
              ),
              value: "fav",
            },
            {
              label: (
                <div className="Segmented__option">
                  <FontAwesomeIcon icon={faStar} />
                  <p>Mis Valoraciones</p>
                </div>
              ),
              value: "review",
            },
          ]}
        />
        <div className="MyProfile__Interactions--content">
          {segment === "fav"
            ? favoriteRoutes.map((route) => <ProfileFavs route={route} />)
            : evaluations.map((review) => <ProfileReviews review={review} />)}
        </div>
      </div>
      <Modal
        centered
        title="Cambia tu contraseña"
        visible={isModalVisiblePassword}
        footer={[]}
        onCancel={handleCancel1}
      >
        <Form onFinish={onFinish1}>
          <Form.Item
            name="password"
            label="Nueva contraseña"
            rules={[
              {
                required: true,
                message: "Por favor introduze nueva contraseña",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="Confirma tu contraseña"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Por favor confirma tu contraseña",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("Las dos contraseñas no coniciden")
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Cambia tu contraseña
          </Button>
        </Form>
      </Modal>
      <Modal
        centered
        title="Editar tu información"
        visible={isModalVisible}
        footer={[]}
        onCancel={handleCancel}
      >
        <Form onFinish={onFinish}>
          <Form.Item label="Nombre" name="firstName">
            <Input placeholder={user.firstName} defaultValue={user.firstName} />
          </Form.Item>
          <Form.Item label="Apellido" name="lastName">
            <Input placeholder={user.lastName} defaultValue={user.lastName} />
          </Form.Item>
          <Form.Item label="Género" name="gender">
            <Select
              style={{
                width: "100%",
              }}
              defaultValue={user.gender ? user.gender : null}
            >
              <Option value="Hombre">Hombre</Option>
              <Option value="Mujer">Mujer</Option>
              <Option value="otro">Prefiero no decir</Option>
            </Select>
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Modificar tu información
          </Button>
        </Form>
      </Modal>
    </section>
  );
};

export default MyProfile;
