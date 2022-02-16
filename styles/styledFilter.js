import styled from "styled-components";
import { TriangleDown } from "@styled-icons/entypo";
import { Box } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const TriangleDownIcon = styled(TriangleDown)`
  width: 16px;
  color: black;
`;
export const TextAndButtonWrapper = styled(Box)`
  .filterByText {
    display: none;
    @media ${device.desktop} {
      display: flex;
    }
  }
`;
export const FilterWrapper = styled(Box)`
  position: relative;
  width: auto;
  border-right: ${({ borderRight, theme }) =>
    `${borderRight} solid ${theme.colors.neutral300}`};
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
  align-items: ${({ alignItems }) => alignItems || "center"};
  padding: ${({ p }) => p || ""};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  border-radius: ${({ radius }) => radius || "1rem"};
  color: ${({ theme }) => theme.colors.neutral600};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background-color: ${({ theme }) => theme.colors.neutral0};
  ${({ theme }) => theme.textStyles.mobileText.l1};
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopText.l1};
  }
`;

export const FilterMenuWrapper = styled.div`
  flex-direction: column;
  position: absolute;
  top: 3rem;
  right: 0;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background-color: ${({ theme }) => theme.colors.neutral0};
  z-index: 999;
`;

export const FilterItem = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  ${({ theme }) => theme.textStyles.mobileText.l1};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.neutral600};

  :hover {
    background-color: ${({ theme }) => theme.colors.neutral100};
  }

  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopText.l1};
  }
`;
