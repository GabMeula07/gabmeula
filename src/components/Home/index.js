import "./home.css";
import "./responsive-home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "../../assets/imgs/minha_imagem_upscaled.png";
import { LiaLinkedin, LiaGithub, LiaInstagram } from "react-icons/lia";
function Home() {
  Aos.init();
  return (
    <div className="container">
      <div className="apresentacao">
        <div className="textos">
          <h2>Olá,</h2>
          <h2>
            Eu sou o <span>{"<Gabriel Meula/>"}</span>,
          </h2>
          <h2>Desenvolvedor Front-End</h2>
        </div>
        <div className="container-social">
          <a href="https://www.linkedin.com/in/gabriel-meula-b1456b261/">
            <LiaLinkedin />
          </a>
          <a href="https://github.com/GabMeula07">
            <LiaGithub alt="github" />
          </a>
          <a href="https://www.instagram.com/gab_meula/">
            <LiaInstagram />
          </a>
        </div>
      </div>
      <img src={require("../../assets/imgs/minha_imagem_upscaled.png")} />
    </div>
  );
}

export default Home;
