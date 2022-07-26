import React, { useEffect } from "react";
import { getAllRoutes } from "../../features/Routes/RoutesSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ShowRoute from "./ShowRoute/ShowRoute";
import "./ShowRoutes.scss";
import { BackTop } from "antd";
import Spinner from "../Spinner/Spinner";

const ShowRoutes = () => {
  const { allRoutes, isLoadingAllRoutes } = useSelector(
    (state) => state.routes
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRoutes());
  }, []);

  const show = allRoutes.map((route) => <ShowRoute route={route} />);

  return (
    <section className="ShowRoutes">
      <div>
        {isLoadingAllRoutes ? <Spinner width={"95vw"} /> : show}
        <BackTop />
      </div>
    </section>
  );
};

export default ShowRoutes;
