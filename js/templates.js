const templates = {
  home: `
    <section>
      <h1>Bem-vindo à nossa ONG</h1>
      <p>Estamos aqui para tornar o seu mundo mais justo e solidário.</p>
      <img src="assets/imagens/ong.jpg" alt="Imagem da ONG" class="imagem-destaque">
    </section>
  `,
  sobre: `
    <section>
      <h1>Sobre Nós</h1>
      <p>Somos uma organização sem fins lucrativos dedicada a causas sociais.</p>
      <img src="assets/imagens/projeto.jpg" alt="Imagem do projeto" class="imagem-destaque">
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
      <img src="assets/imagens/voluntarios.jpg" alt="Imagem dos voluntários" class="imagem-destaque">
    </section>
  `,
  notfound: `
    <section>
      <h1>404</h1>
      <p>Página não encontrada.</p>
    </section>
  `
};
