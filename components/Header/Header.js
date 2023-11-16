import { styled } from "styled-components";
import { MainMenu } from "../MainMenu/MainMenu";
import { MainLogo } from "../MainLogo/MainLogo";
import Link from "next/link";

export const Header = ({ mainLogo, items, callToAction }) => {
  console.log("mainLogo", mainLogo);
  return (
    <StyledSection>
      <div className="main-logo">
        <Link href="/">
          <MainLogo mainLogo={mainLogo} />
        </Link>
      </div>
      <div className="main-menu">
        <MainMenu items={items} callToAction={callToAction} />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  z-index: 999999999;

  .main-logo {
    width: 35%;
  }

  .main-menu {
    width: 65%;
  }
`;
