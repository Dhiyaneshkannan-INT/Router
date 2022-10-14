import "./App.css";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import User from "./Pages/User";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" component={<Home />}></Route>
          <Route exact path="/user" component={<User />}></Route>
          <Route exact path="/contact" component={<Contact />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
