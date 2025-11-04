"use client";

export default function PresensiPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20">
      <h1 className="text-3xl font-bold mb-6"> Pencatatan Presensi</h1>
      <p className="text-gray-300 mb-6 text-center max-w-lg">Mencatat Ikan</p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 text-center">
        <p className="mb-3">Tanggal: 12 Oktober 2025</p>
        <p className="mb-3">Nama: IkanNila</p>
        <p className="mb-3">Status: Hadir</p>
        <button
          onClick={() => alert("Terpancing!")}
          className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition"
        >
          Simpan Presensi
        </button>
      </div>
    </div>
  );
}
