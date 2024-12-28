"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Conta criada com sucesso!");
        router.push("/login");
      } else {
        const errorData = await response.json();
        setErrorMessage(
          errorData.message || "Erro desconhecido. Tente novamente."
        );
      }
    } catch (error) {
      console.error("Erro ao registrar", error);
      setErrorMessage(
        "Ocorreu um erro ao tentar criar sua conta. Tente novamente."
      );
    }
  };

  return (
    <div className="bg-gray-100">
      <div className="max-w-screen h-screen grid grid-cols-2 mx-auto">
        <h1 className="font-bold lg:text-4xl flex justify-center gap-2 items-center bg-slate-100">
          <Image
            className="fill-white"
            src="/vidflow.svg"
            alt="logo"
            width={40}
            height={40}
          />
          Vidflow
        </h1>

        <div className="bg-white flex justify-center items-center">
          <form
            className="max-w-sm p-7 rounded-3xl w-full flex flex-col gap-1 mx-auto"
            onSubmit={handleSubmit}
          >
            <p className="font-medium">Bem-vindo ao VidFlow</p>
            <h1 className="text-xl lg:text-2xl mb-3 font-semibold">
              Crie sua conta
            </h1>
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

            <button
              type="submit"
              className="cursor-pointer bg-blue-500 text-white hover:bg-blue-700 font-medium text-sm rounded-lg px-2 py-3 mt-3"
            >
              Criar conta
            </button>

            <p className="text-center text-sm mt-5">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="text-blue-500 hover:underline font-medium"
              >
                entrar na conta
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
