import { FooterElement } from "./styles";
import logo from "../../assets/images/hashira-ligth.png"
import { SocialMidias } from "../SocialMidias";


export function Footer() {
  return (
    <FooterElement>
      <div className="content">
        <div className="logoContent">
          <div>
            <img src={logo} alt="Hashira" />
            <h5>Hashira</h5>
          </div>
          <p>
            Hashira em tradução livre do Japonês significa pilar, 
            ou seja, representa base sólida, estabilidade e resistência 
            para qualquer "construção".
          </p>
        </div>

        <SocialMidias />
      </div>
    </FooterElement>
  )
}