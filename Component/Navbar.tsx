"use client";

export default function Navbar({ onNavigate, onLogout }) {
  return (
    <nav className="flex items-center justify-between bg-gray-800 px-10 py-4 fixed top-0 left-0 w-full z-50">
      <div
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => onNavigate("dashboard")}
      >
        <span className="text-yellow-400 font-bold text-xl italic hover:text-yellow-300 transition">
          IKAN
        </span>
        <span className="text-sm tracking-wide">BARU</span>
      </div>

      <ul className="flex items-center gap-10 text-l">
        <li
          className="hover:text-yellow-400 cursor-pointer"
          onClick={() => onNavigate("presensi")}
        >
          Presensi
        </li>
        <li
          className="hover:text-yellow-400 cursor-pointer"
          onClick={() => onNavigate("history")}
        >
          Riwayat
        </li>
        <li
          className="hover:text-yellow-400 cursor-pointer"
          onClick={() => onNavigate("analysis")}
        >
          Analisis
        </li>
      </ul>

      <button
        onClick={onLogout}
        className="bg-yellow-400 text-black px-4 py-2 font-semibold rounded hover:bg-yellow-500 transition"
      >
        Logout
      </button>
    </nav>
  );
}
