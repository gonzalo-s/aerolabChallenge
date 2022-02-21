import styled from "styled-components";
import { TriangleDown, ChevronDown, ChevronUp } from "@styled-icons/entypo";
import { device } from "./theme";

export const Box = styled.div`
  box-sizing: border-box;
  flex-wrap: ${({ wrap }) => wrap || ""};
  display: ${({ display }) => display || "flex"};
  gap: ${({ gap }) => gap || ""};
  position: ${({ position }) => position || ""};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  max-width: ${({ maxW }) => maxW || ""};
  min-width: ${({ minW }) => minW || ""};
  padding: ${({ p }) => p || ""};
  margin: ${({ m }) => m || ""};
  left: ${({ left }) => left || ""};
  right: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  flex-direction: ${({ direction }) => direction || "row"};
  order: ${({ order }) => order || 0};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  pointer-events: ${({ pointerEvents }) => pointerEvents || ""};
  border: ${({ border }) => (border ? `solid` : "")};
  border-width: ${({ border }) => border || ""};
  border-color: ${({ borderColor, theme }) =>
    theme.colors[borderColor] || theme.colors.neutral200};
  border-radius: ${({ radius }) => radius || ""};
  border-bottom: ${({ bb, theme }) =>
    bb ? `${bb} solid ${theme.colors.neutral200}` : ""};
  border-top: ${({ bt, theme }) =>
    bt ? `${bt} solid ${theme.colors.neutral300}` : ""};
  background-color: ${({ bg }) => bg || ""};
  background-color: ${({ bgTheme, theme }) => theme.colors[bgTheme] || ""};
  transform: ${({ rotate }) => `rotate(${rotate})` || "rotate(0deg)"};
  overflow: ${({ overflow }) => overflow || ""};
  z-index: ${({ zIndex }) => zIndex || ""};
  box-shadow: ${({ theme, boxShadow }) =>
    boxShadow ? `0 0 7px ${theme.colors.neutral200}` : ""};
`;

export const Main = styled.main`
  display: ${({ display }) => display || "flex"};
  flex-wrap: ${({ wrap }) => wrap || "nowrap"};
  flex-direction: ${({ direction }) => direction || "row"};
  gap: ${({ gap }) => gap || ""};
  width: 100%;
  gap: ${({ gap }) => gap || ""};
  max-width: 1920px;
  margin: auto;
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "2rem"};
  padding: ${({ p }) => p || ""};
  left: ${({ left }) => left || ""};
  left: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  border-radius: ${({ radius }) => radius || "1rem"};
  gap: ${({ gap }) => gap || ""};
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.brandDefault : theme.colors.brandLight};
  border: none;
  ${({ theme }) => theme.textStyles.desktopText.l1};
  color: ${({ theme }) => theme.colors.neutral100};
  position: ${({ position }) => {
    position || "";
  }};
`;
export const BgGradient = styled(Box)`
  border-radius: ${({ radius }) => radius || "1rem"};
  background: ${({ bgGradient, theme }) =>
    bgGradient ? theme.colors[bgGradient] : theme.colors.brandDefault};
  border: none;
  cursor: ${({ cursor }) => cursor || ""};
`;

export const Wrapper = styled(Box)``;

export const SpanBlock = styled.span`
  display: block;
`;

export const TriangleDownIcon = styled(TriangleDown)`
  width: 16px;
  color: black;
`;

export const ChevronDownIcon = styled(ChevronDown)`
  width: ${({ w }) => w || ""};
  height: ${({ h }) => h || ""};
  color: ${({ theme }) => theme.colors.neutral500};
`;

export const ChevronUpIcon = styled(ChevronUp)`
  width: ${({ w }) => w || ""};
  height: ${({ h }) => h || ""};
  color: ${({ theme }) => theme.colors.neutral500};
`;

export const PointsBalance = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  position: ${({ position }) => {
    position || "";
  }};
  ${({ theme }) => theme.textStyles.desktopText.l1};
  left: 0px;
  top: 0px;
  color: ${({ theme }) => theme.colors.neutral600};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  background-color: ${({ theme }) => theme.colors.neutral0};
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.neutral200};
`;

export const BalanceMenuWrapper = styled(Box)`
  z-index: 999;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: ${({ w }) => w || ""};
  height: ${({ h }) => h || ""};
  background-color: ${({ theme }) => theme.colors.neutral0};
  border: 1px solid ${({ theme }) => theme.colors.neutral200};
  border-radius: 1rem;
  box-shadow: 0 0 8px ${({ theme }) => theme.colors.neutral200};
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  padding: ${({ p }) => p || ""};
  background-color: ${({ bg }) => bg || ""};
  border: ${({ border, theme }) =>
    `${border} solid ${theme.colors.neutral200}`};
  cursor: ${({ cursor }) => cursor || ""};
`;

export const WavePattern = styled(Box)`
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0dGVybiBpZD0icGF0dGVybi13YXZlcyIgeD0iMCIgeT0iMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjU2NiIgaGVpZ2h0PSIyNyIgdmlld0JveD0iMCAwIDU2NiAyNyI+CjxwYXRoIGlkPSd3YXZlJyBkPSJNMSAxMy41QzMyLjMzMzMgLTMuMTY2NjcgNjMuNjY2NyAtMy4xNjY2NyA5NSAxMy41QzEyNi4zMzMgMzAuMTY2NyAxNTcuNjY3IDMwLjE2NjcgMTg5IDEzLjVDMjIwLjMzMyAtMy4xNjY2NyAyNTEuNjY3IC0zLjE2NjY3IDI4MyAxMy41QzMxNC4zMzMgMzAuMTY2NyAzNDUuNjY3IDMwLjE2NjcgMzc3IDEzLjVDNDA4LjMzMyAtMy4xNjY2NyA0MzkuNjY3IC0zLjE2NjY3IDQ3MSAxMy41QzUwMi4zMzMgMzAuMTY2NyA1MzMuNjY3IDMwLjE2NjcgNTY1IDEzLjUiIHN0cm9rZT0iI0Y1RjlGRiIgc3Ryb2tlLXdpZHRoPSIyIi8+CjwvcGF0dGVybj4KPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuLXdhdmVzKSI+PC9yZWN0Pgo8L3N2Zz4KCg==");
`;

export const A = styled.a`
  text-decoration: none;
`;
