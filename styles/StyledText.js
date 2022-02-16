import styled from "styled-components";
import { device } from "./theme"; //mobile || tablet || desktop

// TEXT
export const TextL1Default = styled.div`
  ${({ theme }) => theme.textStyles.mobileText.l1}
  width: ${({ w }) => w || "50%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.neutral900};
  padding: ${({ p }) => p || ""};
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopText.l1}
  }
`;

export const TextL1AllCaps = styled.div`
  ${({ theme }) => theme.textStyles.mobileText.l1AllCaps}
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.neutral100};
  padding: ${({ p }) => p || ""};
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopText.l1AllCaps}
  }
`;
export const TextL2AllCaps = styled.div`
  ${({ theme }) => theme.textStyles.mobileText.l2AllCaps}
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.neutral100};
  padding: ${({ p }) => p || ""};
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopText.l2AllCaps}
  }
`;
// TEXT GRADIENT

export const TextL1DefaultGrad = styled.div`
  ${({ theme }) => theme.textStyles.mobileText.l1}
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopText.l1}
  }
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  padding: ${({ p }) => p || ""};
  background-image: ${({ theme }) => theme.colors.brandDefault};
  background-size: 100%;
  ${` -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}
`;

// TITLE

export const TitleL1Default = styled.div`
  ${({ theme }) => theme.textStyles.mobileTitles.l1}
  width: ${({ w }) => w || "50%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.neutral900};
  padding: ${({ p }) => p || ""};
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopTitles.l1}
  }
`;

export const TitleL2Default = styled.div`
  ${({ theme }) => theme.textStyles.mobileTitles.l2}
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopTitles.l2}
  }
  width: ${({ w }) => w || "50%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.neutral900};
  padding: ${({ p }) => p || ""};
`;
// TITLE GRADIENT
export const TitleGradientL1 = styled.div`
  ${({ theme }) => theme.textStyles.mobileTitles.l1}
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopTitles.l1}
  }
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  padding: ${({ p }) => p || ""};
  background-image: ${({ theme }) => theme.colors.brandDefault};
  background-size: 100%;
  ${` -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}
`;
export const TitleGradientL2 = styled.div`
  ${({ theme }) => theme.textStyles.mobileTitles.l2}
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopTitles.l2}
  }
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  padding: ${({ p }) => p || ""};
  background-image: ${({ theme }) => theme.colors.brandDefault};
  background-size: 100%;
  ${` -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}
`;
export const TitleGradientL3 = styled.div`
  ${({ theme }) => theme.textStyles.mobileTitles.l3}
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopTitles.l3}
  }
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  padding: ${({ p }) => p || ""};
  background-image: ${({ theme }) => theme.colors.brandDefault};
  background-size: 100%;
  ${` -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}
`;
