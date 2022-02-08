import React from "react";
import { Box } from "../styles/styledComponents";
import {
  StyledTitleGradient,
  StyledTitle,
  StyledDesktText,
  StyledDesktTextGrad,
} from "../styles/StyledText";
import { useAppContext } from "./context";
import Filter from "./Filter";
import Sort from "./Sort";
import PagesNav from "./PagesNav";
import GalleryItem from "./GalleryItem";

export default function Gallery({ redeemItem, isLoading }) {
  const { items, pages, actualPageIdx } = useAppContext();

  //console.log("items in gallery: ", items);
  //console.log("pages in gallery: ", pages);
  //console.log("actualPageIdx in gallery: ", actualPageIdx);

  let shownProducts = () => {
    if (pages === null) return;
    let count = 0;
    let totalPages = pages?.length;
    if (totalPages === 1) return (count = pages[actualPageIdx]?.length);
    count = actualPageIdx * 16 + pages[actualPageIdx]?.length;
    return count;
  };

  //let shownProducts = pages !== null ? pages[actualPageIdx]?.length : "";

  let totalProducts = () => {
    let count = 0;
    pages.map((page) => {
      page.map(() => {
        count++;
      });
    });

    return count;
  };

  return (
    <Box
      className="gallery"
      direction="column"
      alignItems="center"
      p="10rem 14.25rem 0 14.25rem"
    >
      <Box
        className="techProductsTitle"
        justifyContent="flex-start"
        alignItems="center"
        w="100%"
        p="0 0 2.5rem 0"
      >
        <StyledTitleGradient w="auto" p="0 1rem 0 0" styleType="l2">
          tech
        </StyledTitleGradient>{" "}
        <StyledTitle styleType="l2">products</StyledTitle>
      </Box>
      <Box h="3.688rem" className="filterSortWrapper">
        <Filter />
        <Sort />
        <PagesNav />
      </Box>
      <Box
        w="91.5rem"
        wrap="wrap"
        p="4rem 0 0 0"
        justifyContent="space-between"
      >
        {pages !== null
          ? pages[actualPageIdx].map((item, id) => {
              return (
                <GalleryItem
                  item={item}
                  key={id}
                  redeemItem={redeemItem}
                  isLoading={isLoading}
                />
              );
            })
          : ""}
      </Box>
      <Box justifyContent="space-between" p="4rem 0 0 0">
        <Box w="16.188rem" />
        <Box w="auto">
          <StyledDesktTextGrad w="auto">
            {shownProducts() > 0
              ? `${shownProducts()} of ${totalProducts()} `
              : ""}
          </StyledDesktTextGrad>
          <StyledDesktText color="neutral600" w="auto" p="0 0 0 0.5rem">
            products
          </StyledDesktText>
        </Box>
        <PagesNav />
      </Box>
    </Box>
  );
}
