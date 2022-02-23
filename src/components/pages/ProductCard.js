import React from "react";
import "./ProductCard.css";
import Card from "../card/Card";
import products from "../../assets/products";
import { Box, Text, Divider } from "@chakra-ui/react";
const ProductCard = () => {
  return (
    <Box className="container">
      <Box align="center">
        <Divider borderColor="red" w="1%" p={4} />
      </Box>
      <Text
        as="h1"
        className="title"
        fontSize="2rem"
        fontFamily="Bebas Neue"
        letterSpacing="wide"
      >
        New Products
      </Text>
      <Box className="products-list">
        {products.map((product, index) => (
          <Card key={index} products={product} />
        ))}
      </Box>
    </Box>
  );
};
export default ProductCard;
