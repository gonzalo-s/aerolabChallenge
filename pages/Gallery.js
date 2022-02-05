import Image from "next/image";
import {
  Box,
  GalleryItemWrapper,
  GallImgContainer,
} from "../styles/styledComponents";
import { StyledTitleGradient, StyledTitle } from "../styles/StyledText";
import { useAppContext } from "../components/context";
import Filter from "../components/Filter";
import Sort from "../components/Sort";
import PagesNav from "../components/PagesNav";

export default function Gallery({ points, redeemItem }) {
  const { items, filteredItems } = useAppContext();

  function handleOnClick(itemId) {
    redeemItem(itemId);
  }

  return (
    <Box direction="column" alignItems="center" p="10rem 14.25rem 0 14.25rem">
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
      <Box w="100%" wrap="wrap" p="4rem 0 0 0" justifyContent="space-around">
        {filteredItems?.map((item) => {
          return (
            <GalleryItemWrapper key={item._id}>
              <GallImgContainer p="2rem" w="21.75rem" h="21.558rem" bg="green">
                <Image
                  src={item.img.url}
                  alt={item.name}
                  layout="fill"
                  objectFit="contain"
                />
              </GallImgContainer>
              <div className="itemName">{item.name}</div>
              <div className="itemCategory">{item.category}</div>
              <button
                disabled={points < item.cost ? true : false}
                className="itemButton"
                onClick={() => {
                  handleOnClick(item._id);
                }}
              >
                {item.cost}
              </button>
            </GalleryItemWrapper>
          );
        })}
      </Box>
    </Box>
  );
}
