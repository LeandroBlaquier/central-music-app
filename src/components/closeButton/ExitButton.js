import React from "react";
import { useNavigate } from "react-router-dom";
import { CloseButton, Stack } from "@chakra-ui/react";
const ExitButton = () => {
  const navigate = useNavigate();
  return (
    <Stack>
      <CloseButton size="lg" justify="left" onClick={() => navigate(-1)} />
    </Stack>
  );
};

export default ExitButton;
