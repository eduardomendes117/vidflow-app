"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoPower } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { AiFillApi } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";


const Inicio = () => {
  const [picture, setPicture] = useState(null); // Foto de perfil
  const [previewUrl, setPreviewUrl] = useState(null); // Pré-visualização do vídeo
  const [video, setVideo] = useState(null); // Arquivo de vídeo
  const [title, setTitle] = useState(""); // Título do vídeo
  const [description, setDescription] = useState(""); // Descrição do vídeo
  const [tags, setTags] = useState(""); // Tags do vídeo
  const [authUrl, setAuthUrl] = useState(null); // URL de autorização
  const [isAuthorized, setIsAuthorized] = useState(false); // Status de autorização

  // Recupera a foto de perfil do localStorage ao carregar a página
  useEffect(() => {
    const storedPicture = localStorage.getItem("picture");
    if (storedPicture) {
      setPicture(storedPicture);
    }
  }, []);

  // Obtém a URL de autenticação do backend
  const getAuthUrl = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth");
      if (!response.ok) throw new Error(`Erro ao obter URL: ${response.status}`);
      const data = await response.json();
      setAuthUrl(data.url || null);
    } catch (error) {
      console.error("Erro ao obter URL de autenticação:", error.message);
    }
  };

  // Verifica se o token está salvo no localStorage
  const checkAuthorization = () => {
    const token = localStorage.getItem("youtubeToken");
    if (token) setIsAuthorized(true);
  };

  // Manipula o upload do vídeo
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("video/")) {
      setVideo(file);
      setPreviewUrl(URL.createObjectURL(file)); // Pré-visualização do vídeo
    } else {
      alert("Por favor, selecione um arquivo de vídeo válido.");
    }
  };

  // Envia os dados do vídeo para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!video || !title || !description) {
      alert("Por favor, preencha todos os campos e faça o upload de um vídeo.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("video", video);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("tags", tags);

      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        alert(`Vídeo enviado com sucesso! Veja no link: ${result.link}`);
      } else {
        alert(`Erro ao enviar vídeo: ${result.error}`);
      }
    } catch (error) {
      console.error("Erro ao enviar vídeo:", error);
      alert("Erro ao enviar vídeo.");
    }
  };

  // Carregar URL de autorização e verificar autenticação ao montar
  useEffect(() => {
    getAuthUrl();
    checkAuthorization();
  }, []);

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

      <div className="flex h-full justify-center bg-gray-100">
        <aside className="hidden fixed left-0 bg-slate-950 w-52 p-3 sm:flex flex-col justify-between items-center h-screen">
          <h1 className="font-bold text-white lg:text-2xl">Vidflow</h1>

          <ul className="text-white w-full">
            <li className="text-white hover:bg-slate-800 w-full py-2 px-3 rounded-lg text-lg flex items-center gap-2">
            <MdVideoLibrary /> Biblioteca
            </li>

            <Link href="/integracao" className="text-white hover:bg-slate-800 w-full py-2 px-3 rounded-lg text-lg flex items-center gap-2">
            <AiFillApi /> Integrações
            </Link>

            <li className="text-white hover:bg-slate-800 w-full py-2 px-3 rounded-lg text-lg flex items-center gap-2">
            <IoMdSettings /> Configurações
            </li>
          </ul>

          <button className="text-red-400 bg-red-100/10 hover:bg-slate-800 w-full py-1 rounded-lg flex justify-center items-center gap-2 text-lg"><IoPower className="text-2xl"/> Desconectar</button>
        </aside>

        <div className="flex flex-col max-w-screen-sm w-full h-svh">
          <section className="m-10 p-5 flex flex-col gap-10 bg-white shadow-md">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-5">
                {previewUrl && (
                  <div className="h-60 lg:h-full rounded-md flex justify-center items-center">
                    <video
                      src={previewUrl}
                      controls
                      className="w-full rounded-md"
                    />
                  </div>
                )}

                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoUpload}
                  className="p-2 border rounded"
                />
              </div>

              <div className="flex flex-col gap-3 mt-4">
                <label htmlFor="titulo">
                  Título
                  <input
                    id="titulo"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Digite o título"
                    className="p-2 border rounded w-full"
                  />
                </label>
                <label htmlFor="descricao">
                  Descrição
                  <textarea
                    id="descricao"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Digite a descrição"
                    className="p-2 border rounded w-full"
                  ></textarea>
                </label>
                <label htmlFor="tags">
                  Tags
                  <input
                    id="tags"
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Tags separadas por vírgulas"
                    className="p-2 border rounded w-full"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
              >
                Enviar Vídeo
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Inicio;
