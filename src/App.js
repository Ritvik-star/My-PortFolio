import React from "react";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./component/home";
import { Resume } from "./component/Resume";
import Portfolio from "./component/Portfolio";
import Contacts from "./component/Contacts";

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/resume" exact element={<Resume />} />
          <Route path="/portfolio" exact element={<Portfolio />} />
          <Route path="/contacts" exact element={<Contacts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
