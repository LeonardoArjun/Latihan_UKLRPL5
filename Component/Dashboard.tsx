"use client";

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white pt-24 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">
        Ikan yang baik selalu tepat waktu.
      </h1>
      <p className="text-gray-300 mb-8">Hadir Tepat Waktu!</p>
      <button
        onClick={() => alert("Presensi berhasil!")}
        className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold hover:bg-yellow-500 transition"
      >
        Presensi
      </button>
    </div>
  );
}

export default Dashboard;
