import styled from "styled-components";
import { Box } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const SortWrapper = styled(Box)`
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  @media ${device.tablet} {
    height: 2.688rem;
    width: auto;
  }
  @media ${device.desktop} {
    height: 2.688rem;
    width: auto;
    width: 50.625rem;
  }

  .sortByText {
    display: none;
    @media ${device.desktop} {
      display: flex;
    }
  }
`;

export const SortButtonsWrapper = styled(Box)`
  align-items: stretch;
  justify-content: space-between;
  flex-direction: column;
  height: auto;

  gap: 1rem;
  button {
    height: 40px;
    padding: 0;
  }
  @media ${device.tablet} {
    flex-direction: row;
    height: 43px;
    padding: 0;
  }
  @media ${device.desktop} {
    flex-direction: row;
    height: 43px;
    padding: 0;
  }
`;
