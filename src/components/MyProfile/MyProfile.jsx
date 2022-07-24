import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux/es/exports";
import { faUser, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { Segmented } from "antd";
import "./MyProfile.scss";

const MyProfile = () => {
  const { user } = useSelector((state) => state.auth);

  console.log(user);

  return (
    <section className="MyProfile">
      <div>
        <h2>
          {user.firstName} {user.lastName}
        </h2>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <div>
        <Segmented
          options={[
            {
              label: (
                <div className="Segmented__option">
                  <FontAwesomeIcon icon={faHeart} />
                  <p>Rutas favoritas</p>
                </div>
              ),
              value: "fav",
            },
            {
              label: (
                <div className="Segmented__option">
                  <FontAwesomeIcon icon={faStar} />
                  <p>Mis valoraciones</p>
                </div>
              ),
              value: "review",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default MyProfile;
