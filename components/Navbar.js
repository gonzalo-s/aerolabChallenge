import React from "react";
import { Box } from "../styles/styledComponents";
import StyledAerolabLogo from "../styles/StyledAerolabLogo";
import AddBalance from "./AddBalance";
export default function Navbar({ addPoints, isLoading }) {
  return (
    <Box
      className="navWrapper"
      direction="column"
      alignItems="center"
      maxW="76.25%"
      w="100%"
      m="auto"
      h="5.5rem"
    >
      <Box
        className="logoMenuBtn"
        justifyContent="space-between"
        height="3rem"
        alignItems="end"
      >
        <StyledAerolabLogo />
        <AddBalance addPoints={addPoints} isLoading={isLoading} />
      </Box>
    </Box>
  );
}
