import Image from "next/image";
import styled from "styled-components";

export const Cover = ({ children, background }) => {
  return (
    <StyledDiv>
      <div className="image-wrapper">
        <Image className="bg-image" alt="cover" src={background} fill />
      </div>
      <h1 className="big-title">{children}</h1>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  .image-wrapper {
    position: relative;
    min-height: 40rem;

    .bg-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .big-title {
    color: green;
  }
`;
