import styled from "styled-components";
import { Box } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const TechZoneWrapper = styled(Box)`
  flex-direction: column;
  background-color: green;
  height: auto;
  gap: 7rem;
  align-items: center;

  @media ${device.desktop} {
    flex-direction: row;
    background-color: red;
    align-items: flex-start;
  }
`;

export const TextAndButtonWrapper = styled(Box)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 19rem;
  background-color: pink;
  height: 25rem;
  @media ${device.desktop} {
    align-items: flex-start;
    text-align: start;
    width: 37.625rem;
    height: 36.063rem;
  }
`;
export const HeroTitleWrapper = styled(Box)`
  flex-direction: column;
  justify-content: center;
  height: 11rem;
  div {
    justify-content: center;
  }

  @media ${device.desktop} {
    height: 24rem;
    div {
      justify-content: flex-start;
    }
  }
`;
export const TechZoneButtonWrapper = styled(Box)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    width: 100%;
  }

  @media ${device.desktop} {
    height: auto;
    width: 19.875rem;
  }
`;

export const TechZoneTextWrapper = styled(Box)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media ${device.desktop} {
    align-items: flex-start;
  }
`;
