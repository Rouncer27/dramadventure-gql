import { colors, fontSizer, fonts } from "./index";
import { css } from "styled-components";

const Btn1Base = css`
  ${fontSizer(1.4, 1.8, 76.8, 150, 1.8)};
  position: relative;
  display: inline-block;
  padding: 0.75rem 2.5rem;
  transition: all 0.3s ease;
  border-radius: 0;
  border: 0.1rem solid ${colors.colorSecondary};
  background-color: ${colors.colorSecondary};
  color: ${colors.white};
  font-family: ${fonts.fontPrimary};
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: center;
  text-transform: uppercase;
  outline: none;

  &:focus {
    transition: all 0.35s ease-in-out;
  }

  &:hover {
    cursor: pointer;
    color: ${colors.colorAccent};
    background-color: ${colors.black};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;

    &:hover {
      color: ${colors.colorAccent};
      background-color: ${colors.black};
      cursor: not-allowed;
    }
  }
`;

export const Btn1One = css`
  ${Btn1Base};
`;

export const Btn1Two = css`
  ${Btn1Base};
  background-color: ${colors.white};
  color: ${colors.colorSecondary};
`;
