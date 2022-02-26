import React from "react";
import "./ProductCard.css";
import Card from "../card/Card";
import products from "../../assets/products";
import { Box, Text, Divider, Center } from "@chakra-ui/react";
const ProductCard = () => {
  return (
    <Box className="container" width={["100%"]}>
      <Box align="center">
        <Divider p={4} w="50px" borderBottom="4px solid #AB0433" mb="9px" />
      </Box>
      <Text
        as="h1"
        className="title"
        fontSize="2rem"
        fontFamily="Bebas Neue"
        letterSpacing="wide"
        color="black"
      >
        New Products
      </Text>
      <Center>
        <Box className="products-list">
          {products.map((product, index) => (
            <Card key={index} products={product} />
          ))}
        </Box>
      </Center>
    </Box>
  );
};
export default ProductCard;
