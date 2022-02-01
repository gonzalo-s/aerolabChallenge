import React, { useState, useRef } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  FilterItem,
  FilterWrapper,
  FilterMenuButton,
  FilterMenuWrapper,
  TriangleDownIcon,
  FilterMenuButtonWrapper,
} from "../styles/styledComponents";
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
    console.log("category handleOnClick: ", category);
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
    <FilterWrapper ref={domNode}>
      <FilterMenuButtonWrapper>
        Filter By:
        <FilterMenuButton onClick={handleOnMenuClick}>
          {filters.filterBy}
          <TriangleDownIcon />
        </FilterMenuButton>
      </FilterMenuButtonWrapper>
      {displayMenu ? (
        <FilterMenuWrapper>
          <FilterItem
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
        </FilterMenuWrapper>
      ) : (
        ""
      )}
    </FilterWrapper>
  );
}
