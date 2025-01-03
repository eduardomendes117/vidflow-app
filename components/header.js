import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="lg:px-20 backdrop-blur-sm flex justify-between items-center max-w-screen-xl mx-auto w-full p-3 shadow-sm">
      <h1 className="font-bold sm:text-xl lg:text-2xl flex gap-2 items-center">
        <Image
          className="fill-black"
          src="/vidflow.svg"
          alt="logo"
          width={20}
          height={20}
        />
        Vidflow
      </h1>

      <nav className="flex items-center gap-5">
        <Link
          className="py-3 px-4 lg:px-6 rounded-full"
          href="/register"
        >
          Inscrever-se
        </Link>

        <Link
          className="bg-black text-white dark:hover:bg-black/90 py-3 px-5 lg:px-7 rounded-full"
          href="/login"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
