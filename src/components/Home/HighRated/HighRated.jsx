import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHighRatedRoutes } from "../../../features/Routes/RoutesSlice";
import HighRatedItem from "./HighRatedItem/HighRatedItem";
import "./HighRated.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapLocationDot,
  faFilter,
  faLocationDot,
  faPlaceOfWorship,
  faClock,
  faChartSimple,
} from "@fortawesome/free-solid-svg-icons";
import AIForm from "./AIForm/AIForm";
import Spinner from "../../Spinner/Spinner";

const HighRated = () => {
  const { highRated, isLoadingHighRated } = useSelector(
    (state) => state.routes
  );
  const { user } = useSelector((state) => state.auth);
  const [modalAIVisible, setModalAIVisible] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHighRatedRoutes());
  }, []);

  return (
    <div className="HighRated">
      {isLoadingHighRated ? (
        <Spinner height={"60vh"} />
      ) : (
        <>
          {user.AIAvailable ? (
            <button
              className="HighRatedItem "
              style={{
                backgroundImage: `url(https://dogtime.com/assets/uploads/2011/03/puppy-development.jpg)`,
              }}
            >
              <div className="route-btn__cover">
                <div className="title">Nombre de la ruta recomendada</div>
                <div className="data">
                  <div className="time">
                    <FontAwesomeIcon icon={faClock} />
                    <p>xxx mins.</p>
                  </div>
                  <div className="points">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p>xx Lugares</p>
                  </div>
                  <div className="difficulty">
                    <FontAwesomeIcon icon={faChartSimple} />
                    <p>¯\_(ツ)_/¯</p>
                  </div>
                </div>
              </div>
            </button>
          ) : (
            <>
              <button
                className="HighRatedItem HighRatedItem--IA"
                onClick={() => setModalAIVisible(true)}
              >
                <div className="route-btn__cover">
                  <div className="title">
                    ¿Quieres encontrar tu ruta perfecta?
                  </div>
                  <h3 style={{ color: "white" }}>
                    Solo tienes que responder algunas preguntas.
                  </h3>
                </div>
              </button>
              <AIForm
                modalAIVisible={modalAIVisible}
                setModalAIVisible={setModalAIVisible}
              />
            </>
          )}
          {highRated.map((item) => (
            <HighRatedItem item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default HighRated;
