"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const Inicio = () => {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    // Recuperando a imagem do localStorage
    const picture = localStorage.getItem("picture");
    if (picture) {
      setPicture(picture);
    }
  }, []);

  return (
    <>
      <header className="lg:hidden lg:px-20 bg-slate-950 shadow-md backdrop-blur-xl flex justify-between items-center w-full p-4">
        <h1 className="font-bold text-white lg:text-2xl flex gap-2 items-center">
          <svg
            className="w-7 h-7"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            fill="#fff"
          >
            <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"></path>
          </svg>
          Vidflow
        </h1>
        <nav>
          <Image
            className="bg-white rounded-full w-10 h-10"
            src={picture}
            width={30}
            height={30}
            alt="foto perfil"
            id="perfil"
          />
        </nav>
      </header>

      <div className="flex h-svh bg-gray-100">
        <aside className="hidden bg-slate-950 p-10 fill-white lg:flex flex-col justify-between">
          <h1 className="font-bold text-white lg:text-2xl flex gap-2 items-center">
            <svg
              className="w-7 h-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="#fff"
            >
              <path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"></path>
            </svg>
            Vidflow
          </h1>
        </aside>

        <div className="flex flex-col w-full">
          <header className="hidden lg:px-20 bg-white shadow-md backdrop-blur-xl lg:flex justify-between items-center w-full p-4">
            <span></span>
            <Image
              className="bg-white rounded-full w-10 h-10"
              src={picture}
              width={30}
              height={30}
              alt="foto perfil"
              id="perfil"
            />
          </header>

          <section className="m-10 p-5 flex lg:flex-row flex-col gap-10 bg-white shadow-md">
            <div className="flex flex-col gap-5 justify-between w-full">
              <div className="bg-red-50 h-60 lg:h-full rounded-md flex justify-center items-center text-2xl text-black">
                <span>Video Aqui</span>
              </div>

              <button className="w-full block hover:bg-blue-400 hover:text-black duration-200 px-4 py-2 rounded-md bg-transparent border border-gray-500">
                Enviar video
              </button>
            </div>

            <div className="flex flex-col gap-3 text-xl w-full">
              <label for="titulo">Titulo</label>
              <input
                className="py-1 rounded-md bg-transparent  border border-gray-500"
                type="text"
                id="titulo"
              />
              <label for="descricao">Descrição</label>
              <textarea
                className="py-1 rounded-md bg-transparent  border border-gray-500"
                cols="30"
                rows="5"
                id="descricao"
              ></textarea>
              <label for="tags">Tags</label>
              <input
                className="py-1 rounded-md bg-transparent  border border-gray-500"
                type="text"
                id="tags"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Inicio;
