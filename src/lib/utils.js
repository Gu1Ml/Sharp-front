export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
/**
 * Gera uma URL de página com base no nome da rota e parâmetros.
 * Exemplo: createPageUrl("profile", { id: 42 }) → "/profile?id=42"
 */
export function createPageUrl(page, params = {}) {
  const query = new URLSearchParams(params).toString();
  return query ? `/${page}?${query}` : `/${page}`;
}