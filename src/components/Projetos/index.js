import "./projetos.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Projetos() {
  Aos.init();
  return (
    <section id="Projetos">
      <h2 data-aos="fade-right">{'_className="Projetos"'}</h2>

      <div className="projetos-container-cards">
        <div data-aos="fade-right" className="projetos-card">
          <img src={require("../../assets/imgs/mobile.png")} />
          <div>
            <div className="buttons">
              <a target="blank" href="https://gabmeula-filmaria.netlify.app/">
                Site
              </a>
              <a target="blank" href="https://github.com/GabMeula07/FilmesList">
                Source Code
              </a>
            </div>
            <p>
              Esse projeto foi feito para treino de React js, nele utilizamos é
              possível ver a sipose, nota e o trailer dos filmes em cartaz no
              momento. Nele, foi usada uma api do tmdb onde é fornecido os dados
              do filmes e também é utilizado outras blibliotecas.
            </p>
          </div>
        </div>

        <div data-aos="fade-right" className="projetos-card">
          <img src={require("../../assets/imgs/mobilet.png")} />
          <div>
            <div className="buttons">
              <a target="blank" href="http://turminhadobras.com.br">
                Site
              </a>
              <a
                target="blank"
                href="https://github.com/GabMeula07/Turminha-Awards"
              >
                Source Code
              </a>
            </div>
            <p>
              O Turminha Awards é um site de votação em desenvolvimento, nele
              mais de 10 amigos irão disputar troféis em categorias estranhas. O
              projeto está em alternamento de html, css e js para React Js e
              firebase. Mas o site está no ar e pode ser visitado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Projetos;
