import React from "react";
import ProductCard from "./ProductCard";
import SubHero from "../../ui/SubHero";
import Footer from "../../ui/Footer";
import PopularFinds from "../pages/PopularFinds";
// import GearHeads from "../GearHeads/GearHeads";
const Home = () => {
  return (
    <>
      <SubHero />
      <ProductCard />
      <PopularFinds />
      {/* <GearHeads /> */}
      <Footer />
    </>
  );
};

export default Home;
