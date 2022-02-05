import React from "react";
import styled from "styled-components";
import { ChevronSmallLeft, ChevronSmallRight } from "@styled-icons/entypo";

const Box = styled.div`
  box-sizing: border-box;
  display: ${({ display }) => display || "flex"};
  gap: ${({ gap }) => gap || ""};
  position: ${({ position }) => position || ""};
  width: ${({ w }) => w || "100%"};
  max-width: ${({ maxW }) => maxW || ""};
  height: ${({ h }) => h || "100%"};
  padding: ${({ p }) => p || ""};
  margin: ${({ m }) => m || ""};
  left: ${({ left }) => left || ""};
  right: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  flex-direction: ${({ direction }) => direction || "row"};
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
  background-color: ${({ bg }) => bg || ""};
  transform: ${({ rotate }) => `rotate(${rotate})` || "rotate(0deg)"};
  overflow: ${({ overflow }) => overflow || ""};
  z-index: ${({ zIndex }) => zIndex || ""};
`;
const Button = styled.button`
  cursor: ${({ isActive }) => (isActive ? "pointer" : "")};
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "2rem"};
  padding: ${({ p }) => p || ""};
  left: ${({ left }) => left || ""};
  left: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  border-radius: ${({ radius }) => radius || "1rem"};
  gap: ${({ gap }) => gap || ""};
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "center"};
  justify-content: ${({ justifyContent }) => justifyContent || "space-between"};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.brandLight : theme.colors.neutral200};
  border: none;
  ${({ theme }) => theme.textStyles.desktopText.l1};
  color: ${({ theme }) => theme.colors.neutral100};
  position: ${({ position }) => {
    position || "";
  }};

  // bg active ? #E5F0FF brandLight : #E6EDF7 neutral200
  // fill active ? #8FA3BF neutral500 : #DAE4F2 neutral300
`;
const ChevronLeftIcon = styled(ChevronSmallLeft)`
  width: ${({ w }) => w || ""};
  height: ${({ h }) => h || ""};
  fill: ${({ isActive, theme }) =>
    isActive ? theme.colors.neutral500 : theme.colors.neutral300};
`;
const ChevronRightIcon = styled(ChevronSmallRight)`
  width: ${({ w }) => w || ""};
  height: ${({ h }) => h || ""};
  fill: ${({ isActive, theme }) =>
    isActive ? theme.colors.neutral500 : theme.colors.neutral300};
`;

export default function ChevronButton({ isActive, arrowLR, onClick }) {
  if (arrowLR === "left") {
    return (
      <Button
        onClick={isActive ? onClick : () => {}}
        isActive={isActive}
        radius="0.5rem"
        w="2rem"
        h="2rem"
      >
        <ChevronLeftIcon
          isActive={isActive}
          h="2.5rem"
          w="2.5rem"
          viewBox="0 0 20 20"
        />{" "}
      </Button>
    );
  }

  return (
    <Button
      onClick={isActive ? onClick : () => {}}
      isActive={isActive}
      radius="0.5rem"
      w="2rem"
      h="2rem"
    >
      <ChevronRightIcon
        isActive={isActive}
        h="2.5rem"
        w="2.5rem"
        viewBox="0 0 20 20"
      />
    </Button>
  );
}
