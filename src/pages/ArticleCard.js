import React from "react";
import "./ArticleCard.css";
import Card from "./card/Card";
import articles from "../assets/Article";
import { Box, Text, Divider, Center, Grid } from "@chakra-ui/react";
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
      <Center>
        <Grid templateColumns="repeat(2, 1fr)">
          <Box className="art-list">
            {articles.filter((article) => article.id === 1)}
          </Box>
        </Grid>
      </Center>
    </Box>
  );
};

export default ArticleCard;
