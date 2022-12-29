import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Tecnologies } from "./Components/Tecnologies";
import { Footer } from "./Components/Tecnologies/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";

export function App() {
  return (
    <>
      <Header />
      <About />
      <Tecnologies />
      <Footer />
      <GlobalStyles />
    </>
  )
}
