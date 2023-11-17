import { B2Black, colors, medWrapper } from "@/styles/helpers";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";

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
            <li>
              <a target="_blank" rel="noopener" href={footerData.instagramUrl}>
                Instagram
              </a>
            </li>
            <li>
              <a target="_blank" rel="noopener" href={footerData.youtubeUrl}>
                Youtube
              </a>
            </li>
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
