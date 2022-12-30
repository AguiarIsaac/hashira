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
            De origem Japonesa, Hashira pilar, 
            que por sua vez é base para qualquer "construção" oferecendo 
            estabilidade e resistência.
          </p>
        </div>

        <SocialMidias />
      </div>
    </FooterElement>
  )
}