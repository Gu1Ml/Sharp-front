// src/utils.js
/**
 * Gera a URL ou o identificador de uma página a partir de seu nome.
 * Exemplo: createPageUrl('Feed') -> '/feed'
 *          createPageUrl('User Profile') -> '/user-profile'
 */
export function createPageUrl(pageName) {
  if (!pageName) return "/";
  return (
    "/" +
    pageName
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9\-]/g, "")
  );
}
