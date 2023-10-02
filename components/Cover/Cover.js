import styled from "styled-components";

export const Cover = ({ children, background }) => {
  return <StyledDiv>{children}</StyledDiv>;
};

const StyledDiv = styled.div`
  background-color: red;
`;
