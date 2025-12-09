import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/Land_cruiser_ambulance_2.png";

function Page4({ lien, lien2, children, surgence }) {
    const classn = `text-decoration-none justify-content-center d-flex bg-danger p-2 rounded-3 ${surgence ? 'surgence' : 'text-white'}`
    return (

        <div className="page4 text-white d-flex justify-content-center">
            <button rel="stylesheet" data-bs-toggle="modal" data-bs-target={`#infoModal-urgence`} href={lien2} to={lien} className={classn}>
                {children}
            </button>
            <div className="modal fade" id={`infoModal-urgence`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header bg-danger text-white">
                            <h5 className="modal-title">Service d'urgence</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <div className="d-flex justify-content-center align-items-center flex-wrap">
                                <a href={image1} className="imgurgence"><img src={image1} alt="" /></a>
                                {/* <img src={image2} className="imgurgence" alt="" /> */}
                            </div>
                            <p className="px-2 py-5 d-flex justify-content-center align-items-center flex-wrap text-dark urgence-para">
                                Intervention en cas d'urgence, nous disposons de deux ambulances médicalisées et couplées d'un aéronef d'urgence, d'une infirmier et médécin pour des soins médicalisés. <br />
                                nous somme disponible 24/24h et 7j/7 quelque soit le lieu de l'intervention (maison,travail,...). <br />
                                Nous prennons en charge dans l'ambulance jusqu'a la clinique de tout les cas exemple: les victime d'accidents, en etat de malaise, femme enceinte, etc...
                            </p>

                        </div>
                        <div className="modal-footer bg-primary-subtle">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                Fermer
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page4