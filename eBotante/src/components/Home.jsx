import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  // Function to navigate to the login page
  const handleGetStarted = () => navigate("/login");

  return (
    <div className="flex flex-col items-center p-6 space-y-6 min-h-screen bg-cover bg-center w-full">
      {/* Header Section */}
      <div className="w-full max-w-2xl bg-blue-100 text-center p-6 rounded-lg border border-blue-300">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text animate-fade-in transition duration-300 hover:shadow-lg hover:scale-105">
          Welcome to eBotante
        </h2>
        <p className="text-gray-600 text-lg">
          Your personal guide to the 2025 senatorial elections
        </p>
        <button
          onClick={handleGetStarted}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Get Started
        </button>
      </div>

      {/* Information Section */}
      <div className="w-full max-w-2xl text-center p-6 border border-blue-300 rounded-lg bg-blue-50 flex flex-col items-center">
        <img
          src="https://img.freepik.com/premium-vector/democratic-vote-elections-banner-human-rights-elections-equality_125133-2759.jpg"
          alt="Informed Decision"
          className="w-150 h-auto mb-4 object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold">Make Informed Decisions</h3>
        <p className="text-black-600 text-lg">
          Explore detailed profiles of senatorial candidates, learn about their
          backgrounds, and save your choices for reference on election day.
        </p>
      </div>

      {/* Features Section */}
      <div className="w-full max-w-2xl flex flex-col sm:flex-row sm:flex-wrap md:flex-nowrap justify-between space-y-4 sm:space-y-0 sm:space-x-4 text-center">
        {[
          {
            title: "Explore",
            text: "Browse candidate profiles",
            bg: "bg-blue-100",
            hoverBg: "hover:bg-blue-200",
            border: "border-blue-400",
            img: "https://cdn-icons-png.flaticon.com/512/3705/3705566.png",
          },
          {
            title: "Save",
            text: "Select up to 12 candidates",
            bg: "bg-blue-100",
            hoverBg: "hover:bg-blue-200",
            border: "border-blue-400",
            img: "https://th.bing.com/th/id/OIP.bDqEzm0XFoKgAkKJ4hRIaAHaHb?w=624&h=626&rs=1&pid=ImgDetMain",
          },
          {
            title: "Access",
            text: "View selections anytime",
            bg: "bg-blue-100",
            hoverBg: "hover:bg-blue-200",
            border: "border-blue-400",
            img: "https://th.bing.com/th/id/OIP.gOIkSR6Z-YTcG5durZPQUAHaHa?pid=ImgDet&w=174&h=174&c=7&dpr=1.1",
          },
        ].map(({ title, text, bg, hoverBg, border, img }, index) => (
          <div
            key={index}
            className={`flex flex-col items-center w-full sm:w-1/2 md:w-1/3 p-6 ${border} rounded-lg ${bg} transition transform hover:scale-105 hover:shadow-lg ${hoverBg}`}
          >
            <img src={img} alt={title} className="w-24 h-24 mb-2" />
            <h4 className="text-lg font-semibold">{title}</h4>
            <p className="text-black-500 text-base">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
