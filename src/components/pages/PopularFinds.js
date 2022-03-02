import { Box, Divider, Text, Center } from "@chakra-ui/react";
import React from "react";
import Card from "../card/Card";
// import "./ProductCard.css";
import { PictureFind } from "../../assets/popularFinds";

const PopularFinds = () => {
  return (
    <Box bg="#ECECEC" className="container">
      <Center>
        <Divider p={4} w="50px" borderBottom="4px solid #AB0433" mb="9px" />
      </Center>
      <Text
        color="#505050"
        fontSize="2rem"
        fontFamily="Bebas Neue"
        letterSpacing="wide"
        textAlign="center"
        flexDir="column"
        justify="center"
        align="center"
        p="0px"
      >
        Popular Finds
      </Text>
      <Center>
        <Box
          className="products-list"
          mb="5rem"
          d="grid"
          gridTemplateColumns="repeat(3,1fr)"
        >
          {PictureFind.map((PictureFind, index) => (
            <Card key={index} products={PictureFind} />
          ))}
        </Box>
      </Center>
    </Box>
  );
};

export default PopularFinds;
