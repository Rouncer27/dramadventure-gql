import * as tertiary from "./tertiary"
import { css } from "styled-components"

const TertiaryFonts = css`
  @font-face {
    font-family: "Ubuntu";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${tertiary.WOFF2_4}") format("woff2"),
      url("${tertiary.WOFF_4}") format("woff");
  }

  @font-face {
    font-family: "Ubuntu";
    font-style: italic;
    font-weight: 400;
    src: local(""), url("${tertiary.WOFF2_4I}") format("woff2"),
      url("${tertiary.WOFF_4I}") format("woff");
  }
`

export default TertiaryFonts
