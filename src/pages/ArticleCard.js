import React from "react";
import "./ArticleCard.css";
import Card from "./card/Card";
import articles from "../assets/Article";
import { Box, Text, Divider } from "@chakra-ui/react";
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
      >
        Gear Heads
      </Text>
      <Box className="art-list">
        {articles.map((article, index) => (
          <Card key={index} articles={article} />
        ))}
      </Box>
    </Box>
  );
};

export default ArticleCard;
