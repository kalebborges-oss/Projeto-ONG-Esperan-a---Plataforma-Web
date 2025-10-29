function loadPage(route) {
  const app = document.getElementById("app");
  const page = route || "home";

  // Carrega o template correspondente ou a página 404
  app.innerHTML = templates[page] || templates["notfound"];

  // Aplica foco na seção carregada para acessibilidade
  const section = app.querySelector("section");
  if (section) {
    section.setAttribute("tabindex", "0"); // Garante que seja focável
    section.focus(); // Move o foco para o conteúdo
  }
}

// Carrega a página inicial ao abrir o site
window.addEventListener("DOMContentLoaded", () => {
  const route = location.hash.slice(1);
  loadPage(route);
});

// Atualiza a página ao mudar o hash (navegação SPA)
window.addEventListener("hashchange", () => {
  const route = location.hash.slice(1);
  loadPage(route);
});
