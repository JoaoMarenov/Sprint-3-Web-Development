const telas = [
  {
    imagem: "/img/camera-modo-inteligente.png",
    alt: "Interface da câmera no Modo Inteligente com indicadores de foco apontando para uma conta",
    titulo: "1. Câmera no Modo Inteligente",
    descricao:
      "O usuário enquadra a conta com a câmera. Os indicadores de foco mostram que a IA está analisando a cena.",
  },
  {
    imagem: "/img/camera-modo-inteligente-quest.png",
    alt: "Pop-up perguntando se o usuário deseja resolver o cálculo detectado na lousa",
    titulo: "2. Pop-up de detecção",
    descricao:
      "Ao identificar uma equação na lousa ou no papel, o app pergunta se o usuário deseja ver a resolução.",
  },
  {
    imagem: "/img/camera-modo-inteligente-resolucao.png",
    alt: "Card expandido mostrando o resultado final e o passo a passo da resolução do cálculo",
    titulo: "3. Resolução passo a passo",
    descricao:
      "Ao confirmar, o pop-up se expande e revela o resultado final acompanhado de cada etapa do raciocínio.",
  },
];

function Galeria() {
  return (
    <section id="galeria" className="secao">
      <div className="conteiner">
        <p className="chamada">A interface em ação</p>
        <h2>Três telas, uma jornada completa</h2>
        <p className="texto-destaque">
          Do enquadramento à explicação detalhada — veja as etapas que compõem
          a experiência do Modo Inteligente dentro da câmera Jovi.
        </p>

        <div className="grid-conteudo grid-galeria">
          {telas.map((tela) => (
            <article className="caixa cartao-galeria" key={tela.titulo}>
              <img src={tela.imagem} alt={tela.alt} />
              <h3>{tela.titulo}</h3>
              <p>{tela.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Galeria;