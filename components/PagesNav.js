import React from "react";
import { Box, Button } from "../styles/styledComponents";
import { StyledDesktText, StyledDesktTextGrad } from "../styles/StyledText";
import ChevronButton from "./ChevronButton";

export default function PagesNav() {
  let actualPage = 1;
  let totalPages = 2;

  function handleOnClick(arrow) {
    console.log(arrow);
  }

  return (
    <Box
      w="16.188rem"
      h="4rem"
      border="1px"
      radius="1rem"
      justifyContent="space-around"
      alignItems="center"
    >
      <ChevronButton
        onClick={() => handleOnClick("left")}
        arrowLR="left"
        isActive={false}
      />
      <Box w="auto">
        <StyledDesktText color="neutral600" w="auto" p="0 0.5rem 0 0">
          Page
        </StyledDesktText>
        <StyledDesktTextGrad w="auto">
          {`${actualPage} of ${totalPages}`}
        </StyledDesktTextGrad>
      </Box>
      <ChevronButton
        onClick={() => handleOnClick("right")}
        arrowLR="right"
        isActive={true}
      />
    </Box>
  );
}
