import React, { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  Box,
  FilterItem,
  FilterWrapper,
  FilterMenuButton,
  TriangleDownIcon,
} from "../styles/styledComponents";
import { StyledDesktText } from "../styles/StyledText";
import { useAppContext } from "./context";
let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

export default function Filter() {
  const { filters, categories, selectFilterBy } = useAppContext();
  const [displayMenu, setDisplayMenu] = useState(false);

  const categoriesList = categories();

  function handleOnItemClick(category) {
    setDisplayMenu(false);
    selectFilterBy(category);
  }
  function handleOnMenuClick() {
    setDisplayMenu(!displayMenu);
  }

  let domNode = useClickOutside(() => {
    setDisplayMenu(false);
  });

  return (
    <FilterWrapper ref={domNode} w="24.563rem" h="100%" borderRight="1px">
      <Box className="textAndButtonWrapper" justifyContent="flex-start">
        <StyledDesktText p="0 1rem 0 0" color="neutral600" w="auto">
          Filter by:
        </StyledDesktText>
        <FilterMenuButton
          p="0 0.25rem 0 1.5rem"
          w="16rem"
          onClick={handleOnMenuClick}
        >
          {filters.filterBy}
          <TriangleDownIcon />
        </FilterMenuButton>
      </Box>
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
