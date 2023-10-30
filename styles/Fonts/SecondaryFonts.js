import * as secondary from "./secondary";
import { css } from "styled-components";

const SecondaryFonts = css`
  @font-face {
    font-family: "Prata";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${secondary.WOFF2_4}") format("woff2");
  }
`;

export default SecondaryFonts;
