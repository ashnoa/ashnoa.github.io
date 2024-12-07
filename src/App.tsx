import "./App.css";
import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import NotFound from "./NotFound";
import OlelTop from "./OlelTop";
import OlelPrivacyPolicy from "./OlelPrivacyPolicy";
import OlelTermsOfUse from "./OlelTermsOfUse";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/olel" element={<OlelTop />} />
          <Route path="/olel/privacy-policy" element={<OlelPrivacyPolicy />} />
          <Route path="/olel/terms-of-use" element={<OlelTermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
