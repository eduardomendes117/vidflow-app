"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoLogOutOutline } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import { AiFillApi } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

export default function Integracao() {
  const [picture, setPicture] = useState(null);
  const [connections, setConnections] = useState({
    youtube: false,
    facebook: false,
    twitter: false,
  });

  useEffect(() => {
    const storedPicture = localStorage.getItem("picture");
    if (storedPicture) {
      setPicture(storedPicture);
    }

    // Simular status de conexão (normalmente viria de uma API)
    const savedConnections =
      JSON.parse(localStorage.getItem("connections")) || {};
    setConnections(savedConnections);
  }, []);

  const handleAuthorize = (platform) => {
    // Simula a conexão bem-sucedida
    const updatedConnections = { ...connections, [platform]: true };
    setConnections(updatedConnections);
    localStorage.setItem("connections", JSON.stringify(updatedConnections));
    alert(
      `Conectado ao ${platform.charAt(0).toUpperCase() + platform.slice(1)}!`
    );
  };

  return (
    <>
      <header className="sm:hidden lg:px-20 bg-slate-950 shadow-md backdrop-blur-xl flex justify-between items-center w-full p-4">
        <h1 className="font-bold text-white lg:text-2xl flex gap-2 items-center">
          Vidflow
        </h1>
        <nav>
          {picture && (
            <Image
              className="bg-white rounded-full w-10 h-10"
              src={picture}
              width={30}
              height={30}
              alt="foto perfil"
              id="perfil"
            />
          )}
        </nav>
      </header>

      <div className="flex min-h-screen h-full justify-center bg-gray-100">
        <aside className="hidden fixed left-0 bg-slate-950 p-3 sm:flex flex-col justify-between items-center h-screen">
          <h1 className="font-bold text-white lg:text-2xl">Vidflow</h1>

          <ul className="text-white">
            <Link
              href="/inicio"
              className="text-white hover:bg-slate-800 w-full py-1 px-2 rounded-md flex items-center gap-2"
            >
              <AiFillHome /> Inicio
            </Link>

            <li className="text-white hover:bg-slate-800 w-full py-1 px-2 rounded-md flex items-center gap-2">
              <MdVideoLibrary /> Biblioteca
            </li>

            <li className="text-white hover:bg-slate-800 w-full py-1 px-2 rounded-md flex items-center gap-2">
              <AiFillApi /> Integrações
            </li>

            <li className="text-white hover:bg-slate-800 w-full py-1 px-2 rounded-md flex items-center gap-2">
              <GrConfigure /> Configurações
            </li>
          </ul>

          <button className="text-white hover:bg-slate-800 w-full py-1 rounded-md flex justify-center items-center gap-2 text-lg">
            <IoLogOutOutline className="text-2xl" /> Sair
          </button>
        </aside>

        <div className="flex flex-col max-w-screen-sm w-full">
          <section className="m-10 p-5 flex flex-col gap-10 bg-white shadow-md">
            <h2 className="text-xl font-semibold">Conceder Permissões</h2>
            <div className="flex flex-col gap-4">
              {/* YouTube */}
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <FaYoutube className="text-red-600 text-2xl" />
                  <span>YouTube</span>
                </div>
                <button
                  onClick={() => handleAuthorize("youtube")}
                  disabled={connections.youtube}
                  className={`py-2 px-4 rounded-lg ${
                    connections.youtube
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  {connections.youtube ? "Conectado" : "Conectar"}
                </button>
              </div>

              {/* Facebook */}
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <FaFacebook className="text-blue-600 text-2xl" />
                  <span>Facebook</span>
                </div>
                <button
                  onClick={() => handleAuthorize("facebook")}
                  disabled={connections.facebook}
                  className={`py-2 px-4 rounded-lg ${
                    connections.facebook
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {connections.facebook ? "Conectado" : "Conectar"}
                </button>
              </div>

              {/* Twitter */}
              <div className="flex items-center justify-between p-4 border rounded-md">
                <div className="flex items-center gap-3">
                  <FaTwitter className="text-sky-500 text-2xl" />
                  <span>Twitter</span>
                </div>
                <button
                  onClick={() => handleAuthorize("twitter")}
                  disabled={connections.twitter}
                  className={`py-2 px-4 rounded-lg ${
                    connections.twitter
                      ? "bg-green-500 text-white cursor-default"
                      : "bg-sky-500 text-white hover:bg-sky-600"
                  }`}
                >
                  {connections.twitter ? "Conectado" : "Conectar"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
