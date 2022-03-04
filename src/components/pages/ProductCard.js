import React from "react";
// import "./ProductCard.css";
import Card from "../card/Card";
import products from "../../assets/products";
import { Box, Text, Divider, Center } from "@chakra-ui/react";
// import { useBreakpointValue } from "@chakra-ui/react";
const ProductCard = () => {
  return (
    <Box className="container" mb="3rem">
      <Box align="center">
        <Divider
          p={4}
          w="50px"
          borderBottom="4px solid #AB0433"
          mb="9px"
          align="center"
        />
      </Box>
      <Text
        as="h1"
        className="title"
        fontSize="2rem"
        fontFamily="Bebas Neue"
        letterSpacing="wide"
        color="#505050"
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
