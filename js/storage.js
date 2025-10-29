/**
 * Salva dados no localStorage com segurança
 * @param {string} key - Nome da chave
 * @param {any} value - Valor a ser armazenado
 */
function saveData(key, value) {
  try {
    const serialized = JSON.stringify(value);
    localStorage.setItem(key, serialized);
  } catch (error) {
    console.error("Erro ao salvar no localStorage:", error);
  }
}

/**
 * Carrega dados do localStorage
 * @param {string} key - Nome da chave
 * @returns {any|null} - Dados recuperados ou null
 */
function loadData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Erro ao carregar do localStorage:", error);
    return null;
  }
}

/**
 * Remove dados do localStorage
 * @param {string} key - Nome da chave
 */
function removeData(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao remover do localStorage:", error);
  }
}

/**
 * Lista todas as chaves armazenadas (útil para debug ou painel admin)
 * @returns {string[]} - Array de chaves
 */
function listKeys() {
  try {
    return Object.keys(localStorage);
  } catch (error) {
    console.error("Erro ao listar chaves do localStorage:", error);
    return [];
  }
}
