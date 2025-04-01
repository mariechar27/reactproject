import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import CandidateList from "./components/CandidateList";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import VotePage from "./components/VotePage";
import { VoteProvider } from "./context/VoteContext";
import "./App.css";

const App = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <VoteProvider>
      <BrowserRouter>
        {/* Background Image */}
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-cover bg-center z-[-1] opacity-75"
          style={{
            backgroundImage:
              "url('https://t3.ftcdn.net/jpg/05/22/27/42/360_F_522274254_HOd2MtGGiJR2RGExbcYq2UEdDkahbEal.jpg')",
          }}
        />sss

        {/* Header Navigation */}
        <nav className="fixed top-0 left-0 w-full bg-blue-500 text-white p-4 flex justify-between items-center z-20 text-lg">
          {/* Logo */}
          <div className="ml-6 font-bold text-xl">eBotante</div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-300 focus:outline-none"
            >
              &#9776; {/* Hamburger Icon */}
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`absolute top-16 left-0 w-full md:static md:w-auto md:flex md:items-center z-10 ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col md:flex-row md:space-x-6">
              {/* Navigation Items */}
              {[
                { path: "/", label: "Home" },
                { path: "/candidatelist", label: "Candidate List" },
                { path: "/votepage", label: "Vote Page" },
                { path: "/dashboard", label: "Dashboard" },
                { path: "/login", label: "Login" },
                { path: "/signup", label: "Signup" },
              ].map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-300 bg-blue-800 px-3 py-1 rounded-lg"
                      : "hover:bg-blue-700 hover:text-white px-3 py-1 rounded-lg transition-colors duration-300 font-bold"
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>

        {/* Routes */}
        <div className="relative z-10 w-full min-h-screen pt-20 pb-16 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/candidatelist" element={<CandidateList />} />
            <Route path="/votepage" element={<VotePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* 404 Page */}
            <Route
              path="*"
              element={
                <div className="text-center text-black mt-10">
                  Page Not Found
                </div>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="fixed bottom-0 left-0 w-full bg-blue-500 text-white py-4 text-center z-20">
          <p>&copy; 2025 eBotante. All rights reserved.</p>
        </footer>
      </BrowserRouter>
    </VoteProvider>
  );
};

export default App;
