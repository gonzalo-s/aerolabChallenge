import styled from "styled-components";
import { TriangleDown, ChevronDown } from "@styled-icons/entypo";

const colors = {
  neutral900: "#252F3D",
  neutral600: "#7C899C",
  neutral500: "#8FA3BF",
  neutral300: "#DAE4F2",
  neutral200: "#E6EDF7",
  neutral100: "#F5F9FF",
  neutral0: "#FFFFFF",
  brandDefault: `linear-gradient(102.47deg, #176FEB -5.34%, #FF80FF 106.58%)`,
  brandHover: `linear-gradient(102.47deg, #1667D9 -5.34%, #F279F2 106.58%)`,
  brandLight: "#E5F0FF",
  brandLight2: "#CCE1FF",
  redDefault: "#E07F4F",
  redLight: "#FFDFD9",
  speciallIllustrationBg: `linear-gradient(102.47deg, #7296EB -5.34%, #EAC0E9 106.58%)`,
  specialSectionBg: `linear-gradient(102.47deg, rgba(23, 111, 235, 0.5) -5.34%, rgba(255, 128, 255, 0.5) 106.58%)`,
  specialAerolab: `linear-gradient(180deg, #FF8800 0%, #FF6600 100%)`,
  textGradientDefault: `
   background: -webkit-linear-gradient(#176FEB, #FF80FF);
   -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  `,
};

const textStyles = {
  desktopL1: `
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 150%;
  `,
};

export const TriangleDownIcon = styled(TriangleDown)`
  width: 16px;
  color: black;
`;

export const ChevronDownIcon = styled(ChevronDown)`
  width: 16px;
  color: ${colors.neutral500};
`;
export const ChevronUpIcon = styled(ChevronDown)`
  width: 16px;
  transform: rotate(90);
  color: ${colors.neutral500};
`;
export const SortWrapper = styled.div`
  display: flex;
`;

export const BalanceWrapper = styled(SortWrapper)``;

export const TextL1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isActive
      ? ``
      : `background-image: ${colors.brandDefault};
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}

  cursor: pointer;
  ${textStyles.desktopL1}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) =>
    props.isActive ? colors.brandDefault : colors.brandLight};
  border: none;
  border-radius: 12px;
  ${textStyles.desktopL1};
  color: ${colors.neutral100};
`;

export const PointsBalance = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${textStyles.desktopL1};
  left: 0px;
  top: 0px;
  border-radius: 16px;
  padding: 16px, 8px, 16px, 24px;
  color: ${colors.neutral600};
  border: 1px solid ${colors.neutral200};
  background-color: ${colors.neutral0};
`;

export const BalanceButton = styled(Button)``;
export const BalanceAddPointsButton = styled(Button)``;

export const FilterSortWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  width: 20rem;
  height: 4rem;
  background-color: green;
`;
export const FilterMenuButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  background-color: red;
`;
export const FilterMenuButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  position: relative;
  ${textStyles.desktopL1};
  border-radius: 16px;
  justify-content: space-between;
  color: ${colors.neutral600};
  border: 1px solid ${colors.neutral200};
  background-color: ${colors.neutral0};
`;

export const FilterMenuWrapper = styled.div`
  display: ${(props) => (props.isMenuVisible ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 6rem;
  left: 6rem;
  border-radius: 16px;
  border: 1px solid ${colors.neutral200};
  background-color: ${colors.neutral0};
`;

export const FilterItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  ${textStyles.desktopL1};
  height: 59px;
  width: 12rem;
  padding-left: 2rem;
  color: ${colors.neutral600};
`;

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  border: 1px solid black;
  width: 348px;
  height: 506px;
`;

export const GallImg = styled.img``;
