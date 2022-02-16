import styled from "styled-components";
import { device } from "./theme"; //mobile || tablet || desktop

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: flex-start;
  margin: auto;
  height: 15rem;
  width: 96%;
  max-width: 1024px;

  @media ${device.desktop} {
    width: 100%;
    max-width: 1464px;
  }
`;
