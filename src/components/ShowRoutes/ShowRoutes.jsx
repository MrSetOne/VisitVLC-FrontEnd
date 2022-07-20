import React, { useEffect } from "react";
import { getAllRoutes } from "../../features/Routes/RoutesSlice";
import { useDispatch, useSelector } from "react-redux/es/exports";
import ShowRoute from "./ShowRoute/ShowRoute";

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
      {isLoadingAllRoutes ? <h1>Aqui se ven las rutas</h1> : show}
    </section>
  );
};

export default ShowRoutes;
