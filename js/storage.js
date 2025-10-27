function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Erro ao salvar no localStorage:", error);
  }
}

function loadData(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Erro ao carregar do localStorage:", error);
    return null;
  }
}

function removeData(key) {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao remover do localStorage:", error);
  }
}
