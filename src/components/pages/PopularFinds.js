import { Box, Container, Divider, Heading, Center } from "@chakra-ui/react";
import React from "react";
import Card from "../card/Card";
import "./ProductCard.css";
import { popularFinds } from "../../assets/popularFinds";

const PopularFinds = () => {
  return (
    <Box bg="#ECECEC" p="2rem 0 5rem 0">
      <Container mt="3rem" maxWidth="90%">
        <Divider
          m="0 auto"
          width={["58px", "110px", "80px", "58px"]}
          color="#AB0433"
        />
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
