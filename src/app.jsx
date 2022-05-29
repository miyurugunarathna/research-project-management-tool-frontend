import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { LogIn } from "./pages/LogIn.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { Submission } from "./pages/Submission/index.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
      </Routes>
    </BrowserRouter>
  );
};
