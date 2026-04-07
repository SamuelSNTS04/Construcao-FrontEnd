import "./App.css";

const Dashboard = () => {
  return (
    <main>
      <h2>Bem-vindo ao portal do aluno</h2>
      <section>
        
        <article>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li>23/02 - Início do período letivo 2026-1</li>
            <li>25/04 - Prazo final para aplicação da P1</li>
            <li>23/06 - Prazo final para aplicação da P2</li>
            <li>04/07 - Fim do período letivo 2026-1</li>
          </ul>
        </article>
        <article>
          <h3>Minhas disciplinas</h3>
          <ul>
            <li>Front-End</li>
            <li>Back-End</li>
            <li>Banco de Dados</li>
          </ul>
        </article>
      </section>
    </main>
  );
};

const App = () => {
  return (
    <Dashboard />
  );
}

export default App;
