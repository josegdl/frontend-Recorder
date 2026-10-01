import React, { useState } from 'react';
import { Play, Pause, Square, User, LogOut } from 'lucide-react';

// --- 1. COMPONENTE PANTALLA: INICIO ---
const Inicio = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-4 text-blue-400">Dashboard de Grabaciones Activas</h2>
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-900 border-b border-gray-700 text-gray-300">
            <th className="p-3">ID</th>
            <th className="p-3">Ruta</th>
            <th className="p-3">Horario</th>
            <th className="p-3">Estado</th>
            <th className="p-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((item) => (
            <tr key={item} className="border-b border-gray-700 hover:bg-gray-750">
              <td className="p-3">#00{item}</td>
              <td className="p-3 text-sm font-mono text-gray-400">/stream/cam_{item}</td>
              <td className="p-3">08:00 - 16:00</td>
              <td className="p-3">
                <span className="bg-green-900 text-green-300 py-1 px-3 rounded-full text-xs">Activo</span>
              </td>
              <td className="p-3 flex gap-2">
                <button className="p-2 bg-blue-600 rounded hover:bg-blue-500 cursor-pointer"><Play size={16}/></button>
                <button className="p-2 bg-gray-700 rounded hover:bg-gray-600 cursor-pointer"><Pause size={16}/></button>
                <button className="p-2 bg-red-600 rounded hover:bg-red-500 cursor-pointer"><Square size={16}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

