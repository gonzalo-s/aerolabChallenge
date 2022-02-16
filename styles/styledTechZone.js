import styled from "styled-components";
import { Box, BgGradient } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const TechZoneWrapper = styled(Box)`
  flex-direction: column;
  height: auto;
  gap: 7rem;
  align-items: center;
  width: 100%;
  margin: auto;
  max-width: 96%;
  @media ${device.desktop} {
    max-width: 76.25%;
  }
  @media ${device.desktop} {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const TextAndButtonWrapper = styled(Box)`
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 19rem;
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

export const TechZoneBgGradient = styled(BgGradient)`
  height: 37.5rem;
  border-radius: 6.5rem;
  position: absolute;
  bottom: 0;
  align-items: flex-end;
  justify-content: flex-end;

  @media ${device.desktop} {
    background: ${({ theme }) => theme.colors.specialSectionBg};
  }
`;

export const TechZoneImgWrapper = styled(Box)`
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  height: 37.5rem;
  position: relative;
  min-width: 45.125rem;
  display: none;
  @media ${device.desktop} {
    display: flex;
  }
`;
