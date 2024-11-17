import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// importando componentes
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Section from "./components/section/Section";
import Section01 from "./components/section/Section01";
import Section02 from "./components/section/Section02";
import SectionMenu from "./components/section/SectionMenu";
import Section03 from "./components/section/Section03";
import Section04 from "./components/section/Section04";
import Footer from "./components/footer/Footer";
import LandingHeader from "./components/pages/landing/LandingHeader";
import LandingSection01 from "./components/pages/landing/LandingSection01";
import LandingSection02 from "./components/pages/landing/LandingSection02";
import LandingSection03 from "./components/pages/landing/LandingSection03";
import LandingSection04 from "./components/pages/landing/LandingSection04";
import LandingSection05 from "./components/pages/landing/LandingSection05";
import LandingSection06 from "./components/pages/landing/LandingSection06";
import AboutHeader from "./components/pages/about/AboutHeader";
import AboutSection01 from "./components/pages/about/AboutSection01";
import AboutSection02 from "./components/pages/about/AboutSection02";
import AboutSection03 from "./components/pages/about/AboutSection03";
import AboutSection04 from "./components/pages/about/AboutSection04";
import AboutSection05 from "./components/pages/about/AboutSection05";
import TeamMain from "./components/pages/team/TeamMain";
import TeamSection01 from "./components/pages/team/TeamSection01";
import MenuMain from "./components/pages/menu/MenuMain";
import MenuSection01 from "./components/pages/menu/MenuSection01";
import MenuSection02 from "./components/pages/menu/MenuSection02";
import MenuSection03 from "./components/pages/menu/MenuSection03";
import MenuSection04 from "./components/pages/menu/MenuSection04";
import MenuSection05 from "./components/pages/menu/MenuSection05";
import ContactMain from "./components/pages/contact/ContactMain";
import ContactSection01 from "./components/pages/contact/ContactSection01";

// react router
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.scss/nabar.scss";

function App() {
  // Iniciando o AOS
  useEffect(() => {
    AOS.init({
      duration: 2000, //Duração das animações
      easing: "ease-in-out", // Tipo de animação
      once: false, //Execute apensa uma vez ao rolar
      mirror: true, //Permite que a animação se repita ao rolar pra cima
    });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* router */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Section />
                <Section01 />
                <Section02 />
                <SectionMenu />
                <Section03 />
                <Section04 />
                <Footer />
              </>
            }
          />
          {/* <Route path="/" /> */}
          <Route
            path="/landing-header"
            element={
              <>
                <LandingHeader />
                <LandingSection01 />
                <LandingSection02 />
                <LandingSection03 />
                <LandingSection04 />
                <LandingSection05 />
                <LandingSection06 />
              </>
            }
          />
          <Route
            path="/about-header"
            element={
              <>
                <AboutHeader />
                <AboutSection01 />
                <AboutSection02 />
                <AboutSection03 />
                <AboutSection04 />
                <AboutSection05 />
              </>
            }
          />

          <Route
            path="/team-main"
            element={
              <>
                <TeamMain />
                <TeamSection01 />
                <AboutSection04 />
                <AboutSection05 />
              </>
            }
          />

          <Route
            path="/menu-main"
            element={
              <>
                <MenuMain />
                <MenuSection01 />
                <MenuSection02 />
                <MenuSection03 />
                <MenuSection04 />
                <MenuSection05 />
                <AboutSection05 />
              </>
            }
          />

          <Route
            path="/contact-main"
            element={
              <>
                <ContactMain />
                <ContactSection01 />
                <AboutSection05 />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
