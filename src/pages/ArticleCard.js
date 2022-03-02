import React from "react";
// import "./ArticleCard.css";
import Card from "./card/Card";
import articles from "../assets/Article";
import { Box, Text, Divider, Center } from "@chakra-ui/react";
const ArticleCard = () => {
  return (
    <Box className="container" m="0 3rem">
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
        flexDir="columns"
        justify="center"
        align="center"
        p="0px"
      >
        Gear Heads
      </Text>
      <Center>
        <Box
          className="art-list"
          mt="1rem"
          d="grid"
          tempalteColumns="repeat(2,1fr"
        >
          <Box>
            <Card articles={articles} />
          </Box>
        </Box>
      </Center>
    </Box>
  );
};

export default ArticleCard;
