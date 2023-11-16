import { B1Black, B1White, colors, medWrapper } from "@/styles/helpers";
import Link from "next/link";
import styled from "styled-components";

export const MainMenu = ({ items, callToAction }) => {
  return (
    <StyledDiv className="">
      <div className="wrapper">
        <nav>
          <ul className="main-menu">
            {(items || []).map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.destination}>{item.label}</Link>
                  {!!item.subMenuItems?.length && (
                    <ul className="main-menu__sub">
                      {item.subMenuItems.map((subItem) => {
                        return (
                          <li key={subItem.id}>
                            <Link href={subItem.destination}>
                              {subItem.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
            <li>
              <Link href={callToAction.destination.uri}>
                {callToAction.label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: ${colors.colorAccent};
  .wrapper {
    ${medWrapper};
  }

  nav {
    width: 100%;
  }

  ul.main-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;

    li {
      ${B1Black};
      position: relative;
      margin: 0.5rem;

      a {
        ${B1Black};
        padding: 0 1rem;
      }
    }

    &:hover {
      .main-menu__sub {
        transition: all 0.3s ease-out;
        visibility: visible;
        opacity: 1;
      }
    }
  }

  ul.main-menu__sub {
    position: absolute;
    width: 15rem;
    top: 100%;
    left: 0;
    background-color: ${colors.colorPrimary};
    visibility: hidden;
    opacity: 0;

    li {
      ${B1White};
      a {
        ${B1White};
      }
    }
  }
`;
