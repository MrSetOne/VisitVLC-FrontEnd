import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import "./LogPage.scss";
import brand from "../../assets/visitVLCiconOrange.svg";
import { useState } from "react";

const LogPage = () => {
  const [needsignup, setNeedsignup] = useState(false);

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
