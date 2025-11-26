// Serviço preparado para futura integração com CMS (Strapi, Sanity, WordPress API)

const API_URL = "https://api.saborreal.com";
// Quando o CMS estiver pronto, só substituir a URL acima

export const getPizzas = async () => {
  const response = await fetch(`${API_URL}/pizzas`);
  if (!response.ok) throw new Error("Erro ao buscar pizzas");
  return response.json();
};

export const getGaleria = async () => {
  const response = await fetch(`${API_URL}/galeria`);
  if (!response.ok) throw new Error("Erro ao buscar galeria");
  return response.json();
};

export const getInformacoes = async () => {
  const response = await fetch(`${API_URL}/informacoes`);
  if (!response.ok) throw new Error("Erro ao buscar informações");
  return response.json();
};
