import { styled } from "styled-components";
import { MainMenu } from "../MainMenu/MainMenu";
import { MainLogo } from "../MainLogo/MainLogo";

export const Header = ({ mainLogo, items, callToAction }) => {
  console.log("mainLogo", mainLogo);
  return (
    <StyledSection>
      <div className="main-logo">
        <MainLogo mainLogo={mainLogo} />
      </div>
      <div className="main-menu">
        <MainMenu items={items} callToAction={callToAction} />
      </div>
    </StyledSection>
  );
};

const StyledSection = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .main-logo {
    width: 15%;
  }

  .main-menu {
    width: 85%;
  }
`;
