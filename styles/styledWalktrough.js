import styled from "styled-components";
import { Box, BgGradient, ImgContainer } from "./styledComponents";
import { device } from "./theme"; //mobile || tablet || desktop

export const WalkthroughWrapper = styled(Box)`
  align-items: center;
  margin: auto;
  //background-color: yellow;
  height: 56rem;

  @media ${device.desktop} {
    height: 45.063rem;
    width: 100%;
    flex-direction: row;
    //background-color: red;
    align-items: flex-start;
  }
`;

export const WalkthroughVrImg = styled(ImgContainer)`
  width: 50%;
  position: absolute;
  top: -2rem;
  //height: 24rem;
  @media ${device.desktop} {
    display: none;
  }
`;
export const WalkthroughBgGradient = styled(BgGradient)`
  position: absolute;
  align-items: flex-end;
  justify-content: center;
  //height: 33rem;
  height: 41rem;
  padding: 0 1rem 2rem 1rem;
  border-radius: 0;
  background: ${({ theme }) => theme.colors.specialSectionBg};
  gap: 0.5rem;
  @media ${device.desktop} {
    height: 33rem;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.specialSectionBg};
    gap: 0;
  }
`;

// export const TextAndButtonWrapper = styled(Box)`
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   width: 19rem;
//   background-color: pink;
//   height: 25rem;
//   @media ${device.desktop} {
//     align-items: flex-start;
//     text-align: start;
//     width: 37.625rem;
//     height: 36.063rem;
//   }
// `;
// export const HeroTitleWrapper = styled(Box)`
//   flex-direction: column;
//   justify-content: center;
//   height: 11rem;
//   div {
//     justify-content: center;
//   }

//   @media ${device.desktop} {
//     height: 24rem;
//     div {
//       justify-content: flex-start;
//     }
//   }
// `;
// export const TechZoneButtonWrapper = styled(Box)`
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   a {
//     width: 100%;
//   }

//   @media ${device.desktop} {
//     height: auto;
//     width: 19.875rem;
//   }
// `;

// export const TechZoneTextWrapper = styled(Box)`
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: flex-start;

//   @media ${device.desktop} {
//     align-items: flex-start;
//   }
// `;

// TechZoneImgWrapper;
// export const TechZoneImgWrapper = styled(Box)`
//   flex-direction: column;
//   align-items: center;
//   background-color: green;
//   justify-content: flex-end;
//   width: 50%;
//   height: 37.5rem;
//   position: relative;
//   min-width: 45.125rem;
//   display: none;
//   @media ${device.desktop} {
//     display: flex;
//   }
// `;
