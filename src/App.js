import { useState } from "react";
import { GlobalStyles } from "./style/global.style";
import { Header } from "./style/header.style";
import { Footer } from "./style/footer.style";
import { ThemeProvider } from "styled-components";
import { light, dark, blue } from "./style/theme.style";
import { ThemeContainer, ThemeButton } from "./style/themeSwitching.style";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./views/Detail";
function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />

      <Header>
        <p>Cat Facts</p>
        <ThemeContainer>
          <span>Themes: </span>
          <ThemeButton
            className={`light ${selectedTheme === light ? "active" : ""}`}
            onClick={() => setSelectedTheme(light)}
          ></ThemeButton>
          <ThemeButton
            className={`dark ${selectedTheme === dark ? "active" : ""}`}
            onClick={() => setSelectedTheme(dark)}
          ></ThemeButton>
          <ThemeButton
            className="blue"
            onClick={() => setSelectedTheme(blue)}
          ></ThemeButton>
        </ThemeContainer>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catfacts" element={<Detail />} />
      </Routes>

      <Footer>
        <p>Made with love by Ottavia</p>
      </Footer>
    </ThemeProvider>
  );
}

export default App;
