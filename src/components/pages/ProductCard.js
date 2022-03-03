import React from "react";
// import "./ProductCard.css";
import Card from "../card/Card";
import products from "../../assets/products";
import { Box, Text, Divider, Center } from "@chakra-ui/react";
// import { useBreakpointValue } from "@chakra-ui/react";
const ProductCard = () => {
  return (
    <Box className="container" width={["100%"]}>
      <Box align="center">
        <Divider borderColor="red" w="1%" p={4} />
      </Box>
      <Text
        as="h1"
        className="title"
        fontSize="2rem"
        fontFamily="Bebas Neue"
        letterSpacing="wide"
        d="flex"
        flexDir="column"
        justify="center"
        align="center"
        p="0px"
      >
        New Products
      </Text>
      <Center>
        <Box
          className="products-list"
          mt="1rem"
          d="grid"
          gridTemplateColumns={[
            "repeat(1,1fr)",
            "repeat(1,1fr)",
            "repeat(2,1fr)",
            "repeat(3, 1fr)",
          ]}
        >
          {products.map((product, index) => (
            <Card key={index} products={product} />
          ))}
        </Box>
      </Center>
    </Box>
  );
};
export default ProductCard;
