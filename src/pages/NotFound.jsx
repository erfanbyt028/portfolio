import React from "react";
import StarBackground from "../components/StarBackground";
import ThemeToggle from "../components/ThemeToggle";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-950 to-slate-900 text-white relative overflow-hidden">
      {/* Star Background */}
      <StarBackground />


      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          {/* 404 Number with Glow Effect */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/50 to-primary-foreground animate-pulse">
              404
            </h1>
            <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-purple-500/20 blur-sm -z-10">
              404
            </div>
          </div>

          {/* Error Message */}
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
              Page Not Found
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-1">
              Unfortunately, the page you are looking for does not exist or has been moved.
            </p>
            <p className="text-lg text-gray-400 animate-fade-in-delay-2">
              Please check the URL or return to the homepage.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
            <a
              href="/"
              className="group px-8 py-4 bg-gradient-to-r from-primary via-primary/70 to-primary-foreground text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-2"
            >
              <Home className="w-5 h-5 group-hover:animate-bounce" />
              Go to Homepage
            </a>

            <button
              onClick={() => window.history.back()}
              className="group px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-purple-500 hover:text-white hover:shadow-2xl hover:shadow-purple-500/25 flex items-center gap-2"
            >
              <ArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
              Go Back
            </button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-20 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </div>
  );
};

export default NotFound;
