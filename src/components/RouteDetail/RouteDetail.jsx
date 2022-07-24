import { Rate } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRouteByID } from "../../features/Routes/RoutesSlice";

const RouteDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { routeDetail, isLoadingRouteDetail } = useSelector(
    (state) => state.routes
  );

  useEffect(() => {
    dispatch(getRouteByID(id));
  }, [id]);

  return (
    <section className="RouteDetail">
      {isLoadingRouteDetail ? (
        <h1>Cargando...</h1>
      ) : (
        <div>
          <h1>{routeDetail.name}</h1>
          <img src={routeDetail.image} alt={routeDetail.name} />
          {routeDetail.difficulty === "NaN" ? null : (
            <h3>Difucultad: {routeDetail.difficulty}</h3>
          )}
          <h3>Duracion: {routeDetail.duration}</h3>
          <h3>Valoracion:</h3>
          {routeDetail.averageScore === "NaN" ? (
            <p>Ruta aun sin valoraión</p>
          ) : (
            <Rate disabled defaultValue={routeDetail.averageScore} />
          )}
          <p>{routeDetail.description_es}</p>
        </div>
      )}
    </section>
  );
};

export default RouteDetail;
