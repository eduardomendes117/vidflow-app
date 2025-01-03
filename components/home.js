import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <section className="max-w-screen-sm h-svh flex flex-col justify-center gap-3 lg:gap-5 p-5">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold lg:leading-tight">
          Automatize Suas Postagens de Vídeo em Múltiplas Plataformas com
          Facilidade
        </h1>

        <p className="lg:text-lg"><span className="font-bold">VidFlow</span> é a solução ideal para criadores de conteúdo que desejam maximizar sua presença online.</p>

        <Link
          className="w-max rounded-full border border-solid border-transparent transition-colors flex items-center bg-green-400 gap-2 hover:bg-green-300 font-medium text-sm sm:text-xl sm:h-12 px-4 sm:px-5"
          href="/login"
          rel="noopener noreferrer"
        >
          Começar
        </Link>
      </section>

      <section>
        <Image width={500} height={500} src="/redesociais.png" alt="foto"/>
      </section>
    </div>
  );
};

export default Home;
