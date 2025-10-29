const templates = {
  home: `
    <section id="home" tabindex="0" aria-labelledby="home-title">
      <h1 id="home-title">Bem-vindo à nossa ONG</h1>
      <p>Estamos aqui para tornar o seu mundo mais justo e solidário.</p>
      <img src="assets/imagens/ong.jpg" alt="Imagem da fachada da ONG Interativa" class="imagem-destaque">
    </section>
  `,
  sobre: `
    <section id="sobre" tabindex="0" aria-labelledby="sobre-title">
      <h1 id="sobre-title">Sobre Nós</h1>
      <p>Somos uma organização sem fins lucrativos dedicada a causas sociais.</p>
      <img src="assets/imagens/projeto.jpg" alt="Imagem de um projeto social em andamento" class="imagem-destaque">
    </section>
  `,
  contato: `
    <section id="contato" tabindex="0" aria-labelledby="contato-title">
      <h1 id="contato-title">Contato</h1>
      <form id="contactForm" aria-label="Formulário de contato">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required aria-required="true" aria-label="Digite seu email">
        <button type="submit" aria-label="Enviar formulário de contato">Enviar</button>
      </form>
      <img src="assets/imagens/voluntarios.jpg" alt="Imagem de voluntários em ação" class="imagem-destaque">
    </section>
  `,
  notfound: `
    <section id="notfound" tabindex="0" aria-labelledby="notfound-title">
      <h1 id="notfound-title">404</h1>
      <p>Página não encontrada.</p>
    </section>
  `
};
