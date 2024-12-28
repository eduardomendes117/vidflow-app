"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Integracao() {
  const { data: session } = useSession();

  const getStatus = (provider) => {
    if (session?.user) {
      return "Conectado";
    }
    return "Não Conectado";
  };

  const handleConnect = (provider) => {
    signIn(provider);
  };

  const handleDisconnect = () => {
    signOut();
  };

  return (
    <div className="m-10 p-5 flex flex-col gap-10 bg-white shadow-md">
      <h2 className="text-xl font-semibold">Conceder Permissões</h2>
      <div className="flex flex-col gap-4">
        {/* YouTube */}
        <div className="flex items-center justify-between p-4 border rounded-md">
          <div className="flex items-center gap-3">
            <FaYoutube className="text-red-600 text-2xl" />
            <span>YouTube</span>
          </div>
          <button
            onClick={() => handleConnect("google")}
            className={`py-2 px-4 rounded-lg ${
              getStatus("google") === "Conectado"
                ? "bg-green-500 text-white"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            {getStatus("google")}
          </button>
        </div>

        {/* Facebook */}
        <div className="flex items-center justify-between p-4 border rounded-md">
          <div className="flex items-center gap-3">
            <FaFacebook className="text-blue-600 text-2xl" />
            <span>Facebook</span>
          </div>
          <button
            onClick={() => handleConnect("facebook")}
            className={`py-2 px-4 rounded-lg ${
              getStatus("facebook") === "Conectado"
                ? "bg-green-500 text-white"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            {getStatus("facebook")}
          </button>
        </div>

        {/* Twitter */}
        <div className="flex items-center justify-between p-4 border rounded-md">
          <div className="flex items-center gap-3">
            <FaTwitter className="text-blue-400 text-2xl" />
            <span>Twitter</span>
          </div>
          <button
            onClick={() => handleConnect("twitter")}
            className={`py-2 px-4 rounded-lg ${
              getStatus("twitter") === "Conectado"
                ? "bg-green-500 text-white"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
          >
            {getStatus("twitter")}
          </button>
        </div>
      </div>

      {session && (
        <div className="flex flex-col items-center mt-6">
          <p>Conectado como: {session.user.email}</p>
          <button
            onClick={handleDisconnect}
            className="mt-4 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600"
          >
            Desconectar
          </button>
        </div>
      )}
    </div>
  );
}
