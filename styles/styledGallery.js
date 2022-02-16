import styled from "styled-components";
import { Box } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const GalleryWrapper = styled(Box)`
  gap: 4rem;
  width: 100%;
  margin: auto;

  max-width: 1024px;
  @media ${device.desktop} {
    width: 100%;
    max-width: 1464px;
  }
`;
export const FilterPagesAndSortWrapper = styled(Box)`
  height: auto;
  width: 100%;
  flex-wrap: wrap;
  .mobileSort {
    display: flex;
  }
  .desktopSort {
    display: none;
  }

  @media ${device.desktop} {
    flex-wrap: nowrap;
    height: 3.688rem;
    .mobileSort {
      display: none;
    }
    .desktopSort {
      display: flex;
    }
  }
`;

export const FilterPagesWrapper = styled(Box)`
  justify-content: space-between;
  @media ${device.desktop} {
    justify-content: space-between;
  }
`;

export const GalleryItemsWrapper = styled(Box)`
  width: 100%;
  gap: 5rem 1.5rem;
  flex-wrap: wrap;
  justify-content: space-around;

  @media ${device.desktop} {
    justify-content: space-between;
    gap: 3rem 1.5rem;
  }
`;

export const ItemWrapper = styled(Box)`
  flex-direction: column;
  width: 19.43rem;
  height: 31.625rem;
  gap: 1rem;

  @media ${device.desktop} {
    width: 21.75rem;
    height: 31.625rem;
  }
`;

export const ItemImgContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: center;
  width: 100%;
  height: 21.558rem;
  padding: ${({ p }) => p || ""};

  @media ${device.desktop} {
    height: 21.558rem;
  }
`;
