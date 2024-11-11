import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="lg:px-20 backdrop-blur-sm flex justify-between items-center w-full p-4">
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

      <nav className="flex gap-2">
        <Link
          className=" dark:hover:text-gray-700 border border-gray-700 py-2 px-3 lg:px-6 lg:text-xl rounded-full"
          href="/"
        >
          inscreve-se
        </Link>
        <Link
          className="bg-blue-500 text-white dark:hover:bg-blue-400 py-2 px-3 lg:px-6 lg:text-xl rounded-full"
          href="/login"
        >
          entrar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
