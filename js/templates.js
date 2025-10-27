const templates = {
  home: `
    <section>
      <h1>Bem-vindo à nossa ONG</h1>
      <p>Trabalhamos por um mundo mais justo e solidário.</p>
    </section>
  `,
  sobre: `
    <section>
      <h1>Sobre Nós</h1>
      <p>Somos uma organização sem fins lucrativos dedicada a causas sociais.</p>
    </section>
  `,
  contato: `
    <section>
      <h1>Contato</h1>
      <form id="contactForm">
        <label for="email">Email:</label>
        <input type="email" id="email" required>
        <button type="submit">Enviar</button>
      </form>
    </section>
  `,
  notfound: `
    <section>
      <h1>404</h1>
      <p>Página não encontrada.</p>
    </section>
  `
};
