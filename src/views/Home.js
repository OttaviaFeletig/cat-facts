import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NextPrevPage from "../components/NextPrevPage";
import { CardContainer, CardStyled } from "../style/card.style";
import { LoaderStyled } from "../style/loader.style";
import { generateRandNumbArray } from "../utils/randomNumber";

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://catfact.ninja/facts?limit=16&max_length=140"
  );
  const [random, setRandom] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch(`${url}&limit=16&max_length=140`, {
      signal: signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setRandom(generateRandNumbArray);
        setTimeout(() => {
          setIsLoading(false);
        }, "500");
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
    <div style={{ minHeight: "100vh" }}>
      {!isLoading ? (
        <>
          <CardContainer>
            {data?.data &&
              data.data.map((cat, index) => (
                <Link
                  to={"catfacts"}
                  state={{ cat, picN: random[index] }}
                  key={index}
                >
                  <CardStyled
                    picN={random[index]}
                    data={cat}
                    imgDim={200}
                    placeholderDim={100}
                  />
                </Link>
              ))}
          </CardContainer>
          <NextPrevPage
            currentPage={data.current_page}
            lastPage={data.last_page}
            changePage={changePage}
            prevPage={data.prev_page_url}
            nextPage={data.next_page_url}
          />
        </>
      ) : (
        <LoaderStyled />
      )}
    </div>
  );
};

export default Home;
