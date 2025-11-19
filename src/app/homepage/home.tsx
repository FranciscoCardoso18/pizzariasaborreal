import { Link } from "react-router-dom";
import pizza from "../../../public/assets/pizza.png";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Conteúdo principal */}
      <main className="flex-1 flex items-center">
        <section className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <h1 className="text-6xl font-bold text-red-700 leading-tight">
              A pizza que você merece
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
              Sabor incrível em cada pedaço.
            </p>

            <Link to="/menu">
              <button className="mt-6 bg-red-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-red-700 transition">
                Ver Cardápio
              </button>
            </Link>
          </div>

          {/* Imagem */}
          <div className="flex justify-center">
            <img src={pizza} className="max-w-2xl w-full" />
          </div>
        </section>
      </main>
    </div>
  );
}
