"use client";
import Image from "next/image";
import Google from "@/components/google";

const Login = () => {
  return (
    <div>
      <header className="lg:px-20 backdrop-blur-xl flex justify-between items-center w-full p-4">
        <h1 className="font-bold lg:text-2xl flex gap-2 items-center">
          <Image
            className="fill-white"
            src="/vidflow.svg"
            alt="logo"
            width={30}
            height={30}
          />
          Vidflow
        </h1>
      </header>

      <div className="h-screen flex justify-center items-center bg-gray-100">
        <form className="max-w-sm bg-white border border-gray-200 shadow-md p-7 rounded-xl w-full flex flex-col gap-2 mx-auto">
          <h1 className="text-2xl lg:text-3xl mb-3">Entrar</h1>
          <label className=" " for="email">
            E-mail
          </label>

          <input
            className="focus-visible:outline-none flex gap-2 bg-white border border-gray-300 hover:border-gray-700 text-black rounded-md py-1 px-2 lg:py-2"
            type="email"
            name="email"
            id="email"
            required
          />
          <label className=" " for="senha">
            Senha
          </label>
          <input
            className="focus-visible:outline-none flex gap-2 bg-white border border-gray-300 hover:border-gray-700 text-black rounded-md py-1 px-2 lg:py-2"
            type="password"
            name="senha"
            id="senha"
            maxLength={8}
            required
          />

          <input
            className="cursor-pointer bg-blue-500 hover:bg-blue-400 font-medium text-sm rounded-md px-2 py-2 mt-3"
            type="button"
            value="ENTRAR"
          />

          <div className="flex items-center gap-5 my-3">
            <hr className="w-full" />
            <p>ou</p>
            <hr className="w-full" />
          </div>

          <Google />

          <p className="text-center">Não tem uma conta? <a href="#" className="text-blue-500 hover:underline">Inscreva-se</a></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
