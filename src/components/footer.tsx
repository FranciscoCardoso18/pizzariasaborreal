import { Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-700 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo + Descrição */}
        <div>
          <h2 className="text-2xl font-bold">Sabor Real</h2>
          <p className="mt-2 text-gray-200">
            A pizzaria que leva o verdadeiro sabor até você.
          </p>
        </div>

        {/* Contatos */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contactos</h3>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={20} /> +244 999 000 111
          </p>
          <p className="mt-2">Rua das Mangueiras, Nº 25 – Luanda</p>
          <p className="mt-2">Atendimento: 10h – 23h</p>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Siga-nos</h3>

          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://wa.me/244999000111?text=Olá!%20Quero%20fazer%20um%20pedido."
              target="_blank"
              className="hover:text-gray-300 transition"
            >
              <MessageCircle size={28} />
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              <Instagram size={28} />
            </a>

            <a href="#" className="hover:text-gray-300 transition">
              <Facebook size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="bg-red-800 py-4 text-center text-sm">
        © 2025 Sabor Real — Todos os direitos reservados.
      </div>
    </footer>
  );
}
