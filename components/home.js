import Link from "next/link";

const Home = () => {
  return (
    <section className="max-w-screen-sm h-svh flex flex-col justify-center gap-3 lg:gap-5 p-5">
      <h1 className="text-3xl text-center md:text-4xl lg:text-5xl xl:text-6xl font-medium lg:leading-tight">
        Automatize Suas Postagens de Vídeo em Múltiplas Plataformas com
        Facilidade
      </h1>

      <p className="lg:text-2xl">
        {/* <strong>VidFlow</strong> é a solução ideal para criadores de conteúdo
        que desejam maximizar sua presença online. */}
      </p>

      <Link
        className="w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-500 text-background gap-2 hover:bg-blue-400 text-sm sm:text-2xl h-10 sm:h-14 px-4 sm:px-8 mx-auto"
        href="/login"
        rel="noopener noreferrer"
      >
        Começar
      </Link>
    </section>
  );
};

export default Home;
