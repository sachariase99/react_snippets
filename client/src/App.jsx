import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage } from "./pages";
import ReactGA from "react-ga4"

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  ReactGA.initialize("")
  return (
    <>
      <Router>
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className={isMenuOpen ? "ml-64" : "ml-16"}>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;