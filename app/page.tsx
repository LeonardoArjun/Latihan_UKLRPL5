"use client";

import Image from "next/image";
import { useState } from "react";
import LoginPage from "../Component/LoginPage";
import Dashboard from "../Component/Dashboard";
import Navbar from "../Component/Navbar";
import PresensiPage from "../Data/PresensiPage";
import HistoryPage from "../Data/HistoryPage";
import AnalysisPage from "../Data/AnalysisPage";

export default function App() {
  const [page, setPage] = useState("login");

  if (page === "login") {
    return <LoginPage onLogin={() => setPage("dashboard")} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar onNavigate={setPage} onLogout={() => setPage("login")} />

      <main className="pt-24">
        {page === "dashboard" && <Dashboard />}
        {page === "presensi" && <PresensiPage />}
        {page === "history" && <HistoryPage />}
        {page === "analysis" && <AnalysisPage />}
      </main>
    </div>
  );
}
