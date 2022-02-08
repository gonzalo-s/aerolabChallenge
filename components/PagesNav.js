import React from "react";
import { Box } from "../styles/styledComponents";
import { StyledDesktText, StyledDesktTextGrad } from "../styles/StyledText";
import ChevronButton from "./ChevronButton";
import { useAppContext } from "./context";

export default function PagesNav() {
  const { actualPageIdx, selectPage, pages } = useAppContext();

  let totalPages = pages?.length;
  function prevPage() {
    if (actualPageIdx === 0) return;
    selectPage(actualPageIdx - 1);
  }
  function nextPage() {
    if (actualPageIdx === totalPages - 1) return;
    selectPage(actualPageIdx + 1);
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
        onClick={() => prevPage()}
        arrowLR="left"
        isActive={actualPageIdx > 0}
      />
      <Box w="auto">
        <StyledDesktText color="neutral600" w="auto" p="0 0.5rem 0 0">
          Page
        </StyledDesktText>
        <StyledDesktTextGrad w="auto">
          {`${actualPageIdx + 1} of ${totalPages}`}
        </StyledDesktTextGrad>
      </Box>
      <ChevronButton
        onClick={() => nextPage()}
        arrowLR="right"
        isActive={actualPageIdx + 1 < totalPages}
      />
    </Box>
  );
}
