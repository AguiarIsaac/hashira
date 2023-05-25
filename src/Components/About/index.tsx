import { AboutElement, AboutSection, GaleryElement, Services } from "./styles";
import todo from "../../assets/images/Todo.webp";
import blog from "../../assets/images/blog.webp";
import finan from "../../assets/images/gerenciador.webp";
import social from "../../assets/images/links.webp";
import windowicon from "../../assets/svg/window-white.svg"
import phone from "../../assets/svg/phone-white.svg"
import globo from "../../assets/svg/globo-white.svg";
import where from "../../assets/images/wherewatch.webp";

export function About() {
  return (
    <AboutSection id="About">
      <AboutElement>
        <h2>Um pouco sobre minha carreira...</h2>
        <div className="line"></div>
        <p>
          Trabalhando com infraestrutura de redes
          e manutenção de hardware desde 2013, formado 
          em análise e desenvolvimento de sistemas em 2019. 
          Agora atuando no mercado como Freelancer, oferecendo 
          soluções completas para sistemas Web.
        </p>

      </AboutElement>

      <GaleryElement>
        <a href="https://social-links-five.vercel.app/" title="Social tree" target="_blank"><img src={social} alt="social tree" /></a>
        <a href="https://gitblog-ochre.vercel.app/" title="Github blog" target="_blank"><img src={blog} alt="Blog" /></a>
        <a href="https://todo-list-react-js-delta.vercel.app/" title="Todo list" target="_blank"><img src={todo} alt="Projeto TODO list" /></a>
        <a href="https://dailyfinancial.vercel.app/" title="gerenciador financeiro" target="_blank"><img src={finan} alt="gerenciador financeiro" /></a>
        <a href="https://wherewatch.vercel.app/" target="_blank" title="Onde Assistir"><img src={where} alt="Onde Assistir" />
        </a>
      </GaleryElement>

      <Services id="Services">
        <h3>Soluções</h3>

        <div className="groupservices">
          <div className="service">
            <img src={windowicon} alt="aplicação Web"/>
            <h5>Aplicações Web</h5>
            <p>De páginas simples e landpages a aplicações Web complexas para uso pessoal ou comercial</p>
            <div className="line"></div>
          </div>

          <div className="service">
            <img src={globo} alt="Sistema Integrado" />
            <h5>Sistema Integrado</h5>
            <p>Desenvolvimento de multiplataformas, conectando via Api vários serviços destintos em uma só aplicação</p>
            <div className="line"></div>
          </div>

          <div className="service">
            <img src={phone} alt="Desenvolvimento mobile" />
            <h5>Aplicações Mobile</h5>
            <p>Aplicações híbridas multiplataformas para dispositivos Android ou iOS, disponibilizados em suas respectivas lojas.</p>
            <div className="line"></div>
          </div>
        </div>
      </Services>
    </AboutSection>
  )
}