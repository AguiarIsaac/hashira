import { AboutElement, AboutSection, GaleryElement, Services } from "./styles";
import todo from "../../assets/images/Todo.webp";
import blog from "../../assets/images/blog.webp";
import cofee from "../../assets/images/coffee.webp";
import social from "../../assets/images/social.webp";
import windowicon from "../../assets/svg/window-white.svg"
import phone from "../../assets/svg/phone-white.svg"
import globo from "../../assets/svg/globo-white.svg";

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
        <a href="https://coffee-delivery-ten-pi.vercel.app/" title="Coffee delivery" target="_blank"><img src={cofee} alt="Projeto Coffee Delivery" /></a>
        <a href="https://gitblog-ochre.vercel.app/" title="Github blog" target="_blank"><img src={blog} alt="Projeto BLog" /></a>
        <a href="https://social-tree-one.vercel.app/" title="Social tree" target="_blank"><img src={social} alt="Projeto feed" /></a>
        <a href="https://todo-list-react-js-delta.vercel.app/" title="Todo list" target="_blank"><img src={todo} alt="Projeto TODO list" /></a>
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