import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// page components:
import About from "./pages/About";
import Sites from "./pages/Sites";
import Models from "./pages/Renders";
// import Header from "./components/Header";
import Header from "./components/HeaderSimple.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="site-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/sites" element={<Sites />} />
            <Route path="/models" element={<Models />} />
            <Route path="*" element={<Navigate to="/about" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
