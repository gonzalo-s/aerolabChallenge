import React, { useState, useRef } from "react";
import { Box } from "../styles/styledComponents";
import {
  FilterItem,
  FilterWrapper,
  FilterMenuButton,
  TriangleDownIcon,
  TextAndButtonWrapper,
} from "../styles/styledFilter";
import { TextL1Default } from "../styles/StyledText";
import { useAppContext } from "./context";
import useOnClickOutside from "./useOnClickOutside";

export default function Filter() {
  const { filters, categories, selectFilterBy } = useAppContext();
  const [displayMenu, setDisplayMenu] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, () => setDisplayMenu(false));

  const categoriesList = categories();
  function handleOnItemClick(category) {
    setDisplayMenu(false);
    selectFilterBy(category);
  }
  function handleOnMenuClick() {
    setDisplayMenu(!displayMenu);
  }

  return (
    <FilterWrapper ref={ref} h="100%" borderRight="1px">
      <TextAndButtonWrapper
        className="textAndButtonWrapper"
        h="3.688rem"
        justifyContent="flex-start"
      >
        <TextL1Default
          className="filterByText"
          p="0 1rem 0 0"
          color="neutral600"
          w="auto"
        >
          Filter by:
        </TextL1Default>
        <FilterMenuButton
          p="0 0.25rem 0 1.5rem"
          w="16rem"
          onClick={handleOnMenuClick}
        >
          {filters.filterBy}
          <TriangleDownIcon />
        </FilterMenuButton>
      </TextAndButtonWrapper>
      {displayMenu ? (
        <Box
          className="filterMenuWrapper"
          position="absolute"
          direction="column"
          alignItems="flex-start"
          zIndex="999"
          top="4.25rem"
          right="0"
          bgTheme="neutral0"
          radius="0.5rem"
          h="auto"
          w="18.75rem"
          border="1px"
          borderColor="neutral300"
        >
          <FilterItem
            h="3.188rem"
            value={"All Products"}
            onClick={() => {
              handleOnItemClick("All Products");
            }}
          >
            All Products
          </FilterItem>
          {categoriesList.map((category, id) => {
            return (
              <FilterItem
                h="3.188rem"
                key={id}
                value={category}
                onClick={() => {
                  handleOnItemClick(category);
                }}
              >
                {category}
              </FilterItem>
            );
          })}
        </Box>
      ) : (
        ""
      )}
    </FilterWrapper>
  );
}
