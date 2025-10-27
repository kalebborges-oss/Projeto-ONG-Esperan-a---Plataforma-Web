// Espera o DOM carregar
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (toggleButton && navLinks) {
    toggleButton.addEventListener("click", function () {
      navLinks.classList.toggle("show");
    });
  }
});
