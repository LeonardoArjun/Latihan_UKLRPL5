"use client";
import { useState } from "react";

function LoginPage({ onLogin }) {
  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(); // langsung ke dashboard
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl shadow-lg text-white w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 mb-3 rounded bg-gray-700"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 mb-4 rounded bg-gray-700"
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black w-full py-2 rounded font-semibold hover:bg-yellow-500"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
