import { BackEnd } from "./Components/BackEnd";
import { FrontEnd } from "./Components/FrontEnd";
import { Mobile } from "./Components/Mobile";
import { PossibilitesSection, TecnologiesComponent } from "./styles";

export function Tecnologies() {
  return (
    <PossibilitesSection id="Tecnologies">
      <h4>Tecnologias</h4>

      <TecnologiesComponent>
        <button type="button" title="Desenvolvimento Front-end">Desenvolvimento Front-End</button>
        <button type="button" title="Desenvolvimento Back-end">Desenvolvimento Back-End</button>
        <button type="button" title="Desenvolvimento mobile">Desenvolvimento Mobile</button>
      </TecnologiesComponent>

      <div className="line"></div>

      {/* <FrontEnd />
      <BackEnd /> */}
      <Mobile />
    </PossibilitesSection>
  )
}