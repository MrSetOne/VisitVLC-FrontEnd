import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { faUser, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import "./MyProfile.scss";
import { Button, Modal, Input, Form, Select, Segmented } from 'antd';
import React, { useEffect, useState } from 'react';
import { changeUserPassword, getCurrentUser, updateUserData } from "../../features/auth/authSlice";
const { Option } = Select

const MyProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch()


  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    dispatch(getCurrentUser())
  }, [user])

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log(values)
    dispatch(updateUserData(values))
    setIsModalVisible(false)
  }



  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const onFinish1 = (values) => {
    dispatch(changeUserPassword(values))
    setIsModalVisible1(false)
  }


  return (
    <section className="MyProfile">
      <div>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <FontAwesomeIcon icon={faUser} />
      </div>

      {/* -----------------------cambiar informacion de user----------------------*/}

      <div>
        <Button type="primary" onClick={showModal}>
          Modificar tu información
        </Button>
        <Modal title="Editar tu información" visible={isModalVisible} footer={[]} onCancel={handleCancel}>
          <Form onFinish={onFinish} >
            <Form.Item label='Nombre' name='firstName'
                      rules={[
                        {
                          required: true,
                          message:'Por favor introduce tu nombre'
                        }
                      ]}>
              <Input placeholder={user.firstName} />
            </Form.Item>
            <Form.Item label="Apellido" name='lastName'
                      rules={[
                        {
                          required: true,
                          message:'Por favor introduce tu apellido'
                        }
                      ]}>
              <Input placeholder={user.lastName} />
            </Form.Item>
            <Form.Item label="Género" name='gender'
              rules={[
                {
                  required: true,
                  message:'Por favor selecciona tu genero'
                }
              ]}
              >
              <Select
                style={{
                  width: 120
                }}
              >
                <Option value="Hombre">Hombre</Option>
                <Option value="Mujer">Mujer</Option>
              </Select>
            </Form.Item>
            <Button type="primary" htmlType='submit'>
              Modificar tu información
            </Button>
          </Form>
        </Modal>
      </div>

      {/* -----------------------------cambiar contraseña-------------------------------- */}

      <div>
        <Button type="primary" onClick={showModal1}>
          Cambia tu contraseña
        </Button>
        <Modal title="Cambia tu contraseña" visible={isModalVisible1} footer={[]} onCancel={handleCancel1}>
          <Form onFinish={onFinish1} >
            <Form.Item
              name="password"
              label="Nueva contraseña"
              rules={[
                {
                  required: true,
                  message: 'Por favor introduze nueva contraseña',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirma tu contraseña"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Por favor confirma tu contraseña',
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Las dos contraseñas no coniciden'));
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Button type="primary" htmlType='submit'>
              Cambia tu contraseña
            </Button>
          </Form>
        </Modal>
      </div>

      {/* ---------------------- */}

      <div>
        <Segmented
          options={[
            {
              label: (
                <div className="Segmented__option">
                  <FontAwesomeIcon icon={faHeart} />
                  <p>Rutas favoritas</p>
                </div>
              ),
              value: "fav",
            },
            {
              label: (
                <div className="Segmented__option">
                  <FontAwesomeIcon icon={faStar} />
                  <p>Mis valoraciones</p>
                </div>
              ),
              value: "review",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default MyProfile;
