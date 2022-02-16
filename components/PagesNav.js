import React from "react";
import { TextL1Default, TextL1DefaultGrad } from "../styles/StyledText";
import ChevronButton from "./ChevronButton";
import { useAppContext } from "./context";
import { PagesNavWrapper, PagesNavTextWrapper } from "../styles/styledPagesNav";

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
    <PagesNavWrapper
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
      <PagesNavTextWrapper w="auto">
        <TextL1Default color="neutral600" w="auto" p="0 0.5rem 0 0">
          Page
        </TextL1Default>
        <TextL1DefaultGrad w="auto">
          {`${actualPageIdx + 1} of ${totalPages}`}
        </TextL1DefaultGrad>
      </PagesNavTextWrapper>
      <ChevronButton
        onClick={() => nextPage()}
        arrowLR="right"
        isActive={actualPageIdx + 1 < totalPages}
      />
    </PagesNavWrapper>
  );
}
