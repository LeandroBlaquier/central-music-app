import React from "react";
import "./Card.css";
import { Box, Image, Stack, Text } from "@chakra-ui/react";
function Card({ articles }) {
  return (
    <Box w="20rem" rounded="20px" overflow="hidden">
      <Image src={articles.image} alt="image not found" />
      <Box>
        <Stack>
          <Text>{articles.title}</Text>
          <Text>{articles.description}</Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default Card;
