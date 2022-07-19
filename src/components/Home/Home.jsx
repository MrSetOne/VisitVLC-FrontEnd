import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Home.scss";
import {
  faUser,
  faCrown,
  faMapLocationDot,
  faFilter,
  faLocationPin,
  faPlaceOfWorship,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="Home">
      <div className="Home__btns">
        <button onClick={() => navigate("/profile")}>
          <FontAwesomeIcon icon={faUser} />
          <p>My profile</p>
        </button>
        <button>
          <FontAwesomeIcon icon={faCrown} />
          <p> My favourite routes</p>
        </button>
        <button>
          <FontAwesomeIcon icon={faLocationPin} />
          <p> Close to me</p>
        </button>
        <button>
          <FontAwesomeIcon icon={faMapLocationDot} />
          <p>All routes</p>
        </button>
        <button>
          <FontAwesomeIcon icon={faFilter} />
          <p>Categories</p>
        </button>
        <button>
          <FontAwesomeIcon icon={faPlaceOfWorship} />
          <p> Sites</p>
        </button>
      </div>
    </div>
  );
};

export default Home;
