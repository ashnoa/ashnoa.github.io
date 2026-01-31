import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import AppDetailPage from "./pages/AppDetailPage";
import OlelPrivacyPolicy from "./OlelPrivacyPolicy";
import OlelTermsOfUse from "./OlelTermsOfUse";
import OlelTermsOfSale from "./OlelTermsOfSale";
import ZoshoPrivacyPolicy from "./ZoshoPrivacyPolicy";
import ZoshoTermsOfUse from "./ZoshoTermsOfUse";
import ZoshoTermsOfSale from "./ZoshoTermsOfSale";
import OnTapePrivacyPolicy from "./OnTapePrivacyPolicy";
import OnTapeTermsOfUse from "./OnTapeTermsOfUse";
import OnTapeTermsOfSale from "./OnTapeTermsOfSale";
import CashCrewPrivacyPolicy from "./CashCrewPrivacyPolicy";
import CashCrewTermsOfUse from "./CashCrewTermsOfUse";
import CashCrewTermsOfSale from "./CashCrewTermsOfSale";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/about" element={<About />} />
            {/* Legal pages (must be before dynamic :appId route) */}
            <Route path="/olel/privacy-policy" element={<OlelPrivacyPolicy />} />
            <Route path="/olel/terms-of-use" element={<OlelTermsOfUse />} />
            <Route path="/olel/terms-of-sale" element={<OlelTermsOfSale />} />
            <Route path="/zosho/privacy-policy" element={<ZoshoPrivacyPolicy />} />
            <Route path="/zosho/terms-of-use" element={<ZoshoTermsOfUse />} />
            <Route path="/zosho/terms-of-sale" element={<ZoshoTermsOfSale />} />
            <Route path="/ontape/privacy-policy" element={<OnTapePrivacyPolicy />} />
            <Route path="/ontape/terms-of-use" element={<OnTapeTermsOfUse />} />
            <Route path="/ontape/terms-of-sale" element={<OnTapeTermsOfSale />} />
            <Route path="/cashcrew/privacy-policy" element={<CashCrewPrivacyPolicy />} />
            <Route path="/cashcrew/terms-of-use" element={<CashCrewTermsOfUse />} />
            <Route path="/cashcrew/terms-of-sale" element={<CashCrewTermsOfSale />} />
            {/* Dynamic app detail page */}
            <Route path="/:appId" element={<AppDetailPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
