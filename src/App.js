import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import MatchTabs from "./pages/match details/MatchTabs";
import Header from "./components/header/Header.js";

function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          {" "}
          {/* Replace Switch with Routes */}
          <Route exact path="/" element={<Home />} />{" "}
          {/* Use element instead of component */}
          <Route path="/match-details/:matchId" element={<MatchTabs />} />{" "}
          {/* Use element instead of render */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
