import { B2Black, colors, medWrapper } from "@/styles/helpers";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

import Instagram from "../Icons/Instagram";
import Youtube from "../Icons/Youtube";

export const Footer = ({ footerData }) => {
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="footer-logo">
          <div className="logo-wrap">
            <Image
              src={footerData.footerLogo.sourceUrl}
              height={500}
              width={500}
              alt={footerData.footerLogo.altText}
              objectFit="cover"
            />
          </div>
        </div>
        <nav>
          <ul>
            {footerData.footerMenuItems.map((item, index) => {
              console.log("item", item);
              return (
                <li key={index}>
                  <Link href={item.menuItem.destination.uri}>
                    {item.menuItem.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="footer-social">
          <ul>
            <StyledIcon>
              <a
                target="_blank"
                rel="noreferrer"
                title="Follow us on YouTube - Link will open in new window"
                href={footerData.youtubeUrl}
              >
                <i>
                  <Youtube />
                  <span className="visuallyhidden">YouTube</span>
                </i>
              </a>
            </StyledIcon>
            <StyledIcon>
              <a
                target="_blank"
                rel="noreferrer"
                title="Follow us on Linkedin - Link will open in new window"
                href={footerData.instagramUrl}
              >
                <i>
                  <Instagram />
                  <span className="visuallyhidden">Instagram</span>
                </i>
              </a>
            </StyledIcon>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${colors.colorAccent};
  .wrapper {
    ${medWrapper};
    align-items: center;
  }

  .footer-logo {
    width: 10%;

    .logo-wrap {
      width: 5rem;
    }
  }

  nav {
    width: 80%;

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;

      li {
        margin: 0 2.5rem;

        a {
          ${B2Black};
          text-transform: uppercase;
        }
      }
    }
  }

  .footer-social {
    width: 10%;
  }
`;

const StyledIcon = styled.span`
  display: inline-block;
  margin-right: 0;
  margin-left: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
    background-color: ${colors.colorSecondary};

    @media (min-width: 768px) {
      width: 4rem;
      height: 4rem;
    }
    @media (min-width: 1025px) {
      width: 3rem;
      height: 3rem;
    }

    &:focus {
      outline: 0.4rem solid ${colors.colorPrimary};
      transition: outline-width 0.35s ease-in-out;
    }

    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    svg {
      display: block;
      width: 1.75rem;
      height: 1.75rem;
      margin: auto;
      transition: all 0.3s ease-out;
      fill: ${colors.white};

      @media (min-width: 768px) {
        width: 2rem;
        height: 2rem;
      }
      @media (min-width: 1025px) {
        width: 2rem;
        height: 2rem;
      }
    }

    &:hover {
      svg {
        fill: ${colors.colorAccent};
      }
    }
  }
`;
