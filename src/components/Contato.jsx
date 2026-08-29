function Contato({ salvarContato }) {
  return (
    <section id="contato" className="secao">
      <div className="conteiner">
        <p className="chamada">Fale com o time</p>
        <h2>Vamos conversar sobre o Codex</h2>
        <p className="texto-destaque">
          Dúvidas sobre a proposta, parcerias ou feedback sobre o Modo
          Inteligente? Envie uma mensagem ou fale com a equipe diretamente
          pelos canais abaixo.
        </p>

        <div className="grid-conteudo grid-contato">
          <article className="caixa cartao-info-contato">
            <h3>Informações de contato</h3>
            <p>
              <strong>E-mail:</strong>{" "}
              <a href="mailto:codex@jovi-projeto.com">codex@jovi-projeto.com</a>
            </p>
            <p>
              <strong>Telefone / WhatsApp:</strong>{" "}
              <a href="tel:+5511999990000">+55 (11) 99999-0000</a>
            </p>
            <p><strong>Redes sociais:</strong></p>
            <ul className="lista-redes-sociais">
              <li><a href="#contato">Instagram</a></li>
              <li><a href="#contato">LinkedIn</a></li>
              <li><a href="#contato">GitHub</a></li>
            </ul>
          </article>

          <article className="caixa cartao-formulario">
            <form onSubmit={salvarContato}>
              <label htmlFor="nome">Nome</label>
              <input type="text" id="nome" name="nome" required />

              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows="5" required />

              <button type="submit" className="botao botao-primario botao-formulario">
                Enviar mensagem
              </button>
              <p id="status-formulario" className="status-formulario" aria-live="polite">
                As mensagens enviadas são salvas apenas neste navegador.
              </p>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Contato;