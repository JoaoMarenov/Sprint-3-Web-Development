function Header() {
  return (
    <header className="cabecalho">
      <div className="conteiner conteiner-cabecalho">
        <a href="#topo" className="logo">
          Codex <span>| Jovy</span>
        </a>

        <nav className="navegacao" aria-label="Navegação principal">
          <ul className="lista-navegacao">
            <li><a href="#solucao">A Solução</a></li>
            <li><a href="#publico-alvo">Público-Alvo</a></li>
            <li><a href="#galeria">Galeria</a></li>
            <li><a href="#equipe">Equipe</a></li>
            <li><a href="#contato" className="link-contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;