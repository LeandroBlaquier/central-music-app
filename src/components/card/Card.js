import React from "react";
// import {Link} from "react-router-dom"
// import "./Card.css";
import { Box, Image, Text, Stack, Badge } from "@chakra-ui/react";
const Card = ({ products }) => {
  return (
    <Box
      w="350px"
      rounded="20px"
      overflow="hidden"
      boxShadow="lg"
      bg="gray.200"

    >
      <Image src={products.image} alt="image not found" />
      <Box p={5} bg="white">
        <Stack isInline align="base-line" justify="space-between">
          <Text
            as="h2"
            fontFamily="Bebas Neue"
            fontSize="1.5rem"
            letterSpacing="wide"
          >
            {products.tittle}
          </Text>
          <Text fontFamily="Bebas Neue" fontSize="1.5rem" letterSpacing="wide">
            {products.price}
          </Text>
        </Stack>
        <Text color="gray.500" letterSpacing="wide">
          {products.description}
        </Text>
        <Badge
          textTransform="lowercase"
          variant="outline"
          rounded="full"
          px={3}
        >
          0 colors avaible
        </Badge>
      </Box>
    </Box>
  );
};
export default Card;
