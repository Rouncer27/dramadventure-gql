import { colors } from "./index"
import { fontSizer } from "./index"

export const Nav1Base = `
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.67;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.colorShad};
  }

  &:focus {
    outline: 0.1rem solid ${colors.colorPrimary};
    transition: all 0.35s ease-in-out;
  }
`
export const Nav1White = `
  ${Nav1Base};
  color: ${colors.white};
`

export const Nav1Black = `
  ${Nav1Base};
  color: ${colors.black};
`

export const Nav1Blue = `
  ${Nav1Base};
  color: ${colors.colorSecondary};
`

export const Nav2Base = `
  ${fontSizer(1.6, 2.2, 76.8, 150, 1.6)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.25;
  letter-spacing: normal;
  transition: all 0.3s ease;
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0 0.5rem ${colors.colorSecondary};
  }

  &:hover {
    color: ${colors.colorTertiary};
  }
`

export const Nav2White = `
  ${Nav2Base};
  color: ${colors.white};
`

export const Nav2Black = `
  ${Nav2Base};
  color: ${colors.black};
`
