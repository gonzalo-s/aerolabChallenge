import styled from "styled-components";
import Logo from "../assets/aerolabLogo.svg";
//width="126" height="48" viewBox="0 0 126 48"

const Wrapper = styled.div`
  cursor: ${({ cursor }) => cursor || ""};
  display: flex;
  width: ${({ w }) => w || "126px"};
  height: ${({ h }) => h || "48px"};
  padding: ${({ p }) => p || ""};
  svg {
    width: ${({ w }) => w || "126px"};
    height: ${({ w }) => w || "48px"};
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

export default function StyledLogo({ w, h, p, bg, fill, cursor }) {
  return (
    <Wrapper w={w} h={h} p={p} bg={bg} fill={fill} cursor={cursor}>
      <Logo viewBox="0 0 126 48" />
    </Wrapper>
  );
}
