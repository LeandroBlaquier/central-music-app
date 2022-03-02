import React from "react";
// import "./Card.css";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
function Card({ articles }) {
  return (
    <Box w="20rem" rounded="20px" overflow="hidden" boxShadow="lg" m="1rem">
      <Image src={articles.image} alt="image not found" />
      <Box p={5} color="black" className="">
        <Stack>
          <Text
            as="h2"
            fontFamily="Bebas Neue"
            fontSize="2rem"
            letterSpacing="wide"
          >
            {articles.title}
          </Text>
          <Text fontFamily="Bebas Neue" fontSize="20px" letterSpacing="wide">
            {articles.description}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
