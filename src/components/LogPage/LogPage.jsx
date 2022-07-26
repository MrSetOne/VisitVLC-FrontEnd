import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./LogPage.scss";
import brand from "../../assets/visitVLCiconOrange.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { notification } from "antd";
import { resetNotifications } from "../../features/auth/authSlice";

const LogPage = () => {
  const [needsignup, setNeedsignup] = useState(false);

  const dispatch = useDispatch();

  const {
    notification: feedback,
    isLoading,
    isError,
  } = useSelector((state) => state.auth);

  console.log(isError)
  console.log(feedback)

  useEffect(() => {
    if (isError) {
      notification.error({
        message: "Algo ha salido mal...",
        description: feedback,
        placement: "bottom",
      });
      setTimeout(() => {
        dispatch(resetNotifications());
      }, 2000);
    }
  }, [feedback]);

  return (
    <div className="LogPage">
      <div className="LogPage__PreBrand">
        <img src={brand} alt="VisitVLC" className="LogPage__Brand" />
      </div>
      {needsignup ? (
        <Signup setNeedsignup={setNeedsignup} />
      ) : (
        <Login setNeedsignup={setNeedsignup} />
      )}
    </div>
  );
};

export default LogPage;
