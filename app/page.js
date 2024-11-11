import Image from "next/image";
import Header from "@/components/header";
import Home from "@/components/home";
import SvgInstagram from "/public/instagram.svg";
import SvgYoutube from "/public/Youtube.svg";
import SvgPinterest from "/public/Pinterest.svg";
import SvgTiktok from "/public/TikTok.svg";

export default function App() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex flex-col items-center justify-center bg-stone-200">
        <Home />

        <section className="flex justify-around max-w-xs w-full pb-20">
          <div
            className="border flex gap-2 px-5 py-2 rounded-xl bg-white hover:shadow-md duration-500 hover:scale-105 h-16 w-16 text-white"
          >
            <Image src={SvgYoutube} alt="Youtube" />
          </div>
          <div
            className="border flex gap-2 px-5 py-2 rounded-xl bg-white hover:shadow-md duration-500 hover:scale-105 h-16 w-16 text-white"
          >
            <Image src={SvgInstagram} alt="instagram" />
          </div>

          <div
            className="border flex gap-2 px-5 py-2 rounded-xl bg-white hover:shadow-md duration-500 hover:scale-105 h-16 w-16 text-white"
          >
            <Image src={SvgPinterest} alt="Pinterest" />
          </div>

          <div
            className="border flex gap-2  px-5 py-2 rounded-xl bg-white hover:shadow-md duration-500 hover:scale-105 h-16 w-16 text-white"
          >
            <Image src={SvgTiktok} alt="TikTok" />
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-4 text-center">
        <p>©2024 VidFlow. Todos os direitos estão reservados</p>
      </footer>
    </div>
  );
}
