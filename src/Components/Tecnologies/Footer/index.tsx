import { FooterElement } from "./styles";
import logo from "../.././../assets/images/hashira-ligth.png"

export function Footer() {
  return (
    <FooterElement>
      <div className="content">
        <h5>Hashira</h5>
        <img src={logo} alt="Hashira" />
      </div>
    </FooterElement>
  )
}