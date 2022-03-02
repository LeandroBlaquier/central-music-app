import { Box, Container, Divider, Heading, Center } from "@chakra-ui/react";
import React from "react";
import Card from "../card/Card";
import "./ProductCard.css";
import { popularFinds } from "../../assets/popularFinds";

const PopularFinds = () => {
  return (
    <Box bg="#ECECEC">
      <Container mt="3rem" maxWidth="90%">
        <Center>
          <Divider p={4} w="50px" borderBottom="4px solid #AB0433" mb="9px" />
        </Center>
        <Heading color="#505050" textAlign="center" className="title">
          Popular Finds
        </Heading>
        <Center>
          <Box className="products-list">
            {popularFinds.map((popularFinds, index) => (
              <Card key={index} products={popularFinds} />
            ))}
          </Box>
        </Center>
      </Container>
    </Box>
  );
};

export default PopularFinds;
