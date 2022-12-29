import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Possibilites } from "./Components/Possibilites";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <Header />
      <About />
      <Possibilites />
      <GlobalStyles />
    </>
  )
}
