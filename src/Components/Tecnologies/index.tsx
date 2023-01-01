import { useState } from "react";
import { BackEnd } from "./Components/BackEnd";
import { FrontEnd } from "./Components/FrontEnd";
import { Mobile } from "./Components/Mobile";
import { PossibilitesSection, TecnologiesComponent } from "./styles";

export function Tecnologies() {

  const [btnSelected, setBtnSelected] = useState('front')

  function handleClick(event: any) {
    setBtnSelected(event.target.value)
  }

  return (
    <PossibilitesSection id="Tecnologies">
      <h4>Tecnologias</h4>

      <TecnologiesComponent>
        <button 
          onClick={handleClick} 
          type="button" 
          title="Desenvolvimento Front-end" 
          value="front"
        >
          Desenvolvimento Front-End
        </button>

        <button 
          onClick={handleClick} 
          type="button" 
          title="Desenvolvimento Back-end" 
          value="back"
        >
          Desenvolvimento Back-End
        </button>

        <button 
          onClick={handleClick}
          type="button" 
          title="Desenvolvimento mobile" 
          value="mobile"
        >
          Desenvolvimento Mobile
        </button>
      </TecnologiesComponent>

      <div className="line"></div>
      
      {btnSelected == 'front' && (<FrontEnd />)}
      {btnSelected == 'back' && (<BackEnd />)}
      {btnSelected == 'mobile' && (<Mobile />)}

    </PossibilitesSection>
  )
}