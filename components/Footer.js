import React from "react";
import { A, Box } from "../styles/styledComponents";
import Github from "../assets/github.svg";
import Link from "next/link";
import { StyledDesktText } from "../styles/StyledText";
export default function Footer() {
  return (
    <Box
      className="footerWeapper"
      direction="row"
      alignItems="center"
      justifyContent="center"
      p="0 14.25rem"
      h="12.5rem"
    >
      <Link
        href="https://github.com/gonzalo-s/aerolabChallenge"
        passHref={true}
      >
        <A>
          <Box>
            <Github width="33" height="32" viewBox="0 0 33 32" />
            <StyledDesktText p="0 0 0 1rem" color="neutral600">
              View this repository
            </StyledDesktText>
          </Box>
        </A>
      </Link>
    </Box>
  );
}
