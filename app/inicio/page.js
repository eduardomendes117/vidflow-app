import Image from "next/image";

const { default: Header } = require("@/components/header");

const Inicio = () => {
  return (
    <div>
      <header className="lg:px-20 backdrop-blur-xl bg-black/70 flex justify-between items-center w-full p-4">
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

        <nav>
          <Image
            className="bg-white rounded-full w-10 h-10"
            src="/perfil.webp"
            width={30}
            height={30}
            alt="foto perfil"
            id="perfil"
          />
        </nav>
      </header>

      <div className="flex m-2">
        <aside className="bg-black mr-2 rounded-md p-10 fill-white flex flex-col justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>

          <svg
            width={25}
            height={25}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </aside>

        <div className="flex gap-10 max-w-screen-lg w-full">
          <section className="flex flex-col justify-between w-full">
            <div className="bg-white rounded-md h-72 flex justify-center items-center text-2xl text-black">
              <span>Video Aqui</span>
            </div>
            <button className="w-full block hover:bg-white hover:text-black px-4 py-2 rounded-md bg-transparent border border-white">
              Enviar video
            </button>
          </section>

          <section className="flex flex-col gap-3 text-xl">
            <label for="titulo">Titulo</label>
            <input
              className="py-1 rounded-md bg-transparent border border-white"
              type="text"
              id="titulo"
            />

            <label for="descricao">Descrição</label>
            <textarea
              className="py-1 rounded-md bg-transparent border border-white"
              cols="30"
              rows="5"
              id="descricao"
            ></textarea>

            <label for="tags">Tags</label>
            <input
              className="py-1 rounded-md bg-transparent border border-white"
              type="text"
              id="tags"
            />
          </section>
        </div>
      </div>
    </div>
  );
};

export default Inicio;
