import React from "react";
import { Box } from "../styles/styledComponents";
import { NavbarWrapper } from "../styles/styledNavbar";
import StyledAerolabLogo from "../styles/StyledAerolabLogo";
import AddBalance from "./AddBalance";
export default function Navbar({ addPoints, isLoading }) {
  return (
    <NavbarWrapper>
      <Box
        className="logoMenuBtn"
        justifyContent="space-between"
        alignItems="center"
      >
        <StyledAerolabLogo />
        <AddBalance addPoints={addPoints} isLoading={isLoading} />
      </Box>
    </NavbarWrapper>
  );
}
