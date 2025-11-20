import sobreImg from "../../../public/assets/chefe-da-pizzaria.png";

export default function Sobre() {
  return (
    <div className="min-h-screen flex items-center bg-gray-50 pt-32 md:pt-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Texto à esquerda */}
        <div className="text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 leading-tight">
            Sobre Nós
          </h1>

          <p className="mt-6 text-gray-700 text-lg">
            Sabor Real nasceu de um sonho simples: transformar ingredientes
            frescos em momentos inesquecíveis. Cada pizza é feita com massa
            crocante, molho artesanal e recheios que despertam sorrisos. Aqui,
            não é só comer, é sentir cada mordida, celebrar sabores e criar
            memórias. No Sabor Real, cada fatia é feita com paixão, qualidade e
            autenticidade, porque o verdadeiro sabor merece ser vivido.
          </p>
        </div>

        {/* Imagem à direita */}
        <div className="flex justify-center">
          <img
            src={sobreImg}
            alt="Sobre Sabor Real"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
