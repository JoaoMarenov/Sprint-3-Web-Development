const integrantes = [
  {
    nome: "Thalles",
    imagem: "/img/membro_Thalles.svg",
    funcao: "Liderança de Produto e Integração IA",
    descricao:
      "Responsável por conectar o modelo de IA de código aberto ao pipeline de câmera da Jovy, cuidando da detecção de cálculos em tempo real.",
  },
  {
    nome: "Murillo",
    imagem: "/img/membro_Murillo.svg",
    funcao: "Engenharia Mobile e Performance",
    descricao:
      "Cuida da experiência nativa do Modo Inteligente no app de câmera, garantindo resposta rápida e baixo consumo de bateria.",
  },
  {
    nome: "Isaac",
    imagem: "/img/membro_Isaac.svg",
    funcao: "Modelagem de IA e Reconhecimento de Cálculos",
    descricao:
      "Treina e ajusta o modelo de IA de código aberto responsável por reconhecer as equações apontadas pela câmera.",
  },
  {
    nome: "João Lucca",
    imagem: "/img/membro_Joao.svg",
    funcao: "Design de Interface e Experiência",
    descricao:
      "Desenha a jornada do pop-up de detecção até a resolução expandida, garantindo clareza para qualquer nível de estudo.",
  },
];

function Equipe() {
  return (
    <section id="equipe" className="secao secao-cinza">
      <div className="conteiner">
        <p className="chamada">Quem constrói o Codex</p>
        <h2>Nossa equipe</h2>
        <p className="texto-destaque">
          Um time pequeno, focado em levar IA de código aberto para dentro do
          app de câmera da Jovi.
        </p>

        <div className="grid-conteudo grid-equipe">
          {integrantes.map((integrante) => (
            <article className="caixa cartao-equipe" key={integrante.nome}>
              <img
                className="foto-equipe"
                src={integrante.imagem}
                alt={`Ilustração de ${integrante.nome}`}
              />
              <h3>{integrante.nome}</h3>
              <p className="funcao-equipe">{integrante.funcao}</p>
              <p>{integrante.descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipe;