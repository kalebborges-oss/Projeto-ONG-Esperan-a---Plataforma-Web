document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const observer = new MutationObserver(() => {
    const form = document.getElementById("contactForm");
    if (form && !form.dataset.listenerAttached) {
      form.dataset.listenerAttached = "true"; // Evita múltiplos listeners

      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = form.querySelector("#email");
        const emailValue = emailInput.value.trim();
        const errorId = "email-error";

        // Remove erro anterior, se existir
        const existingError = document.getElementById(errorId);
        if (existingError) {
          existingError.remove();
          emailInput.removeAttribute("aria-describedby");
        }

        // Validação simples de e-mail
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
        if (!emailRegex.test(emailValue)) {
          const error = document.createElement("span");
          error.id = errorId;
          error.className = "error-message";
          error.setAttribute("role", "alert");
          error.textContent = "Por favor, insira um e-mail válido.";

          emailInput.setAttribute("aria-describedby", errorId);
          emailInput.insertAdjacentElement("afterend", error);
          emailInput.focus();
          return;
        }

        // Sucesso
        alert("Mensagem enviada com sucesso!");
        form.reset();
      });
    }
  });

  // Observa mudanças no conteúdo do #app (SPA)
  observer.observe(app, { childList: true, subtree: true });
});
