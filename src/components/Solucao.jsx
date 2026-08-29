const etapas = [
  {
    numero: "01",
    titulo: "Ative o Modo Inteligente",
    descricao:
      "Dentro do app nativo de câmera Jovy, o usuário seleciona o modo dedicado ao reconhecimento de cálculos.",
  },
  {
    numero: "02",
    titulo: "Aponte para a equação",
    descricao:
      "A IA de código aberto analisa a cena em tempo real e identifica expressões matemáticas em lousas, cadernos ou telas.",
  },
  {
    numero: "03",
    titulo: "Confirme a resolução",
    descricao:
      "Um pop-up pergunta se o usuário deseja resolver o cálculo detectado — um toque em Sim é suficiente.",
  },
  {
    numero: "04",
    titulo: "Receba o passo a passo",
    descricao:
      "O card se expande revelando o resultado final e cada etapa do raciocínio utilizado para chegar até ele.",
  },
];

const beneficios = [
  {
    titulo: "Aprendizado facilitado",
    descricao:
      "Transforma qualquer superfície com uma conta em material de estudo interativo.",
  },
  {
    titulo: "Apoio real aos estudos",
    descricao:
      "Reforça o entendimento de matemática mostrando o raciocínio, não só o resultado.",
  },
  {
    titulo: "Agilidade no dia a dia",
    descricao:
      "Resolve em segundos o que levaria minutos com calculadora ou papel.",
  },
];

function Solucao({ gerarExercicio }) {
  return (
    <section id="solucao" className="secao">
      <div className="conteiner">
        <p className="chamada">O desafio Jovy</p>
        <h2>Matemática não deveria ser um obstáculo entre a pergunta e a resposta</h2>
        <p className="texto-destaque">
          Estudantes travam em exercícios, professores perdem tempo
          revalidando contas manualmente e profissionais de exatas precisam
          conferir cálculos em campo, longe de uma calculadora científica.
          Codex nasce para eliminar essa fricção usando o hardware que a
          pessoa já carrega no bolso: a câmera do celular Jovy.
        </p>

        <div className="grid-conteudo grid-etapas">
          {etapas.map((etapa) => (
            <article className="caixa cartao-etapa" key={etapa.numero}>
              <span className="numero-etapa">{etapa.numero}</span>
              <h3>{etapa.titulo}</h3>
              <p>{etapa.descricao}</p>
            </article>
          ))}
        </div>

        <div className="grid-conteudo grid-beneficios">
          {beneficios.map((beneficio) => (
            <article className="caixa cartao-beneficio" key={beneficio.titulo}>
              <h3>{beneficio.titulo}</h3>
              <p>{beneficio.descricao}</p>
            </article>
          ))}
        </div>

        <div className="caixa exercicio-aleatorio">
          <div>
            <p className="chamada">Teste rápido</p>
            <h3>Gere um exercício aleatório</h3>
            <p>
              Esta demonstração usa <strong>Math.random()</strong> e
              <strong> Math.floor()</strong> para montar uma conta simples.
            </p>
          </div>
          <div className="area-exercicio">
            <button type="button" className="botao botao-primario" onClick={gerarExercicio}>
              Gerar exercício
            </button>
            <p id="resultado-exercicio" className="resultado-exercicio" aria-live="polite">
              Clique no botão para gerar uma conta.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solucao;