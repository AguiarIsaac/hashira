import html from "../../../../assets/svg/html-5.svg"
import css from "../../../../assets/svg/css3.svg"
import js from "../../../../assets/svg/javascript.svg"
import react from "../../../../assets/svg/react.svg"
import { FrontEndElement } from "./styles";

export function FrontEnd() {
  return (
    <FrontEndElement>
      <h4>Desenvolvimento Front-end</h4>

      <div className="content">
        <div className="html">
          <img src={html} alt="HTML5" />
          <h5>HTML5</h5>
          <p>
            HTML (Linguagem de Marcação de HiperTexto) 
            é o bloco de construção mais básico da web. 
            Define o significado e a estrutura do conteúdo 
            da web.
          </p>
        </div>

        <div className="css">
          <img src={css} alt="CSS3" />
          <h5>CSS3</h5>
          <p>
            CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata)
            é uma linguagem de estilo (en-US) usada para descrever a 
            apresentação de um documento escrito em HTML ou em XML.
          </p>
        </div>

        <div className="js">
          <img src={js} alt="Javascript" />
          <h5>JavaScript</h5>
          <p>
            interpretada e baseada em objetos 
            com funções de primeira classe, mais 
            conhecida como a linguagem de script 
            para páginas Web.
          </p>
        </div>

        <div className="react">
          <img src={react} alt="React" />
          <h5>ReactJs</h5>
          <p>
            biblioteca front-end JavaScript 
            de código aberto com foco em criar 
            interfaces de usuário em páginas web.
          </p>
        </div>
      </div>
    </FrontEndElement>
  )
}