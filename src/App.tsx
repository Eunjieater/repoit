import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/entry/Login";
import TermsPage from "./pages/entry/Terms";
import RoleSettingPage from "./pages/entry/RoleSetting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/role" element={<RoleSettingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
