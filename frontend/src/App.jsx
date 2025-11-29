import './App.css'
import { useEffect } from 'react';
import Navbarclinique from "./composants/accueil/menu";
import Page1 from "./composants/accueil/page1";
import Page2 from './composants/accueil/page2';
import Page3 from './composants/accueil/page3';
import Page4 from './composants/accueil/page4';
import Page5 from './composants/accueil/page5';
import Page6 from './composants/accueil/page6';
import MiniExamen from './composants/accueil/miniExamen';

// import Carouselclinique from "./composants/accueil/carousel";
// import Miniapropos from "./composants/accueil/miniApropos";
// import Page3 from "./composants/accueil/page3";
// import MiniExamen from "./composants/accueil/miniExamen";
// import Footer from "./composants/accueil/footer";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.animate([
            { transform: "translateX(-10px)", opacity: 0 },
            { transform: "translateX(0px)", opacity: 1 },
          ], {
            duration: 1500
          });
        }
      }
    });

    const targets = [
      document.querySelector(".page1"),
      document.querySelector(".page2"),
      document.querySelector(".page3"),
      document.querySelector(".service1")
    ];

    targets.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect(); // Nettoyage
  }, []);

  return (
    <div className='pp'>

      <Page1 >101 Avenue Katt Matou centre ville pointe noire republique du congo, Contact: 06 635 22 06, cliniqueleseaux@gmail.com</Page1 >
      <Navbarclinique />
      <Page2 />
      <Page3 />
      <Page4 >Clinique Médicale les "LES EAUX"</Page4 >
      <Page5 />
      <Page6 >reserver un rendez-vous</Page6 >
      <MiniExamen />
    </div>
  );
}

export default App;
