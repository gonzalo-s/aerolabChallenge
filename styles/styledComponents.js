import styled from "styled-components";
import { TriangleDown, ChevronDown } from "@styled-icons/entypo";

export const Box = styled.div`
  display: flex;
  gap: ${({ gap }) => gap || ""};
  position: ${({ position }) => position || ""};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  padding: ${({ p }) => p || ""};
  margin: ${({ m }) => m || "auto"};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};

  border: ${({ border, theme }) =>
    `${border} solid ${theme.colors.neutral200}`};
  border-bottom: ${({ bb, theme }) =>
    `${bb} solid ${theme.colors.neutral200}` || ""};
  background-color: ${({ bg }) => bg || ""}; ;
`;

export const TriangleDownIcon = styled(TriangleDown)`
  width: 16px;
  color: black;
`;

export const ChevronDownIcon = styled(ChevronDown)`
  width: 3rem;
  color: ${({ theme }) => theme.colors.neutral500};
`;
export const ChevronUpIcon = styled(ChevronDown)`
  //width: 16px;
  transform: rotate(90);
  color: ${({ theme }) => theme.colors.neutral500};
`;
export const SortWrapper = styled.div`
  display: flex;
`;
export const TextL1Grad = styled.div`
  ${({ theme }) => theme.textStyles.desktopText.l1}
  width: ${({ w }) => w || "50%"};
  height: ${({ h }) => h || "auto"};
`;
export const TextL1 = styled.text`
  ${({ theme }) => theme.textStyles.desktopText.l1}
  width: ${({ w }) => w || "50%"};
  height: ${({ h }) => h || "auto"};
`;
export const TextGradient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${({ theme }) => theme.colors.brandDefault};
  background-size: 100%;
  ${` -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}
`;

export const Button = styled.button`
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "2rem"};
  border-radius: ${({ radius }) => radius || "1rem"};
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.brandDefault : theme.colors.brandLight};
  border: none;
  ${({ theme }) => theme.textStyles.desktopText.l1};
  color: ${({ theme }) => theme.colors.neutral100};

  div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ isActive, theme }) =>
      isActive
        ? ``
        : `background-image: ${theme.colors.brandDefault};
      background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}

    cursor: pointer;
    ${({ theme }) => theme.textStyles.desktopText.l1}
  }
`;
export const PointsBalance = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: ${({ position }) => {
    position || "";
  }};
  ${({ theme }) => theme.textStyles.desktopText.l1};
  left: 0px;
  top: 0px;
  color: ${({ theme }) => theme.colors.neutral600};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background-color: ${({ theme }) => theme.colors.neutral0};
`;

export const BalanceMenuWrapper = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 312px;
  height: 404px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: 1rem;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.neutral200};
`;

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
  ${({ theme }) => theme.textStyles.desktopText.l1};
  border-radius: 16px;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.neutral600};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background-color: ${({ theme }) => theme.colors.neutral0};
`;

export const FilterMenuWrapper = styled.div`
  display: ${(props) => (props.isMenuVisible ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  top: 6rem;
  left: 6rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background-color: ${({ theme }) => theme.colors.neutral0};
`;

export const FilterItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.textStyles.desktopText.l1};
  height: 59px;
  width: 12rem;
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.neutral600};
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

export const ImgContainer = styled.div`
  display: flex;
  align-items: stretch;

  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  padding: ${({ p }) => p || ""};
  cursor: ${({ cursor }) => cursor || ""};
`;
