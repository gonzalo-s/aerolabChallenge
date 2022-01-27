import React from "react";
import styled from "styled-components";
import Logo from "../assets/logoGrad.svg";
import LogoInvert from "../assets/logoGradInvert.svg";

const Circle = styled.circle`
  cursor: ${({ cursor }) => cursor || ""};
  display: flex;
  width: ${({ w }) => w || "32px"};
  height: ${({ w }) => w || "32px"};
  padding: ${({ p }) => p || ""};
  svg {
    width: ${({ w }) => w || "32px"};
    height: ${({ w }) => w || "32px"};
  }
  path {
    fill: ${({ bg }) => bg || ""};
  }
  g {
    path {
      fill: ${({ fill }) => fill || ""};
    }
  }
`;

export default function StyledLogo({ w, p, bg, fill, cursor, invert }) {
  let invertState = invert || false;

  return (
    <Circle w={w} p={p} bg={bg} fill={fill} cursor={cursor}>
      {invertState ? (
        <LogoInvert viewBox="0 0 256 256" />
      ) : (
        <Logo viewBox="0 0 256 256" />
      )}
    </Circle>
  );
}
