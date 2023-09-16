import React from "react";
import DentistCard from "../Components/Card";
import { useGlobalContext } from "../Components/utils/global.context";

const Home = () => {
  const { state } = useGlobalContext();

  const renderDentistCards = () => {
    return state.list?.map((dentist) => (
      <DentistCard
        key={dentist.id}
        name={dentist.name}
        username={dentist.username}
        id={dentist.id}
      />
    ));
  };

  return (
    <main className="">
      <h1>Home</h1>
      <div className="card-grid">
        {renderDentistCards()}
      </div>
    </main>
  );
};

export default Home;
