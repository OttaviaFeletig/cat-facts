import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardContainer, CardStyled } from "../style/card.style";

const Home = () => {
  const [cats, setCats] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://catfact.ninja/facts?limit=16&max_length=140", {
      signal: signal,
    })
      .then((res) => res.json())
      .then((data) => setCats(data.data))
      .catch((err) => console.log(err));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <CardContainer>
      {cats &&
        cats.map((cat, index) => (
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
  );
};

export default Home;
