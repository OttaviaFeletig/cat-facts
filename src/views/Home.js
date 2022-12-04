import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import NextPrevPage from "../components/NextPrevPage";
import { CardContainer, CardStyled } from "../style/card.style";

const Home = () => {
  // const [cats, setCats] = useState(null);
  const [data, setData] = useState(null);
  const [url, setUrl] = useState(
    "https://catfact.ninja/facts?limit=16&max_length=140"
  );
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`${url}&limit=16&max_length=140`, {
      signal: signal,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        // setCats(data.data);
        setData(data);
      })
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, [url]);
  const changePage = (page) => {
    setUrl(page);
  };
  return (
    <>
      {data && (
        <>
          <CardContainer>
            {data.data &&
              data.data.map((cat, index) => (
                <Link to={"catfacts"} state={{ cat, index }} key={index}>
                  <CardStyled
                    data={cat}
                    index={index}
                    imgDim={200}
                    placeholderDim={100}
                  />
                </Link>
              ))}
          </CardContainer>
          <NextPrevPage
            currentPage={data.current_page}
            changePage={changePage}
            prevPage={data.prev_page_url}
            nextPage={data.next_page_url}
          />
        </>
      )}
    </>
  );
};

export default Home;
