import { Btn1One, Btn1Two } from "@/styles/helpers";
import { styled } from "styled-components";

export const Pagination = ({ totalPages, onPageClick }) => {
  return (
    <StyledSection>
      {Array.from({ length: totalPages }).map((_, i) => {
        return (
          <div className="pagination-item" key={i}>
            <button
              onClick={() => {
                onPageClick(i + 1);
              }}
            >
              {i + 1}
            </button>
          </div>
        );
      })}
    </StyledSection>
  );
};

const StyledSection = styled.div`
  display: flex;

  .pagination-item {
    margin-right: 2rem;
    button {
      ${Btn1One};
    }
  }
`;
