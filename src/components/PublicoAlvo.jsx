const publicos = [
  {
    icone: "📓",
    titulo: "Estudantes de exatas",
    descricao:
      "Ganham um tutor de bolso capaz de destrinchar equações de álgebra, cálculo e física direto do caderno.",
  },
  {
    icone: "💼",
    titulo: "Professores",
    descricao:
      "Conferem exercícios e gabaritos em segundos durante a correção, ganhando tempo para focar na didática.",
  },
  {
    icone: "📐",
    titulo: "Engenheiros",
    descricao:
      "Validam rapidamente cálculos estruturais, elétricos e de medição em campo, sem depender de calculadoras extras.",
  },
  {
    icone: "💻",
    titulo: "Entusiastas de tecnologia",
    descricao:
      "Exploram na prática o que a IA de código aberto é capaz de fazer junto ao hardware de câmera Jovy.",
  },
];

function PublicoAlvo() {
  return (
    <section id="publico-alvo" className="secao secao-cinza">
      <div className="conteiner">
        <p className="chamada">Para quem é o Codex</p>
        <h2>Construído para quem vive rodeado de números</h2>
        <p className="texto-destaque">
          O Modo Inteligente foi desenhado para se encaixar na rotina de
          quatro perfis que lidam com cálculos com frequência — em salas de
          aula, canteiros de obra, laboratórios ou simplesmente por curiosidade
          com tecnologia.
        </p>

        <div className="grid-conteudo grid-publico">
          {publicos.map((publico) => (
            <article className="caixa cartao-publico" key={publico.titulo}>
              <span className="icone-publico" aria-hidden="true">{publico.icone}</span>
              <h3>{publico.titulo}</h3>
              <p>{publico.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PublicoAlvo;