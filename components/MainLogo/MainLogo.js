import Image from "next/image";
import styled from "styled-components";

export const MainLogo = ({ mainLogo }) => {
  return (
    <StyledDiv>
      <div className="logo-wrap">
        <Image
          src={mainLogo.sourceUrl}
          height={500}
          width={500}
          alt={mainLogo.altText}
          objectFit="cover"
        />
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .logo-wrap {
    width: 100%;
    max-width: 10rem;
  }
`;
