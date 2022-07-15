// import { getAllRoutes } from "../../features/Routes/routesSlice";
import { useDispatch } from "react-redux";
import APIExample from "../../assets/APIExample.json";

const Map = () => {
  const dispatch = useDispatch();

  const sendReq = async () => {
    // await dispatch(getAllRoutes());
    console.log(APIExample);
  };

  return (
    <div className="Map">
      <h1>Estás dentro del Mapa </h1>
      <button onClick={() => sendReq()}>Obten rutas</button>
    </div>
  );
};

export default Map;
