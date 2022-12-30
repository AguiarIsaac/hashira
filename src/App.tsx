import { About } from "./Components/About";
import { Header } from "./Components/Header";
import { Tecnologies } from "./Components/Tecnologies";
import { Footer } from "./Components/Footer";
import { GlobalStyles } from "./styles/GlobalStyles";
import { BackToTop } from "./Components/BackToTop";

export function App() {
  return (
    <>
      <Header />
      <About />
      <Tecnologies />
      <Footer />
      <BackToTop />
      <GlobalStyles />
    </>
  )
}
