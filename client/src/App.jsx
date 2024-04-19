import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Homepage } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="ml-64">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
