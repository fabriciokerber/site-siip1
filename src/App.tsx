import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";  // Certifique-se de que este caminho está correto
import TermsPage from "./pages/TermsPage";      // Certifique-se de que este caminho está correto
import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
