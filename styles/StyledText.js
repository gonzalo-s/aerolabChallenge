import styled from "styled-components";

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
export const StyledTitleGradient = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || "center"};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  padding: ${({ p }) => p || ""};
  ${({ theme, styleType }) =>
    styleType
      ? theme.textStyles.desktopTitles[styleType]
      : theme.textStyles.desktopTitles.l1}
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