// --- 2. COMPONENTE PANTALLA: NEW-RECORDING ---
const NewRecording = () => {
  const storagePaths = [
    "/mnt/storage/grabaciones/gd_principal",
    "/srv/records/2026/camaras",
    "/var/log/streams/backup_noche",
    "/data/video_store/intelite_hub",
  ];

  const recordings = [
    {
      id: "#001",
      nombre: "Cámara Acceso Principal",
      usuario: "Admin",
      ruta: "/mnt/storage/grabaciones/gd_principal",
      streamUrl: "rtmp://live.intelite.es/stream/cam1",
      inicio: "08:00",
      fin: "16:00",
      activo: true,
    },
    {
      id: "#002",
      nombre: "Monitoreo Sala Servidores",
      usuario: "J. López",
      ruta: "/srv/records/2026/camaras",
      streamUrl: "rtmp://live.intelite.es/stream/cam2",
      inicio: "14:00",
      fin: "22:00",
      activo: false,
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Configuración de Grabaciones</h2>
          <p className="text-gray-400 text-sm mt-1">Administra las rutas, fuentes de stream y usuarios responsables.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-500 transition-colors text-white font-semibold px-4 py-2 rounded-lg shadow-md cursor-pointer">
          + Guardar Grabación
        </button>
      </div>

      <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[950px]">
          <thead>
            <tr className="bg-gray-900 border-b border-gray-700 text-xs font-semibold uppercase tracking-wider text-gray-400">
              <th className="p-3.5">ID</th>
              <th className="p-3.5">Nombre Grabación</th>
              <th className="p-3.5">Dado de Alta Por</th>
              <th className="p-3.5">Ruta de Guardado</th>
              <th className="p-3.5">URL Stream</th>
              <th className="p-3.5">Horario (Inicio - Fin)</th>
              <th className="p-3.5 text-center">Activo</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 text-sm">
            {recordings.map((rec) => (
              <tr key={rec.id} className="hover:bg-gray-750 transition-colors">
                <td className="p-3.5 font-semibold text-gray-300">{rec.id}</td>
                <td className="p-3.5 font-medium text-white">{rec.nombre}</td>
                <td className="p-3.5">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs bg-gray-750 text-gray-300 border border-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                    {rec.usuario}
                  </span>
                </td>
                <td className="p-3.5 font-mono text-xs text-gray-400">{rec.ruta}</td>
                <td className="p-3.5 font-mono text-xs text-blue-300 truncate max-w-[180px]">{rec.streamUrl}</td>
                <td className="p-3.5 text-gray-300">{rec.inicio} - {rec.fin}</td>
                <td className="p-3.5 text-center">
                  <input
                    type="checkbox"
                    defaultChecked={rec.activo}
                    className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
                  />
                </td>
              </tr>
            ))}

            {/* Fila de alta de nuevo registro */}
            <tr className="bg-blue-950/30 border-t-2 border-blue-600/50">
              <td className="p-3.5 font-bold text-blue-400 whitespace-nowrap">#003 (Nuevo)</td>
              <td className="p-3.5">
                <input
                  type="text"
                  placeholder="Nombre de la grabación"
                  className="bg-gray-900 border border-gray-600 focus:border-blue-500 focus:outline-none rounded p-2 text-white text-xs w-full"
                />
              </td>
              <td className="p-3.5">
                <div className="flex items-center gap-1.5 bg-gray-900 border border-gray-700 rounded p-2 text-xs text-gray-300 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Admin (Tú)</span>
                </div>
              </td>
              <td className="p-3.5">
                <select
                  defaultValue=""
                  className="bg-gray-900 border border-gray-600 focus:border-blue-500 focus:outline-none rounded p-2 text-white text-xs w-full cursor-pointer"
                >
                  <option value="" disabled>Selecciona una ruta...</option>
                  {storagePaths.map((path, idx) => (
                    <option key={idx} value={path} className="bg-gray-900">
                      {path}
                    </option>
                  ))}
                </select>
              </td>
              <td className="p-3.5">
                <input
                  type="text"
                  placeholder="rtmp://server/live/..."
                  className="bg-gray-900 border border-gray-600 focus:border-blue-500 focus:outline-none rounded p-2 text-white text-xs w-full font-mono"
                />
              </td>
              <td className="p-3.5">
                <div className="flex items-center gap-1">
                  <input
                    type="time"
                    className="bg-gray-900 border border-gray-600 focus:border-blue-500 rounded p-1.5 text-xs text-white"
                  />
                  <span className="text-gray-500 text-xs">-</span>
                  <input
                    type="time"
                    className="bg-gray-900 border border-gray-600 focus:border-blue-500 rounded p-1.5 text-xs text-white"
                  />
                </div>
              </td>
              <td className="p-3.5 text-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-4 h-4 accent-blue-500 rounded cursor-pointer"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

// --- 3. COMPONENTE PANTALLA: MULTI-VIEW ---
const MultiView = () => (
  <div className="flex h-[calc(100vh-80px)]">
    <div className="w-64 bg-gray-900 border-r border-gray-700 p-4 flex flex-col">
      <h3 className="font-bold text-lg mb-4 text-gray-300">SELECCIÓN</h3>
      <div className="flex-1 overflow-y-auto space-y-3">
        {[1, 2, 3, 4, 5, 6].map((cam) => (
          <label key={cam} className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-800 rounded">
            <input type="checkbox" defaultChecked={cam <= 4} className="w-4 h-4 accent-blue-500" />
            <span className="text-sm">Cámara 0{cam}</span>
          </label>
        ))}
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-500 py-3 mt-4 rounded font-bold text-white shadow-lg cursor-pointer">
        VER APLICAR
      </button>
    </div>

    <div className="flex-1 p-4 bg-gray-950">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-full">
        {[1, 2, 3, 4, 5, 6].map((video) => (
          <div key={video} className="bg-black rounded-lg border border-gray-700 relative group flex items-center justify-center">
            <div className="text-gray-600">
              <Play size={48} className="opacity-50 group-hover:opacity-100 transition-opacity cursor-pointer" />
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent p-2 text-xs">
              <span className="font-bold text-blue-400">● LIVE</span> - Cámara 0{video}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- COMPONENTE PRINCIPAL (APP) ---
export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      <header className="bg-gray-950 border-b border-gray-800 p-4 flex justify-between items-center h-20">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 text-white font-black p-2 rounded">GD</div>
          <h1 className="text-xl font-bold tracking-widest text-gray-200">INTELITE</h1>
        </div>

        <nav className="flex space-x-2">
          <button 
            onClick={() => setActiveTab('inicio')}
            className={`px-4 py-2 rounded transition-colors cursor-pointer ${activeTab === 'inicio' ? 'bg-gray-800 text-blue-400 font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            INICIO
          </button>
          <button 
            onClick={() => setActiveTab('new')}
            className={`px-4 py-2 rounded transition-colors cursor-pointer ${activeTab === 'new' ? 'bg-gray-800 text-blue-400 font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            NEW-RECORDING
          </button>
          <button 
            onClick={() => setActiveTab('multi')}
            className={`px-4 py-2 rounded transition-colors cursor-pointer ${activeTab === 'multi' ? 'bg-gray-800 text-blue-400 font-bold' : 'text-gray-400 hover:text-white'}`}
          >
            MULTI-VIEW
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <User size={18} /> Admin
          </div>
          <button className="flex items-center gap-2 border border-red-900 text-red-500 px-3 py-1.5 rounded hover:bg-red-950 transition-colors text-sm cursor-pointer">
            <LogOut size={16} /> CERRAR SESIÓN
          </button>
        </div>
      </header>

      <main>
        {activeTab === 'inicio' && <Inicio />}
        {activeTab === 'new' && <NewRecording />}
        {activeTab === 'multi' && <MultiView />}
      </main>
    </div>
  );
}