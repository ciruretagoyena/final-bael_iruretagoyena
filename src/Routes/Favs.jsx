import React from "react";
import { useGlobalContext } from "../Components/utils/global.context";
import DentistCard from "../Components/Card";

const Favs = () => {
  const { state } = useGlobalContext();

  const dentistCards = state.favs?.map((dentist) => (
    <DentistCard
      key={dentist.id}
      name={dentist.name}
      username={dentist.username}
      id={dentist.id}
    />
  ));

  return (
    <div className="favorite-dentists">
      <h1 className="favorite-dentists__title">Dentistas Favoritos</h1>
      <div className="favorite-dentists__grid">{dentistCards}</div>
    </div>
  );
};

export default Favs;
