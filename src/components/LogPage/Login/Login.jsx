import { useState } from "react";
import "./Login.scss";

const Login = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const submitInfo = (e) => {
    e.preventDefault();
  };

  return (
    <div className="Login">
      <form className="Login__form" onSubmit={(e) => submitInfo(e)}>
        <div className="Login__form--item">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="Login__form--item">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
          />
        </div>
        <div className="Login__form--btns">
          <button type="submit" onClick={(e) => submitInfo(e)}>
            Login
          </button>
          <button>Signup</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
