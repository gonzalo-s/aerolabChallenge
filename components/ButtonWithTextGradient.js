import React, { useState } from "react";
import styled from "styled-components";
import { device } from "../styles/theme"; //mobile || tablet || desktop

const Box = styled.div`
  display: ${({ display }) => display || "flex"};
  gap: ${({ gap }) => gap || ""};
  position: ${({ position }) => position || ""};
  width: ${({ w }) => w || "100%"};
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
  border: ${({ border, theme }) =>
    `${border} solid ${theme.colors.neutral200}`};
  border-bottom: ${({ bb, theme }) =>
    `${bb} solid ${theme.colors.neutral200}` || ""};
  background-color: ${({ bg }) => bg || ""}; ;
`;

const Button = styled.button`
  cursor: pointer;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "100%"};
  padding: ${({ p }) => p || ""};
  left: ${({ left }) => left || ""};
  left: ${({ right }) => right || ""};
  top: ${({ top }) => top || ""};
  bottom: ${({ bottom }) => bottom || ""};
  border-radius: ${({ radius }) => radius || "1rem"};
  display: flex;
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

const TextGradientResp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ w }) => w || "100%"};
  height: ${({ h }) => h || "auto"};
  color: ${({ theme }) => theme.colors.neutral100};
  ${({ theme }) => theme.textStyles.mobileText.l1}

  @media ${device.desktop} {
    ${({ theme }) => theme.textStyles.desktopText.l1}
  }

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

export default function ButtonWithTextGradient({
  value,
  onClick,
  textStyle,
  w,
  h,
  isActive,
  radius,
}) {
  return (
    <Box
      className="buttonAndImageWrapper"
      p="0"
      alignItems="center"
      position="relative"
      justifyContent="stretch"
      w={w} //"10.75rem"
      h={h}
    >
      <Box
        className="buttonVisualWrapper"
        position="absolute"
        left="0"
        pointerEvents="none"
        p="1rem"
      >
        <TextGradientResp isActive={isActive} textStyle={textStyle}>
          {value}
        </TextGradientResp>
      </Box>
      <Button
        radius={radius}
        border="1px"
        isActive={isActive}
        onClick={() => {
          onClick();
        }}
      />
    </Box>
  );
}
