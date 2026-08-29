import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Solucao from "./components/Solucao.jsx";
import PublicoAlvo from "./components/PublicoAlvo.jsx";
import Galeria from "./components/Galeria.jsx";
import Equipe from "./components/Equipe.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  function gerarExercicio() {
    const operacoes = ["+", "-", "×"];
    const primeiroNumero = Math.floor(Math.random() * 20) + 1;
    const segundoNumero = Math.floor(Math.random() * 10) + 1;
    const operacao = operacoes[Math.floor(Math.random() * operacoes.length)];
    let resultado = 0;

    if (operacao === "+") {
      resultado = primeiroNumero + segundoNumero;
    }

    if (operacao === "-") {
      resultado = primeiroNumero - segundoNumero;
    }

    if (operacao === "×") {
      resultado = primeiroNumero * segundoNumero;
    }

    const textoExercicio = document.querySelector("#resultado-exercicio");

    textoExercicio.textContent = `Exercício gerado: ${primeiroNumero} ${operacao} ${segundoNumero} = ${resultado}`;
  }

  function salvarContato(event) {
    event.preventDefault();

    const formulario = event.target;
    const novaMensagem = {
      nome: formulario.nome.value,
      email: formulario.email.value,
      mensagem: formulario.mensagem.value,
      data: new Date().toLocaleString("pt-BR"),
    };

    const mensagensSalvas = JSON.parse(
      localStorage.getItem("mensagensCodex") || "[]"
    );

    mensagensSalvas.push(novaMensagem);
    localStorage.setItem("mensagensCodex", JSON.stringify(mensagensSalvas));

    const statusFormulario = document.querySelector("#status-formulario");
    statusFormulario.textContent = "Mensagem salva neste navegador. Obrigado pelo contato!";
    formulario.reset();
  }

  return (
    <>
      <Header />
      <main id="topo">
        <Hero />
        <Solucao gerarExercicio={gerarExercicio} />
        <PublicoAlvo />
        <Galeria />
        <Equipe />
        <Contato salvarContato={salvarContato} />
      </main>
      <Footer />
    </>
  );
}

export default App;