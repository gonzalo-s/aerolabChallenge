import React, { useState, useContext, useEffect, useCallback } from "react";
const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [items, setItems] = useState(null);
  const [userData, setUserData] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [filters, setFilters] = useState({
    filterBy: null,
    sortBy: "Most Recent", // Most Recent | Lowest Price | Higher Price
  });
  const [isSorted, setIsSorted] = useState(false);

  //   console.log("--items: ", items);
  //   console.log("--filteredItems: ", filteredItems);
  //   console.log("--filters: ", filters);
  //   console.log("--isSorted: ", isSorted);

  function categories() {
    let newCategories = [];
    items?.map((item) => {
      if (!newCategories.includes(item.category)) {
        newCategories.push(item.category);
      }
    });
    return newCategories;
  }

  function selectSortBy(value) {
    let newFilters = JSON.parse(JSON.stringify(filters));
    newFilters.sortBy = value;
    setIsSorted(false);
    setFilters(newFilters);
  }

  const selectFilterBy = useCallback(
    (category) => {
      let newFilters = JSON.parse(JSON.stringify(filters));
      newFilters.filterBy = category;
      setFilters(newFilters);
    },
    [filters]
  );

  const sortItems = useCallback(
    (sortBy) => {
      let filteredItemsSorted = JSON.parse(JSON.stringify(filteredItems));
      if (sortBy === "Most Recent") {
        filteredItemsSorted.sort((a, b) => a.order - b.order);
      } else if (sortBy === "Lowest Price") {
        filteredItemsSorted.sort((a, b) => a.cost - b.cost);
      } else if (sortBy === "Highest Price") {
        filteredItemsSorted.sort((a, b) => b.cost - a.cost);
      }
      setIsSorted(true);
      return setFilteredItems(filteredItemsSorted);
    },
    [filteredItems]
  );

  useEffect(() => {
    if (items === null) {
      console.log("items === null");
      return;
    } else {
      console.log("useEffect");
      function filterByCategory(category) {
        let newFilteredItems = null;
        if (category !== "All Products") {
          newFilteredItems = [];
          items?.map((item) => {
            if (item.category === category) {
              newFilteredItems.push(item);
            }
          });
        } else if (category === "All Products") {
          console.log("items in useEffect if: ", items);
          return setFilteredItems(items);
        }
        return setFilteredItems(newFilteredItems);
      }

      if (filters.filterBy !== null) {
        filterByCategory(filters.filterBy);
      } else {
        selectFilterBy("All Products");
        setFilteredItems(items);
      }
    }
  }, [filters, items, selectFilterBy]);

  useEffect(() => {
    if (!isSorted) {
      if (filteredItems !== null) {
        sortItems(filters.sortBy);
      }
    }
  }, [filters, sortItems, filteredItems, isSorted]);

  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        userData,
        setUserData,
        categories,
        selectFilterBy,
        filteredItems,
        selectSortBy,
        filters,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
