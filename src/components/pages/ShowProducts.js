import React from "react";
import { useParams } from "react-router-dom";
import ExitButton from "../closeButton/ExitButton";
import { Box, Text, Image, Stack } from "@chakra-ui/react";
// import AddToCart from "../components/AddToCart";

// import "./ShowProduct.css";
const ShowProducts = ({ products }) => {
  let { id } = useParams();
  return (
    <Box className="container">
      <ExitButton />
      {products
        ?.filter((card) => card.id == id)
        .map((productcard, index) => (
          <Box
            key={index}
            w="80%"
            mt="2rem"
            d="grid"
            gridTemplateColumns="2fr 1fr 1fr"
            gap="1.6rem"
          >
            <Box>
              <Image
                src={productcard.image}
                alt="image not found"
                maxW="100%"
                h="auto"
              />
            </Box>
            <Box bg="#282828" p="0.5rem 1rem">
              <Stack>
                <Text
                  as="h2"
                  fontFamily="Bebas Neue"
                  fontSize="1.5rem"
                  letterSpacing="wide"
                >
                  {productcard.tittle}
                </Text>
                <Text
                  fontFamily="Bebas Neue"
                  fontSize="1.5rem"
                  letterSpacing="wide"
                >
                  {productcard.price}
                </Text>
                <Text letterSpacing="wide">{productcard.description}</Text>
                {/* <AddToCart products={productcard} /> */}
              </Stack>
            </Box>
          </Box>
        ))}
    </Box>
  );
};

export default ShowProducts;
