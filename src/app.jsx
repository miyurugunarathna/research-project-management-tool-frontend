import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { LogIn } from "./pages/LogIn.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { StudentGroup } from "./pages/StudentGroup/index.jsx";
import { Submission } from "./pages/Submission/index.jsx";
import { MarkSheet } from "./pages/Marksheet/index.jsx";
import { Stage } from "./pages/Stage/index.jsx";
import { Marks } from "./pages/Marksheet/marks.jsx";
import { SubmissionList } from "./pages/Submission/submissionList.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student-groups" element={<StudentGroup />} />
        <Route path="/" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/marksheet" element={<MarkSheet />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/submissionList" element={<SubmissionList />} />
      </Routes>
    </BrowserRouter>
  );
};
