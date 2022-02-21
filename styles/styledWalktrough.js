import styled from "styled-components";
import { Box, BgGradient, ImgContainer } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const WalkthroughWrapper = styled(Box)`
  align-items: center;
  margin: auto;
  width: 96%;
  max-width: 1024px;
  height: 100rem;

  @media ${device.tablet} {
    height: 56rem;
  }
  @media ${device.desktop} {
    height: 45.063rem;
    width: 100%;
    max-width: 1464px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const WalkthroughRelativeWrapper = styled(Box)`
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  position: relative;
  //bg:green;
  @media ${device.desktop} {
  }
`;

export const WalkthroughVrImg = styled(ImgContainer)`
  position: absolute;
  top: -2rem;
  width: 375px;
  //height: 24rem;
  @media ${device.tablet} {
    width: 512px;
  }
  @media ${device.desktop} {
    display: none;
  }
`;
export const WalkthroughBgGradient = styled(BgGradient)`
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  //height: 33rem;
  padding: 0 1rem 2rem 1rem;
  border-radius: 0;
  background: ${({ theme }) => theme.colors.specialSectionBg};
  gap: 0.5rem;
  height: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    height: 41rem;
    align-items: flex-end;
    justify-content: center;
  }

  @media ${device.desktop} {
    flex-direction: row;
    height: 33rem;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.specialSectionBg};
    gap: 0;
  }
`;

// WALKCARD

export const WalkCardWrapper = styled(Box)`
  transform: rotate(0deg);
  margin: 0;
  width: 20.188rem;

  height: 25.5rem;
  @media ${device.tablet} {
    height: 29.813rem;
  }
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

export const WalkCardImgBgGradient = styled(BgGradient)`
  display: flex;
  align-items: center;
  padding: 0rem 0 4rem 0;
  width: 100%;
  height: 13.5rem;
  @media ${device.tablet} {
    height: 19.563rem;
    padding: 0;
  }
  @media ${device.desktop} {
    height: 31.125rem;
    padding: 0;
  }
`;
