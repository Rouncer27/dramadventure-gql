import { B2Black, colors, medWrapper } from "@/styles/helpers";
import Link from "next/link";
import styled from "styled-components";

export const Footer = ({ footerMenu }) => {
  console.log("footerMenu: ", footerMenu);
  return (
    <StyledFooter>
      <div className="wrapper">
        <div className="footer-logo"></div>
        <nav>
          <ul>
            {footerMenu.map((item, index) => {
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
        <div className="footer-social"></div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: ${colors.colorAccent};
  .wrapper {
    ${medWrapper};
  }

  .footer-logo {
    width: 10%;
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
