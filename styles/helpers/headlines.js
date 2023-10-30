import { colors, fontSizer, fonts } from "./index";
import { css } from "styled-components";

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(4, 6.5, 76.8, 150, 4)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.08;
  letter-spacing: normal;
`;

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`;

export const H1Black = css`
  ${H1Base};
  color: ${colors.black};
`;

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(4, 5.2, 76.8, 150, 4)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: normal;
`;

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`;

export const H2Black = css`
  ${H2Base};
  color: ${colors.black};
`;

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2.5, 3.5, 76.8, 150, 2.5)}
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
`;

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`;

export const H3Black = css`
  ${H3Base};
  color: ${colors.black};
`;

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(1.8, 2, 76.8, 160, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.37;
  letter-spacing: normal;
`;

export const H4White = css`
  ${H4Base};
  color: ${colors.white};
`;

export const H4Black = css`
  ${H4Base};
  color: ${colors.black};
`;
