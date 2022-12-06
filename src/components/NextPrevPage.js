import React from "react";

import { PaginationStyled } from "../style/pagination";

import { Previous, Next } from "../style/icons.style";
import { H2 } from "../style/text.style";
import { useTheme } from "styled-components";
import { ChangePageButton } from "../style/button.style";
const NextPrevPage = ({
  prevPage,
  nextPage,
  changePage,
  currentPage,
  lastPage,
}) => {
  const theme = useTheme();

  return (
    <PaginationStyled>
      <ChangePageButton
        onClick={() => changePage(prevPage)}
        disabled={prevPage === null}
        cursor={prevPage === null ? "auto" : "pointer"}
      >
        <Previous
          color={prevPage === null ? "rgba(0,0,0,0.2)" : theme.colors.text}
        />
      </ChangePageButton>
      <H2>
        {currentPage} / {lastPage}
      </H2>
      <ChangePageButton
        onClick={() => changePage(nextPage)}
        disabled={nextPage === null}
        cursor={nextPage === null ? "auto" : "pointer"}
      >
        <Next
          color={nextPage === null ? "rgba(0,0,0,0.2)" : theme.colors.text}
        />
      </ChangePageButton>
    </PaginationStyled>
  );
};

export default NextPrevPage;
