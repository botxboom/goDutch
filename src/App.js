import React from "react";
import Homepage from "./components/Homepage";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Insights from "./components/Insights";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <GlobalStyles />
      <Routes>
        <Route default exact path="/" element={<Homepage />} />
        <Route exact path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
}

export default App;
