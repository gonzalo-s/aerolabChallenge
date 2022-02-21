import React, { useState, useContext, useEffect, useCallback } from "react";
const AppContext = React.createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [items, setItems] = useState(null);
  const [userData, setUserData] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);
  const [pages, setPages] = useState(null);
  const [actualPageIdx, setActualPageIdx] = useState(0);

  const [filters, setFilters] = useState({
    filterBy: null, // category
    sortBy: "Most Recent", // Most Recent | Lowest Price | Higher Price
  });
  const [isSorted, setIsSorted] = useState(true);

  function categories() {
    let newCategories = [];
    items?.map((item) => {
      if (!newCategories.includes(item.category)) {
        newCategories.push(item.category);
      }
    });
    return newCategories;
  }

  function selectPage(pageNumber) {
    setActualPageIdx(parseInt(pageNumber));
  }

  function selectSortBy(value) {
    let newFilters = JSON.parse(JSON.stringify(filters));
    newFilters.sortBy = value;
    setActualPageIdx(0);
    setIsSorted(false);
    setFilters(newFilters);
  }

  const selectFilterBy = useCallback(
    (category) => {
      let newFilters = JSON.parse(JSON.stringify(filters));
      newFilters.filterBy = category;
      newFilters.sortBy = "Most Recent"; //default
      setActualPageIdx(0);
      setFilters(newFilters);
    },
    [filters]
  );
  const paginate = useCallback(
    (itemsArr) => {
      let itemsPerPage = 16;
      let paginatedItems = [];
      let itemsArrMaxIdx = itemsArr.length - 1;
      let start = 0;
      if (itemsArr.length <= itemsPerPage)
        return paginatedItems.push(itemsArr), setPages(paginatedItems);
      function loop() {
        if (start >= itemsArrMaxIdx) return;
        const newPage = itemsArr.slice(start, start + itemsPerPage);
        paginatedItems.push(newPage);
        start += itemsPerPage;
        loop();
      }
      loop();
      return setPages(paginatedItems);
    },
    [setPages]
  );

  const sortItemsPaginateSetActualPage = useCallback(
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
      setFilteredItems(filteredItemsSorted);
      paginate(filteredItemsSorted);
      setActualPageIdx(0);
    },
    [filteredItems, paginate]
  );

  useEffect(() => {
    // filters items by category change, on load it defaults to "all products"
    if (items === null) return;
    if (filters.filterBy === null) return selectFilterBy("All Products");
    //filter by category
    function filterByCategory(category) {
      if (category === "All Products") {
        setFilteredItems(items);
      } else {
        let newFilteredItems = items.filter(
          (item) => category === item.category
        );
        setFilteredItems(newFilteredItems);
      }
    }
    setIsSorted(false);
    filterByCategory(filters.filterBy);

    //sortItemsPaginateSetActualPage
  }, [filters, items, selectFilterBy]);

  useEffect(() => {
    if (isSorted) return;
    sortItemsPaginateSetActualPage(filters.sortBy);
  }, [filters, isSorted, sortItemsPaginateSetActualPage]);
  return (
    <AppContext.Provider
      value={{
        items,
        setItems,
        userData,
        setUserData,
        categories,
        selectFilterBy,
        // filteredItems,
        selectSortBy,
        filters,
        pages,
        selectPage,
        actualPageIdx,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
