import React from "react";
import { Link } from "react-router-dom";
import { Box, Image, Text, Stack, Button } from "@chakra-ui/react";
const Card = ({ products }) => {
  return (
    <Box
      w="350px"
      rounded="10px"
      overflow="hidden"
      boxShadow="lg"
      bg="gray.200"
      m="1rem"
      d={products.display}
      border="2px"
      borderColor="gray.500"
    >
      <Link key={products.id} to={`/products/${products.id}`}>
        <Image src={products.image} alt="image not found" />
      </Link>
      <Box p={5} bg="white">
        <Stack align="center">
          <Link key={products.id} to={`/products/${products.id}`}>
            <Text
              as="h2"
              fontFamily="Bebas Neue"
              fontSize="1.5rem"
              letterSpacing="wide"
            >
              {products.tittle}
            </Text>
          </Link>
        </Stack>
        <Stack align="center">
          <Text fontFamily="Bebas Neue" fontSize="1.5rem" letterSpacing="wide">
            {products.price}
          </Text>
        </Stack>
        <Stack align="center">
          <Text color="gray.500" letterSpacing="wide">
            {products.description}
          </Text>
        </Stack>
        <Stack pt="1rem">
          <Button
            colorScheme="purple"
            spacing={4}
            direction="row"
            align="center"
            size="md"
          >
            Comprar ahora
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};
export default Card;
