import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFavoritesRoutes } from "../../../features/auth/authSlice";

const FavRoutes = () => {

  const dispatch = useDispatch()

  const { favoriteRoutes } = useSelector((state) => state.auth);

  console.log(favoriteRoutes)

  useEffect(() => {
    dispatch(getFavoritesRoutes())
  }, [])

  const favorites = favoriteRoutes.map((route) => {
    return (
      <>
        <h1>{route.name}</h1>
        <img src={route.image} alt="route image" />
        <p>{route.description_es}</p>
      </>
    )
  })

  return (
    <div className="FavRoutes">
      {favorites}
    </div>
  );
};

export default FavRoutes;
