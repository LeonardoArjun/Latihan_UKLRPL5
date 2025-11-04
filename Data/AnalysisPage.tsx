"use client";

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20">
      <h1 className="text-3xl font-bold mb-6"> Analisis Kehadiran</h1>
      <p className="text-gray-300 mb-8 text-center max-w-xl">
        Menganalisis PerIkanan
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[28rem]">
        <h2 className="text-xl font-semibold text-yellow-400 mb-4">
          Rekap Kehadiran Bulan November 2025
        </h2>
        <ul className="space-y-2 text-gray-300">
          <li> Hadir: 20 Hari</li>
          <li> Izin/Sakit: 3 Hari</li>
          <li> Alpa: 2 Hari</li>
        </ul>

        <div className="mt-6 border-t border-gray-700 pt-4">
          <h3 className="text-lg font-semibold text-yellow-400 mb-2">
            Analisis Perbandingan Kelas
          </h3>
          <p className="text-gray-400">
            Kelas XI RPL memiliki tingkat kehadiran rata-rata 92%.
            <br />
            Kelas XI TKJ memiliki tingkat kehadiran rata-rata 88%.
          </p>
        </div>
      </div>
    </div>
  );
}
