import { FooterElement } from "./styles";
import logo from "../../assets/images/hashira-ligth.webp"
import { SocialMidias } from "../SocialMidias";


export function Footer() {
  return (
    <FooterElement>
      <div className="content">
        <SocialMidias />
        <small>® Criado por <a href="https://www.linkedin.com/in/isaac-aguiar-2b9039121/" target="_blank" title="Perfil no Linkedin">Isaac Aguiar | Full-Stack Developer |</a></small>
      </div>
    </FooterElement>
  )
}