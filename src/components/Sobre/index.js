import "./sobre.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaSquareJs,
  FaCss3Alt,
  FaHtml5,
  FaDatabase,
  FaGitAlt,
  FaPython,
  FaNpm,
} from "react-icons/fa6";
function Sobre() {
  Aos.init();
  return (
    <section
      data-aos="fade-right"
      data-aos-anchor-placement="top-bottom"
      id="Sobre"
    >
      <article>
        <h2>{"<Sobre>"}</h2>
        <p>
          Nascido em São Paulo, Gabriel sempre se interessou em programação.
          Começou dando uma olhada em Java, mas logo seu destino foi jogado para
          Python3. Em 2023 começou a mergulhar no mundo Front-end e já fez
          projetos como freelancer, porém busca sua primeira experiência
          profissional.
        </p>
      </article>
      <article>
        <h3>{"_.GET('skills');"}</h3>

        <div className="cards">
          <div className="card">
            <FaReact />
            <p>React Js</p>
          </div>
          <div className="card">
            <FaHtml5 />
            <p>Html5</p>
          </div>
          <div className="card">
            <FaCss3Alt />
            <p>Css3</p>
          </div>
          <div className="card">
            <FaSquareJs />
            <p>Javascript</p>
          </div>
          <div className="card">
            <FaNpm />
            <p>node packange manager</p>
          </div>
          <div className="card">
            <FaGitAlt />
            <p>Git e github</p>
          </div>
          <div className="card">
            <FaPython />
            <p>Python3</p>
          </div>
          <div className="card">
            <FaDatabase />
            <p>Database</p>
          </div>
        </div>
      </article>
    </section>
  );
}
export default Sobre;
