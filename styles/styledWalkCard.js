import styled from "styled-components";
import { Box } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const WalkCardWrapper = styled(Box)`
  transform: rotate(0deg);
  margin: 0;
  width: 20.188rem;
  height: 29.813rem;
  @media ${device.desktop} {
    width: 33.25rem;
    height: 42.25rem;
    transform: ${({ rotate }) => `rotate(${rotate})`};
    margin: ${({ m }) => m};
  }
`;

export const WalkCardTextWrapper = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  padding: 0 1.5rem 1.5rem 1.5rem;
  @media ${device.desktop} {
    padding: 0 7rem 1.5rem 1.5rem;
  }
`;
