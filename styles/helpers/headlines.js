import { colors, fontSizer, fonts } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(3, 4.2, 76.8, 150, 3)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.34;
  letter-spacing: normal;
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

export const H1Black = css`
  ${H1Base};
  color: ${colors.black};
`

export const H1Red = css`
  ${H1Base};
  color: ${colors.colorTertiary};
`

export const H1Blue = css`
  ${H1Base};
  color: ${colors.colorPrimary};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2.6, 3.2, 76.8, 150, 2.5)};
  font-family: ${fonts.fontSecondary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2Black = css`
  ${H2Base};
  color: ${colors.black};
`

export const H2Dark = css`
  ${H2Base};
  color: ${colors.colorPrimary};
`

export const H2Red = css`
  ${H2Base};
  color: ${colors.colorTertiary};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2, 2.2, 76.8, 150, 2)}
  font-family: ${fonts.fontPrimary};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.27;
  letter-spacing: normal;
`

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`

export const H3Black = css`
  ${H3Base};
  color: ${colors.black};
`

export const H3Dark = css`
  ${H3Base};
  color: ${colors.colorPrimary};
`

export const H3Red = css`
  ${H3Base};
  color: ${colors.colorTertiary};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(1.8, 2.3, 76.8, 160, 1.8)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.48;
  letter-spacing: normal;
`

export const H4White = css`
  ${H4Base};
  color: ${colors.white};
`

export const H4Black = css`
  ${H4Base};
  color: ${colors.black};
`

export const H4Dark = css`
  ${H4Base};
  color: #212326;
`
