import { fontSizer, fonts, colors } from "./index";
import { css } from "styled-components";

// Body copy ONE //
export const B1Base = css`
  ${fontSizer(1.6, 1.9, 76.8, 150, 1.8)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.42;
  letter-spacing: normal;
`;

export const B1Black = css`
  ${B1Base};
  color: ${colors.black};
`;

export const B1White = css`
  ${B1Base};
  color: ${colors.white};
`;

// Body copy TWO //
export const B2Base = css`
  ${fontSizer(1.4, 1.7, 76.8, 150, 1.7)};
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
`;

export const B2Black = css`
  ${B2Base};
  color: ${colors.black};
`;

export const B2White = css`
  ${B2Base};
  color: ${colors.white};
`;

// Body copy THREE //
export const B3Base = css`
  ${fontSizer(2.2, 3, 76.8, 150, 2)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.47;
  letter-spacing: normal;
`;

export const B3Black = css`
  ${B3Base};
  color: ${colors.black};
`;

export const B3White = css`
  ${B3Base};
  color: ${colors.white};
`;
