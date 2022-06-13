import React from "react";
import Menu from "../Components/Header/Menu";
import Banner from "../Components/Services/Banner";
import Faq from "../Components/Services/Faq/Faq";
import Buisness from "../Components/Services/HelpBuisness/Buisness";
import Resources from "../Components/Services/Resources/Resources";
import TopHeader from "../Components/TopHeader/TopHeader";
import Gap from "../Gap/Gap";
import Provide from "./../Components/Provived/Provide";
import Counter from "./../Components/Counter/Counter";
import Footer from "../Components/Footer/Footer";
import GlobalBuisness from "../Components/Services/GlobalBuisness/GlobalBuisness";

function Services() {
  return (
    <>
      <TopHeader />
      <Menu />
      <Banner />
      <Resources />
      <Provide />
      <Buisness />
      <Faq />
      <Counter />
      <GlobalBuisness />
      <Footer />
    </>
  );
}

export default Services;
