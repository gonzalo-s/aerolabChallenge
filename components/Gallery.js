import React from "react";
import { Box } from "../styles/styledComponents";
import {
  TextL1Default,
  TextL1DefaultGrad,
  TitleGradientL2,
  TitleL2Default,
} from "../styles/StyledText";
import { useAppContext } from "./context";
import Filter from "./Filter";
import Sort from "./Sort";
import PagesNav from "./PagesNav";
import GalleryItem from "./GalleryItem";

export default function Gallery({ redeemItem, isLoading }) {
  const { items, pages, actualPageIdx } = useAppContext();

  let shownProducts = () => {
    if (pages === null) return;
    let count = 0;
    let totalPages = pages?.length;
    if (totalPages === 1) return (count = pages[actualPageIdx]?.length);
    count = actualPageIdx * 16 + pages[actualPageIdx]?.length;
    return count;
  };

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
      maxW="76.25%"
      w="100%"
      m="auto"
    >
      <Box
        className="techProductsTitle"
        justifyContent="flex-start"
        alignItems="center"
        w="100%"
        p="0 0 2.5rem 0"
      >
        <TitleGradientL2 w="auto" p="0 1rem 0 0">
          tech
        </TitleGradientL2>{" "}
        <TitleL2Default styleType="l2">products</TitleL2Default>
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
          <TextL1DefaultGrad w="auto">
            {shownProducts() > 0
              ? `${shownProducts()} of ${totalProducts()} `
              : ""}
          </TextL1DefaultGrad>
          <TextL1Default color="neutral600" w="auto" p="0 0 0 0.5rem">
            products
          </TextL1Default>
        </Box>
        <PagesNav />
      </Box>
    </Box>
  );
}
