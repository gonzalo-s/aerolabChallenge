import styled from "styled-components";
import { device } from "./theme"; //mobile || tablet || desktop

export const TextGradientResp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) => theme.textStyles.desktopText.l1}
  ${({ isActive, theme }) =>
    isActive
      ? ``
      : `background-image: ${theme.colors.brandDefault};
      background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`};
`;

export const StyledDesktText = styled.div`
  ${({ theme, styleType }) =>
    styleType
      ? theme.textStyles.desktopText[styleType]
      : theme.textStyles.desktopText.l1}
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.neutral100};
  padding: ${({ p }) => p || ""};
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

export const StyledTitle = styled.div`
  ${({ theme, styleType }) =>
    styleType
      ? theme.textStyles.desktopTitles[styleType]
      : theme.textStyles.desktopTitles.l1}
  width: ${({ w }) => w || "50%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.neutral900};
  padding: ${({ p }) => p || ""};
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
export const StyledTitleGradient = styled.div`
  ${({ theme }) => theme.textStyles.desktopTitles.l1}
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

export const StyledDesktTextGrad = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  padding: ${({ p }) => p || ""};
  ${({ theme }) => theme.textStyles.desktopText.l1}
  background-image: ${({ theme }) => theme.colors.brandDefault};
  background-size: 100%;
  ${` -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;`}
`;
export const TextL1DefaultGrad = styled.div`
  ${({ theme }) => theme.textStyles.mobileText.l1}
  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopText.l1}
  }
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
