import React from "react";
import Homepage from "./components/Homepage";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Homepage />
    </Router>
  );
}

export default App;
