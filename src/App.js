import { useState } from "react";
import { GlobalStyles } from "./style/global.style";
import { HeaderStyled } from "./style/header.style";
import { Footer } from "./style/footer.style";
import { ThemeProvider } from "styled-components";
import { light } from "./style/theme.style";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./views/Detail";
function App() {
  const [selectedTheme, setSelectedTheme] = useState(light);

  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />

      <HeaderStyled
        selectedTheme={selectedTheme}
        setSelectedTheme={setSelectedTheme}
      />
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
