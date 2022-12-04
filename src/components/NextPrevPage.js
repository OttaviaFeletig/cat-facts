import React from "react";

import { PaginationStyled } from "../style/pagination";

import { Previous, Next } from "../style/icons.style";
import { H2 } from "../style/text.style";
const NextPrevPage = ({ prevPage, nextPage, changePage, currentPage }) => {
  const handleClick = (page) => {
    changePage(page);
  };
  return (
    <PaginationStyled>
      <button
        onClick={() => changePage(prevPage)}
        disabled={prevPage === null}
        style={{
          border: "none",
          height: "100%",
          backgroundColor: "transparent",
          outline: "none",
          cursor: prevPage !== null && "pointer",
        }}
        type="button"
      >
        <Previous />
      </button>
      <H2>{currentPage}</H2>
      <button
        onClick={() => changePage(nextPage)}
        disabled={nextPage === null}
        style={{
          border: "none",
          height: "100%",
          backgroundColor: "transparent",
          outline: "none",
          cursor: nextPage !== null && "pointer",
        }}
      >
        <Next />
      </button>
    </PaginationStyled>
  );
};

export default NextPrevPage;
