import styled from "styled-components";
import { TriangleDown } from "@styled-icons/entypo";

export const TriangleDownIcon = styled(TriangleDown)`
  width: 16px;
  color: black;
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
  position: relative;
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
  ${({ theme }) => theme.textStyles.desktopText.l1};
  border-radius: 16px;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.neutral600};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background-color: ${({ theme }) => theme.colors.neutral0};
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
  ${({ theme }) => theme.textStyles.desktopText.l1};
  height: 59px;
  width: 12rem;
  padding-left: 2rem;
  color: ${({ theme }) => theme.colors.neutral600};
`;
