import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import FeedbackForm from "./pages/FeedbackForm";
import Home from "./pages/Home";
import Registration from "./pages/Registration"; // Registration page
import Lessons from "./pages/Lessons";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ManageLessons from "./pages/ManageLessons";
import ManageProjects from "./pages/ManageProjects";
import ManageResources from "./pages/ManageResources";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/manage-lessons" element={<ManageLessons />} />
        <Route path="/manage-projects" element={<ManageProjects />} />
        <Route path="/manage-resources" element={<ManageResources />} />
      </Routes>
    </Router>
  );
}

export default App;
