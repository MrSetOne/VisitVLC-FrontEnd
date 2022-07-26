import { Rate, Collapse, Button, Typography, Divider, BackTop } from "antd";
import { useEffect, useState } from "react";
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
import "./RouteDetail.scss";
import Spinner from "../Spinner/Spinner";

const RouteDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { Panel } = Collapse;
  const { Paragraph } = Typography;

  const [ellipsis, setEllipsis] = useState(true);

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
        <Spinner />
      ) : (
        <div>
          <h2 className="RouteDetail__title">{routeDetail.name}</h2>
          <img src={routeDetail.image} alt={routeDetail.name} />
          <div className="Routedetail__stats">
            <h3>Valoración:</h3>
            {routeDetail.averageScore === "NaN" ? (
              <p>Ruta aún sin valoración</p>
            ) : (
              <>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={routeDetail.averageScore}
                />
                <p className="Routedetail__stats--xtra">
                  ({routeDetail.evaluations.length} valoraciones)
                </p>
              </>
            )}
          </div>
          <div className="Routedetail__stats">
            <h3>Duración: {routeDetail.duration} minutos</h3>
          </div>
          <div className="Routedetail__stats">
            <h3>
              Dificultad:{" "}
              {routeDetail.difficulty === "NaN"
                ? "alta"
                : routeDetail.difficulty}
            </h3>
          </div>
          <div className="Routedetail__stats">
            <h3>{routeDetail.poi.length} puntos de interés</h3>
          </div>
          <Divider plain>Descripción</Divider>
          <Paragraph
            ellipsis={
              ellipsis
                ? {
                    rows: 4,
                    expandable: true,
                    symbol: "leer mas...",
                  }
                : false
            }
          >
            {routeDetail.description_es}
          </Paragraph>
          <div className="RouteDetail__btns">
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
                Quitar de Favoritos
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
                Guardar en Favoritos
              </Button>
            )}
            <Button
              type="primary"
              onClick={() => navigate(`/map/${routeDetail.route_id}`)}
            >
              Iniciar Ruta
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
              <ul style={{ padding: "0 2rem" }}>
                {routeDetail.evaluations.length === 0 ? (
                  <h1>Nadie ha opinado aún</h1>
                ) : (
                  routeDetail.evaluations.map((item) => (
                    <EvaluationsRoute item={item} />
                  ))
                )}
              </ul>
            </Panel>
          </Collapse>
          <BackTop />
        </div>
      )}
    </section>
  );
};

export default RouteDetail;
