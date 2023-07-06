import Header from "./components/Header";
import Home from "./components/Home";
import Projetos from "./components/Projetos";
import Sobre from "./components/Sobre";
import Contato from "./components/Contato";
import "./index.css";
function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
