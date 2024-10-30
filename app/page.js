import Header from "@/components/header";
import Home from "@/components/home";

export default function App() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Header />

      <main className="flex justify-center">
        <Home />
      </main>

      <footer className="bg-black py-4 text-center">
        <p>©2024 VidFlow. Todos os direitos estão reservados</p>
      </footer>
    </div>
  );
}
