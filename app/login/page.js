"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Google from "@/components/google";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [errorMessage, setErrorMessage] = useState(""); // Armazenando mensagens de erro
  const router = useRouter(); // Hook para redirecionamento

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Limpa mensagens de erro anteriores

    // Simula um fetch para validar o login (substitua por uma chamada de API real)
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert("Login bem-sucedido!");

        // Redireciona para o dashboard ou página principal após login bem-sucedido
        router.push("/inicio");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Credenciais inválidas. Tente novamente."
        );
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
      setErrorMessage(
        "Ocorreu um erro ao tentar fazer login. Tente novamente."
      );
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen h-screen grid lg:grid-cols-2 mx-auto">
        <div className="hidden font-bold lg:text-4xl lg:flex justify-center gap-2 items-center bg-slate-100">
          <Image
            className="fill-white"
            src="/vidflow.svg"
            alt="logo"
            width={40}
            height={40}
          />
          Vidflow
        </div>

        <div className="bg-white flex justify-center items-center">
          <form
            className="max-w-sm p-7 rounded-3xl w-full flex flex-col gap-1 mx-auto"
            onSubmit={handleSubmit}
          >
            <p className="font-medium">Bem-vindo de volta</p>
            <h1 className="text-xl lg:text-2xl mb-3 font-semibold">Faça login na sua conta</h1>
            {errorMessage && (
              <div className="text-red-500 text-sm mb-3">{errorMessage}</div>
            )}
            <label htmlFor="email">E-mail</label>
            <input
              className="focus-visible:outline-none flex gap-2 bg-white border border-gray-300 hover:border-gray-700 text-black rounded-lg py-1 px-2 lg:py-2"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="senha">Senha</label>
            <input
              className="focus-visible:outline-none flex gap-2 bg-white border border-gray-300 hover:border-gray-700 text-black rounded-lg py-1 px-2 lg:py-2"
              type="password"
              name="senha"
              id="senha"
              maxLength={8}
              value={formData.senha}
              onChange={handleInputChange}
              required
            />
            <div className="text-sm flex justify-between">
              <div className="flex items-center gap-1">
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Lembre de mim</label>
              </div>
              <a className="text-blue-500" href="#">
                Esqueceu sua senha?
              </a>
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-blue-500 text-white hover:bg-blue-700 font-medium text-sm rounded-lg px-2 py-3 mt-3"
            >
              Entrar na conta
            </button>
            <Google />
            <p className="text-center text-sm mt-5">
              Não tem uma conta?{" "}
              <Link
                href="/register"
                className="text-blue-500 hover:underline font-medium"
              >
                inscrever-se
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
