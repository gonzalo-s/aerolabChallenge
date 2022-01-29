import styled from "styled-components";
import { TriangleDown, ChevronDown, ChevronUp } from "@styled-icons/entypo";

export const Box = styled.div`
  display: ${({ display }) => display || "flex"};
  gap: ${({ gap }) => gap || ""};
  position: ${({ position }) => position || ""};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  padding: ${({ p }) => p || ""};
  margin: ${({ m }) => m || ""};
  left: ${({ left }) => left || ""};
  right: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  pointer-events: ${({ pointerEvents }) => pointerEvents || ""};
  border: ${({ border, theme }) =>
    `${border} solid ${theme.colors.neutral200}`};
  border-bottom: ${({ bb, theme }) =>
    `${bb} solid ${theme.colors.neutral200}` || ""};
  background-color: ${({ bg }) => bg || ""}; ;
`;

export const SimpleButton = styled.button`
  cursor: pointer;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "2rem"};
  padding: ${({ p }) => p || ""};
  left: ${({ left }) => left || ""};
  left: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  border-radius: ${({ radius }) => radius || "1rem"};
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  background: ${({ bg, theme }) => bg || theme.colors.brandDefault};
  border: ${({ border, theme }) =>
    `${border} solid ${theme.colors.neutral300}`};
  ${({ theme }) => theme.textStyles.desktopText.l1};
  color: ${({ theme }) => theme.colors.neutral100};
  position: ${({ position }) => {
    position || "";
  }};
`;

export const Button = styled.button`
  cursor: pointer;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "2rem"};
  padding: ${({ p }) => p || ""};
  left: ${({ left }) => left || ""};
  left: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  border-radius: ${({ radius }) => radius || "1rem"};
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.brandDefault : theme.colors.brandLight};
  border: none;
  ${({ theme }) => theme.textStyles.desktopText.l1};
  color: ${({ theme }) => theme.colors.neutral100};
  position: ${({ position }) => {
    position || "";
  }};
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

export const Wrapper = styled(Box)``;

export const SpanBlock = styled.span`
  display: block;
  background-color: green;
`;

export const TriangleDownIcon = styled(TriangleDown)`
  width: 16px;
  color: black;
`;

export const ChevronDownIcon = styled(ChevronDown)`
  width: ${({ w }) => w || ""};
  height: ${({ h }) => h || ""};
  color: ${({ theme }) => theme.colors.neutral500};
`;
export const ChevronUpIcon = styled(ChevronUp)`
  width: ${({ w }) => w || ""};
  height: ${({ h }) => h || ""};
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
export const TextL1 = styled.div`
  display: flex;
  ${({ theme }) => theme.textStyles.desktopText.l1}
  width: ${({ w }) => w || "50%"};
  height: ${({ h }) => h || "auto"};
`;
export const TextGradient = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  ${({ theme }) => theme.textStyles.desktopText.l1}
  background-image: ${({ theme }) => theme.colors.brandDefault};
  background-size: 100%;
  ${` -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}
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
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.neutral200};
`;

export const BalanceMenuWrapper = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: ${({ w }) => w || ""};
  height: ${({ h }) => h || ""};
  background-color: ${({ theme }) => theme.colors.neutral0};
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
  // display: ${(props) => (props.isMenuVisible ? "flex" : "none")};
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
