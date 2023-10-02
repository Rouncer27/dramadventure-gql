import styled from "styled-components";

export const Cover = ({ children, background }) => {
  return (
    <StyledDiv>
      <h1 className="big-title">{children}</h1>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  background-color: red;

  .big-title {
    color: green;
  }
`;
