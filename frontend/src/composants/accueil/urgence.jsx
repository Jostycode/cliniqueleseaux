import image1 from "../../assets/Land_cruiser_ambulance_2.png";
import image2 from "../../assets/ambulance3.png";

import Navbarclinique from "../accueil/menu";
import Footer from "../accueil/footer";
import "bootstrap/dist/css/bootstrap.min.css";


function Urgence() {
    return (
        <>
            <Navbarclinique color1="primary-subtle" />
            <div className="">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    <img src={image1} className="imgurgence" alt="" />
                    {/* <img src={image2} className="imgurgence" alt="" /> */}
                </div>
                <p className="p-5 d-flex justify-content-center align-items-center flex-wrap bg-danger text-white">
                    Intervention en cas d'urgence, nous disposons de deux ambulances médicalisées et couplées d'un aéronef d'urgence, d'une infirmier et médécin pour des soins médicalisés. <br />
                    nous somme disponible 24/24h et 7j/7 quelque soit le lieu de l'intervention (maison,travail,...). <br />
                    Nous prennons en charge dans l'ambulance jusqu'a la clinique de tout les cas exemple: les victime d'accidents, en etat de malaise, femme enceinte, etc...
                </p>
            </div>
        </>
    );
}
export default Urgence;