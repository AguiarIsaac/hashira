import { PossibilitesSection, Tecnologies } from "./styles";

export function Possibilites() {
  return (
    <PossibilitesSection>
      <h4>Possibilidades</h4>

      <Tecnologies className="tecnologies">
        <button type="button" title="Desenvolvimento Front-end">Desenvolvimento Front-End</button>
        <button type="button" title="Desenvolvimento Back-end">Desenvolvimento Back-End</button>
        <button type="button" title="Desenvolvimento mobile">Desenvolvimento Mobile</button>
      </Tecnologies>
    </PossibilitesSection>
  )
}