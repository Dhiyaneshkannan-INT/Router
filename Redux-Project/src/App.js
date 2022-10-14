 import React from "react";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import User from "./Pages/User";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/user" element={<User />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
 
    </Router>
  );
}

export default App;
