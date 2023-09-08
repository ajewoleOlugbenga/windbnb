import React from "react";
import Header from "./components/navbar/header";
import Cards from "./components/cards";

const Homepage = () => {
  return (
    <div>
      <Header/>
      <section className="flex mx-auto items-center justify-between my-8">
        <p className="ml-20 font-Mon font-extrabold text-xl">Stays in Finland</p>
        <div className="mr-20">12+ stays</div>
      </section>
      <Cards/>
    </div>
  );
};

export default Homepage;
