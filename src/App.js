import React from "react";
import Homepage from "./components/Homepage";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Insights from "./components/Insights";
import NavBar from "./components/NavBar";
import CreateType from "./components/CreateType";

function App() {
  return (
    <Router>
      <NavBar />
      <GlobalStyles />
      <Routes>
        <Route default path="/" element={<Homepage />} />
        <Route exact path="/insights" element={<Insights />} />
        <Route exact path="/create" element={<CreateType />} />
      </Routes>
    </Router>
  );
}

export default App;
