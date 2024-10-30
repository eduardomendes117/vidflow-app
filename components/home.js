import Link from "next/link";

const Home = () => {
  return (
    <section className="max-w-screen-sm h-svh flex flex-col justify-center gap-5 p-5">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
        Automatize Suas Postagens de Vídeo em Múltiplas Plataformas com
        Facilidade
      </h1>

      <p className="lg:text-xl">
        <strong>VidFlow</strong> é a solução ideal para criadores de conteúdo
        que desejam maximizar sua presença online.
      </p>

      <Link
        className="w-max rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        href="/inicio"
        rel="noopener noreferrer"
      >
        Começar
      </Link>
    </section>
  );
};

export default Home;
