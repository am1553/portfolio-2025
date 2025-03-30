import React, { useEffect } from "react";
import BackgroundLines from "./components/BackgroundLines";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { createPortal } from "react-dom";
import Home from "./sections/home/Home";
import About from "./sections/about/About";
import Projects from "./sections/projects/Projects";
import Footer from "./components/Footer";

const portal = document.getElementById("portal");

function App() {
  const [menuActive] = React.useState(false);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    if (menuActive) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }, [menuActive]);
  return (
    <div className="min-h-screen w-full font-roboto relative text-on-background">
      <Header>
        {/* <Buttons.MenuBtn menuState={{ menuActive, setMenuActive }} /> */}
        <span></span>
      </Header>
      <BackgroundLines />
      {portal && menuActive && createPortal(<NavBar />, portal, "menu")}

      <div className="flex flex-col gap-40">
        <Home />
        <About />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
