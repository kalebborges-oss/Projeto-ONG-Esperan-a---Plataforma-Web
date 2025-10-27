function loadPage(route) {
  const app = document.getElementById("app");
  const page = route || "home";
  app.innerHTML = templates[page] || templates["notfound"];
}

window.addEventListener("DOMContentLoaded", () => {
  const route = location.hash.slice(1);
  loadPage(route);
});

window.addEventListener("hashchange", () => {
  const route = location.hash.slice(1);
  loadPage(route);
});
