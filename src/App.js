import { ThemeProvider } from "@emotion/react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
    </ThemeProvider>
  );
}

export default App;
