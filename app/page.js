import Image from "next/image";
import Header from "@/components/header";
import Home from "@/components/home";

export default function App() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-col items-center justify-center bg-slate-100">
        <Home />

        <section className="bg-white w-full p-10 text-center">
          <h2 className="text-3xl font-medium">Automatize suas postagens nas redes sociais</h2>
          <p className="text-black/70 m-5">Integrações disponiveis</p>

          <ul className="flex max-w-screen-md justify-around mx-auto ">
            <li
              className="border flex items-center font-medium gap-2 px-4 py-1 rounded-xl bg-white hover:shadow-md duration-500 hover:scale-105 h-16"
            >
              <Image src="/YouTube.svg" alt="YouTube" width={40} height={40} />

              Youtube
            </li>

            <li
              className="border flex items-center font-medium gap-2 px-5 py-1 rounded-xl bg-white hover:shadow-md duration-500 hover:scale-105 h-16"
            >
              <Image src="/Instagram.svg" alt="Instagram" width={30} height={30} />

              Instagram
            </li>

            <li
              className="border flex  items-center font-medium gap-2 px-4 py-1 rounded-xl bg-white hover:shadow-md duration-500 hover:scale-105 h-16"
            >
              <Image src="/Pinterest.svg" alt="Pinterest" width={30} height={30} />

              Pinterest
            </li>

            <li
              className="border flex items-center gap-2 px-4 py-1 rounded-xl bg-white hover:shadow-md duration-500 hover:scale-105 h-16"
            >
              <Image src="/TikTok.svg" alt="TikTok" width={30} height={30} />

              Tiktok
            </li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-100 py-4 text-center">
        <p>©2024 VidFlow. Todos os direitos estão reservados</p>
      </footer>
    </div>
  );
}
