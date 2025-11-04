"use client";

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-20">
      <h1 className="text-3xl font-bold mb-6"> Riwayat Presensi</h1>
      <p className="text-gray-300 mb-6 text-center max-w-lg">
        Sejarah PerIkanan
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[28rem]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-700 text-yellow-400">
              <th className="p-2">Tanggal</th>
              <th className="p-2">Status</th>
              <th className="p-2">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="p-2">01-11-2025</td>
              <td className="p-2 text-green-400">Hadir</td>
              <td className="p-2">Tepat waktu</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="p-2">02-11-2025</td>
              <td className="p-2 text-yellow-400">Izin</td>
              <td className="p-2">Sakit</td>
            </tr>
            <tr>
              <td className="p-2">03-11-2025</td>
              <td className="p-2 text-red-400">Alpa</td>
              <td className="p-2">Tanpa keterangan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
