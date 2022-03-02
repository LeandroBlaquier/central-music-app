import React from "react";
import ProductCard from "./ProductCard";
import SubHero from "../../ui/SubHero";
import Footer from "../../ui/Footer";
import PopularFinds from "../pages/PopularFinds";
const Home = () => {
  return (
    <>
      <SubHero />
      <ProductCard />
      <PopularFinds />
      <Footer />
    </>
  );
};

export default Home;
