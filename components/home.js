import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      <section className="max-w-screen-sm h-svh flex flex-col justify-center gap-3 lg:gap-10 p-5">
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium lg:leading-tight">
          Automatize Suas Postagens de Vídeo em Múltiplas Plataformas com
          Facilidade
        </h1>
        <Link
          className="w-max rounded-full border border-solid border-transparent transition-colors flex items-center bg-blue-500 text-background gap-2 hover:bg-blue-400 text-sm sm:text-2xl h-10 sm:h-14 px-4 sm:px-8"
          href="/login"
          rel="noopener noreferrer"
        >
          Começar
        </Link>
      </section>

      <section>
        <Image width={500} height={500} src="/image.png" alt="foto"/>
      </section>
    </div>
  );
};

export default Home;
