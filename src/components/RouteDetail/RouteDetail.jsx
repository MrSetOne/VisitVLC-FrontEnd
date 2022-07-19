import { useParams } from "react-router-dom";

const RouteDetail = () => {
  const { id } = useParams();

  return (
    <section className="RouteDetail">
      <h1>Aquí se mostrará la info de la ruta con id {id}</h1>
    </section>
  );
};

export default RouteDetail;
