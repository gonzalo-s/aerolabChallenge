import styled from "styled-components";
import { Box } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const SortWrapper = styled(Box)`
  height: 2.688rem;
  width: auto;

  @media ${device.desktop} {
    //width: 50.625rem;
    // padding: 0 0 0 2.5rem;
  }

  .sortByText {
    display: none;
    @media ${device.desktop} {
      display: flex;
    }
  }
`;
