import * as primary from "./primary"
import { css } from "styled-components"

const PrimaryFonts = css`
  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4}") format("woff2"),
      url("${primary.WOFF_4}") format("woff");
  }

  @font-face {
    font-family: "Barlow";
    font-style: italic;
    font-weight: 400;
    src: local(""), url("${primary.WOFF2_4I}") format("woff2"),
      url("${primary.WOFF_4I}") format("woff");
  }

  @font-face {
    font-family: "Barlow";
    font-style: normal;
    font-weight: 800;
    src: local(""), url("${primary.WOFF2_8}") format("woff2"),
      url("${primary.WOFF_8}") format("woff");
  }

  @font-face {
    font-family: "Barlow";
    font-style: italic;
    font-weight: 600;
    src: local(""), url("${primary.WOFF2_8I}") format("woff2"),
      url("${primary.WOFF_8I}") format("woff");
  }
`

export default PrimaryFonts
