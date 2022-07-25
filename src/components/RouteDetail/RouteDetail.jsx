import { Rate, Collapse, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getRouteByID,
  favoriteRoute,
  favoriteRouteOut,
} from "../../features/Routes/RoutesSlice";
import EvaluationsRoute from "./EvaluationsRoute/EvaluationsRoute";
import PoiDetail from "./PoiDetail/PoiDetail";
import { addToFav, removeToFav } from "../../features/auth/authSlice";

const RouteDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Panel } = Collapse;

  const { routeDetail, isLoadingRouteDetail, isLoadingFav } = useSelector(
    (state) => state.routes
  );

  const { favoriteRoutes } = useSelector((state) => state.auth);

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
          <h3>Duracion: {routeDetail.duration} minutos</h3>
          <h3>Valoracion:</h3>
          {routeDetail.averageScore === "NaN" ? (
            <p>Ruta aun sin valoraión</p>
          ) : (
            <Rate disabled allowHalf defaultValue={routeDetail.averageScore} />
          )}
          <p>{routeDetail.description_es}</p>
          <div>
            {favoriteRoutes.some(
              (objetive) => Number(objetive.route_id) === Number(id)
            ) ? (
              <Button
                type="primary"
                loading={isLoadingFav}
                onClick={async () => {
                  await dispatch(favoriteRouteOut(id));
                  dispatch(removeToFav(id));
                }}
              >
                Quitar en favoritos
              </Button>
            ) : (
              <Button
                type="primary"
                loading={isLoadingFav}
                onClick={async () => {
                  await dispatch(favoriteRoute(id));
                  dispatch(addToFav(routeDetail));
                }}
              >
                Guardar en favoritos
              </Button>
            )}
            <Button
              type="primary"
              onClick={() => navigate(`/map/${routeDetail.route_id}`)}
            >
              Iniciar ruta
            </Button>
          </div>
          <Collapse>
            <Panel header="Puntos de interés">
              <ul style={{ padding: "0 2rem" }}>
                {routeDetail.poi.map((poiItem) => (
                  <PoiDetail poi={poiItem} />
                ))}
              </ul>
            </Panel>
            <Panel header="Opiniones">
              <ul>
                {routeDetail.evaluations.length === 0 ? (
                  <h1>Nadie ha opinado</h1>
                ) : (
                  routeDetail.evaluations.map((item) => (
                    <EvaluationsRoute item={item} />
                  ))
                )}
              </ul>
            </Panel>
          </Collapse>
        </div>
      )}
    </section>
  );
};

export default RouteDetail;
