"use client";

import React from "react";

interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const pizzas: Pizza[] = [
  {
    id: 1,
    name: "Pizza Margherita",
    description:
      "Clássica e irresistível! Massa artesanal, molho de tomate natural, mussarela e manjericão fresco.",
    price: 9800,
    image: "/assets/pizza6.jpg",
  },
  {
    id: 2,
    name: "Pizza Pepperoni com Manjericão",
    description:
      "Pepperoni crocante, queijo derretido e um toque de manjericão fresco.",
    price: 9800,
    image: "/assets/pizza2.jpg",
  },
  {
    id: 3,
    name: "Pizza Pepperoni no Forno a Lenha",
    description:
      "Assada em forno tradicional de lenha — sabor autêntico e aroma defumado.",
    price: 8700,
    image: "/assets/pizza3.jpg",
  },
  {
    id: 4,
    name: "Pizza Picante com Jalapeños",
    description:
      "Carne moída temperada com jalapeños picantes. Para quem gosta de intensidade.",
    price: 10500,
    image: "/assets/pizza4.jpg",
  },
  {
    id: 5,
    name: "Pizza Havaiana",
    description: "Clássica mistura tropical de queijo, abacaxi e flambre.",
    price: 7500,
    image: "/assets/pizza5.jpg",
  },
];

export default function Menu() {
  const whatsapp = "244928444793";

  const enviarWhatsapp = (nome: string, preco: number) => {
    const msg = `Olá! Quero pedir a pizza *${nome}* (${preco} Kz).`;
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-12">
      <h1 className="text-center text-4xl font-bold text-red-700 mb-8">
        Cardápio
      </h1>

      <div className="flex gap-6 overflow-x-auto px-4 pb-6">
        {pizzas.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-md rounded-xl flex flex-col w-72 flex-shrink-0 min-h-[450px]"
          >
            <img
              src={p.image}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="p-4 flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-xl font-semibold">{p.name}</h2>
                <p className="text-gray-600 text-sm mt-2">{p.description}</p>
              </div>

              <div>
                <p className="text-red-700 text-lg font-bold mt-3">
                  {p.price.toLocaleString()} Kz
                </p>
                <button
                  onClick={() => enviarWhatsapp(p.name, p.price)}
                  className="mt-2 bg-red-600 text-white py-2 rounded-lg w-full"
                >
                  Pedir Agora
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
