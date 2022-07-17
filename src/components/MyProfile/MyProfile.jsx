import { useSelector } from "react-redux/es/exports";

const MyProfile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <section className="MyProfile">
      <h1>{user.firstName}</h1>
    </section>
  );
};

export default MyProfile;
