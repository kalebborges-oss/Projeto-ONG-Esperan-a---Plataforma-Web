document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app");

  const observer = new MutationObserver(() => {
    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const emailInput = form.querySelector("#email");
        const emailValue = emailInput.value.trim();

        if (!emailValue.includes("@") || !emailValue.includes(".")) {
          alert("Por favor, insira um email válido.");
          emailInput.classList.add("error");
        } else {
          alert("Formulário enviado com sucesso!");
          emailInput.classList.remove("error");

          saveData("emailContato", emailValue);
          form.reset();
        }
      });

      const emailSalvo = loadData("emailContato");
      if (emailSalvo) {
        console.log("Email salvo anteriormente:", emailSalvo);
      }
    }
  });

  observer.observe(app, { childList: true, subtree: true });
});
