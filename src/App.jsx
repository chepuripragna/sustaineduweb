import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import FeedbackForm from "./pages/FeedbackForm";
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import Lessons from "./pages/Lessons";
import Projects from "./pages/Projects";
import Resources from "./pages/Resources";
import Profile from "./pages/Profile";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ManageLessons from "./pages/ManageLessons";
import ManageProjects from "./pages/ManageProjects";
import ManageResources from "./pages/ManageResources";
import LessonDetails from "./pages/LessonDetails";
import ProjectDetails from "./pages/ProjectDetails"; // ✅ Added import

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("loggedIn");
    if (stored === "true") setIsLoggedIn(true);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/feedback" element={<FeedbackForm />} />

        <Route
          path="/"
          element={<Home isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
        />

        <Route
          path="/register"
          element={<Registration onLoginSuccess={handleLogin} />}
        />

        <Route path="/lessons" element={<Lessons />} />
        <Route path="/lessons/:id" element={<LessonDetails />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:title" element={<ProjectDetails />} /> {/* ✅ Project details route */}

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
