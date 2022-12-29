import { BackEndElement } from "./styles";
import node from "../../../../assets/svg/node-js.svg"
import typescript from "../../../../assets/svg/typescript.svg"
import mysql from "../../../../assets/svg/mysql.svg"
import mongo from "../../../../assets/svg/mongodb.svg"

export function BackEnd() {
  return (
    <BackEndElement>
      <h4>Desenvolvimento Back-end</h4>

      <div className="content">
        <div className="NodeJs">
          <img src={node} alt="nodeJs" />
          <h5>NodeJs</h5>
          <p>
            Ambiente de execução Javascript server-side assíncrono,
            possibilitando a criação de aplicações escalaveis e flexíveis.
            Empresas como Netflix, Uber e LinkedIn usam NodeJs por baixo dos panos.
          </p>
        </div>

        <div className="TypeScript">
          <img src={typescript} alt="TypeScript" />
          <h5>TypeScript</h5>
          <p>
            TypeScript é uma linguagem de programação fortemente tipada 
            que se baseia em JavaScript, oferecendo melhores ferramentas 
            em qualquer escala.
          </p>
        </div>

        <div className="MySql">
          <img src={mysql} alt="MySql" />
          <h5>MySql</h5>
          <p>
            MySQL é um Banco de Dados relacional 
            (RDBMS – Relational Database Management Systems) 
            com um modelo de cliente-servidor. 
          </p>
        </div>

        <div className="MongoDb">
          <img src={mongo} alt="MongoDb" />
          <h5>MongoDb</h5>
          <p>
            MongoDB é um banco de dados de documentos 
            com escalabilidade e flexibilidade. Armazena 
            dados em documentos do tipo JSON, ou seja, é 
            um bano NoSql.
          </p>
        </div>
      </div>
    </BackEndElement>
  )
}