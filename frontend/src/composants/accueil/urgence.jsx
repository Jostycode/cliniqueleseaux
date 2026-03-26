import image1 from "../../assets/ambulance2.png";


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
                    Dans les situations d'urgence, nous disposons des ambulances médicalisées, accompagné d'une equipe qualifiée, <br />
                    nous somme disponible 24/24h et 7j/7.
                </p>
            </div>
        </>
    );
}
export default Urgence;