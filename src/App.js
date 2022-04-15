import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
function App() {
  return (
    <>
    <Router>
      <Home/>
    </Router>
    </>
  );
}

export default App;
