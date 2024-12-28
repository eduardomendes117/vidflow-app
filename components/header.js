import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="lg:px-20 backdrop-blur-sm flex justify-between items-center w-full p-3 shadow-sm">
      <h1 className="font-bold sm:text-xl lg:text-2xl flex gap-2 items-center">
        <Image
          className="fill-black"
          src="/vidflow.svg"
          alt="logo"
          width={30}
          height={30}
        />
        Vidflow
      </h1>

      <nav className="flex items-center gap-5">
        <Link href="/">Sobre Nós</Link>

        <Link href="/">Planos</Link>

        <Link href="/">Contato</Link>

        <Link
          className="bg-blue-500 text-white dark:hover:bg-blue-400 py-2 px-4 lg:px-6 lg:text-lg font-medium rounded-lg"
          href="/login"
        >
          conecte-se
        </Link>
      </nav>
    </header>
  );
};

export default Header;
