import outlook from "../../assets/svg/outlook-white.svg";
import git from "../../assets/svg/github-white.svg";
import linkedin from "../../assets/svg/linkedin-white.svg"
import { SocialMidiasElement } from "./styles";

export function SocialMidias() {
  return (
    <SocialMidiasElement>
      <a href="mailto:isaacaguiar_@hotmail.com" target="_blank"><img src={outlook} alt="Email" /></a>
      <a href="https://github.com/AguiarIsaac" target="_blank"><img src={git} alt="github" style={{width: '1.1rem'}}/></a>
      <a href="https://www.linkedin.com/in/isaac-aguiar-2b9039121/" target="_blank"><img src={linkedin} alt="Linkedin" style={{width: '1.1rem'}}/></a>
    </SocialMidiasElement>
  )
}