import React, { useState } from "react";
import {
  FilterItem,
  FilterWrapper,
  FilterMenuButton,
  FilterMenuWrapper,
  TriangleDownIcon,
} from "../styles/styledComponents";

import { useAppContext } from "./context";

export default function Filter() {
  const { filters, categories, selectFilterBy } = useAppContext();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const categoriesList = categories();

  function handleOnItemClick(category) {
    console.log("category handleOnClick: ", category);
    selectFilterBy(category);
  }

  function handleOnMenuClick() {
    setIsMenuVisible(!isMenuVisible);
  }
  return (
    <FilterWrapper>
      Filter By:
      <FilterMenuButton onClick={handleOnMenuClick}>
        {filters.filterBy}
        <TriangleDownIcon />
      </FilterMenuButton>
      <FilterMenuWrapper isMenuVisible={isMenuVisible}>
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
    </FilterWrapper>
  );
}
