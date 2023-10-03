import { medWrapper } from "@/styles/helpers";
import Link from "next/link";
import styled from "styled-components";

export const MainMenu = ({ items }) => {
  console.log("MainMenu: ", items);
  return (
    <StyledDiv className="">
      <div className="wrapper">
        <nav>
          <ul>
            {(items || []).map((item) => {
              return (
                <li key={item.id}>
                  <Link href={item.destination}>{item.label}</Link>
                  {item.subMenuItems?.length && (
                    <ul>
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
          </ul>
        </nav>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .wrapper {
    ${medWrapper};
  }
`;
