import { Rate, Collapse, Button } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRouteByID } from "../../features/Routes/RoutesSlice";
import EvaluationsRoute from "./EvaluationsRoute/EvaluationsRoute";
import PoiDetail from "./PoiDetail/PoiDetail";

const RouteDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Panel } = Collapse;

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
          <h3>Duracion: {routeDetail.duration} minutos</h3>
          <h3>Valoracion:</h3>
          {routeDetail.averageScore === "NaN" ? (
            <p>Ruta aun sin valoraión</p>
          ) : (
            <Rate disabled allowHalf defaultValue={routeDetail.averageScore} />
          )}
          <p>{routeDetail.description_es}</p>
          <div>
            <Button type="primary">Guardar en favoritos</Button>
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
