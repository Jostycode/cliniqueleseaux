import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import Navbarclinique from "../accueil/menu";
import Footer from "../accueil/footer";
import Page6 from "../accueil/page6";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Service() {
    const services = [
        { id: 1, title: "SERVICE IMAGERIE: RADIOLOGIE", image: img22, examen: [{ id: 1, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 2, name: "A.S.P" }, { id: 3, name: "Thorax osseux" }, { id: 4, name: "Crane (face + profil)" }, { id: 5, name: "Face haute" }, { id: 6, name: "Face basse" }, { id: 7, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 8, name: "A.S.P" }, { id: 9, name: "Thorax osseux " }, { id: 10, name: "Crane (face + profil)" }, { id: 11, name: "Face haute " }, { id: 12, name: "Face basse " }, { id: 13, name: "Blondeau " }, { id: 14, name: "Schuller " }, { id: 15, name: "Trou optique " }, { id: 16, name: "Os propre du nez " }, { id: 17, name: "Rachis cervical (face + profil)" }, { id: 18, name: "Rachis ¾ droit (face + profil)" }, { id: 19, name: "Rachis ¾ gauche (face + profil)" }, { id: 20, name: "Rachis lombaire (face + profil)" }, { id: 21, name: "Rachis lombaire-sacré  (face + profil)" }, { id: 22, name: "Rachis dorsal (face + profil)" }, { id: 23, name: "Cavum " }, { id: 24, name: "HIRZ" }, { id: 25, name: "H.S.G" }, { id: 26, name: "U.I.V" }, { id: 27, name: "Uretro cystographie rétrograde " }, { id: 28, name: "Lavement baryté " }, { id: 28, name: "Contenu utérin" }, { id: 30, name: "TOGD" }, { id: 1, name: "Mammographie " }, { id: 31, name: "pulmonaire" }, { id: 32, name: "Main (face + profil)" }, { id: 33, name: "Poignet (face + profil)" }, { id: 34, name: "Avant-bras (face + profil)" }, { id: 35, name: "Radio UIV" }, { id: 36, name: "Coude (face + profil)" }, { id: 37, name: "Humérus (face + profil)" }, { id: 38, name: "Pied (face + profil)" }, { id: 39, name: "Cheville (face + profil)" }, { id: 40, name: "" }, { id: 41, name: "Jambe (face + profil)" }, { id: 42, name: "Genou (face + profil)" }, { id: 43, name: "Fémur (face + profil)" }, { id: 44, name: "Epaule (face + profil)" }, { id: 45, name: "Clavicule (face + profil)" }, { id: 46, name: "Maxillaire défilé (face + profil)" }, { id: 47, name: "Bassin [hanche] (face + profil)" },] },

        { id: 2, title: "SERVICE IMAGERIE: SCANNER", image: img33, examen: [{ id: 1, name: "Scanner sans injection" }, { id: 2, name: "Scanner avec injection" }] },

        { id: 3, title: "SERVICE IMAGERIE: IRM", image: img33, examen: [{ id: 1, name: "Scanner sans injection" }, { id: 2, name: "Scanner avec injection" }] },

        { id: 4, title: "SALLES D’HOSPITALISATION", image: img33, examen: [{ id: 1, name: "1er catégorie " }, { id: 2, name: "2e catégorie" }, { id: 1, name: "3e catégorie" }, { id: 2, name: "4e catégorie" }, { id: 1, name: "5e catégorie" }] },

        { id: 5, title: "LOCATION AMBULANCE ", image: img33, examen: [{ id: 1, name: "Dans la ville de Pointe-Noire" }, { id: 2, name: "Hors de la ville de Pointe-Noire" }] },

        { id: 6, title: "OPHTALMOLOGIE ", image: img33, examen: [{ id: 1, name: "Consultation " }, { id: 2, name: "Champ visuel " }, { id: 3, name: "OCT ( Optical Cohérence Tomographie )" }, { id: 4, name: "Fond d’œil (F.0) " }, { id: 5, name: "Chalazion " }, { id: 6, name: "Ptérygion " }, { id: 7, name: "Corps étranger   " }, { id: 8, name: "Réfractométrie automatique  " }, { id: 9, name: "tonométrie" }, { id: 10, name: "Tachymétrie " }, { id: 11, name: "Skiascopie " }, { id: 12, name: "Kyste de l’œil " }] },

        { id: 7, title: "ACTES MEDICAUX ", image: img33, examen: [{ id: 1, name: "consultation" }, { id: 2, name: "Actes de kinésithérapie" }, { id: 3, name: "Kinési-respiratoire" }, { id: 4, name: "Pansement avec produit" }, { id: 5, name: "Injection" }, { id: 6, name: "Prise de tension artérielle" }, { id: 7, name: "Lavement d’oreille" }, { id: 8, name: "Infiltration" }, { id: 9, name: "Ponction du genou" }, { id: 10, name: "Pesée de bébé" }, { id: 11, name: "Pesée avec visite de routine" }, { id: 12, name: "Suture sous anesthésie " }, { id: 13, name: "Circoncision " }, { id: 14, name: "Ablation des fils" }, { id: 15, name: "Pose de plâtre" }, { id: 16, name: "Ablation de plâtre" }, { id: 17, name: "Pose sonde (prostate)" }, { id: 18, name: "Ablation sonde" }] },

        { id: 8, title: "SERVICE ORL", image: img33, examen: [{ id: 1, name: "Consultation" }, { id: 2, name: "Lavage d’oreill" }, { id: 3, name: "Corps étranger" }, { id: 4, name: "Audiométrie" },] },

        { id: 9, title: "SERVICE PEDIATRIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 10, title: "SERVICE NEUROLOGIE", image: img33, examen: [{ id: 1, name: "1	Consultation" }, { id: 2, name: "2	ENMG" }, { id: 3, name: "3	EEG" }] },

        { id: 11, title: "SERVICE NEURO-PEDIATRIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 12, title: "SERVICE GYNECOLOGIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 13, title: "SERVICE CANCEROLOGIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 14, title: "SERVICE URO-CHIRURGIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 15, title: "SERVICE NEURO-CHIRURGIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 16, title: "CHIRURGIE GENERALE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 17, title: "SERVICE CARDIOLOGIE", image: img33, examen: [{ id: 1, name: "Consultation " }, { id: 2, name: "ECG" }, { id: 3, name: "Echo-cardiaque" }, { id: 4, name: "Holter ECG" }, { id: 5, name: "Echographie" }, { id: 6, name: "MAPA" },] },

        { id: 18, title: "SERVICE RHUMATOLOGIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 19, title: "SERVICE PNEUMOLOGIE ", image: img33, examen: [{ id: 1, name: "Consultation " }, { id: 2, name: "Spirométrie " }] },

        { id: 20, title: "SERVICE DERMATOLOGIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

        { id: 21, title: "SERVICE HEMATOLOGIE", image: img33, examen: [{ id: 1, name: "Consultation " }] },

    ];

    return (
        <>
            <Navbarclinique />

            <div className="servicep ">
                <h2 className="service-title stext pb-5">🥼 Nos services</h2>
                <Page6 lien="/urgence" surgence={"surgence"}>cliquez ici pour voir <br /> service d'urgence</Page6 >
                <div className="row row-cols-1 row-cols-md-3 gx-4 gy-5 pt-5 w-100 service-container">
                    {services.map((service) => (
                        <div key={service.id} className="col px-3">
                            <div className="card h-100">
                                <img src={service.image} className="card-img-top " alt={service.title} />
                                <div className="card-body service-p d-flex justify-content-between align-items-center">
                                    <h5 className="card-title bg-white text-dark">{service.title}</h5>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#examensModal-${service.id}`}
                                    >
                                        En Savoir plus...
                                    </button>

                                    {/* <div className="d-flex justify-content-between mt-3">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target={`#examensModal-${service.id}`}
                                            >
                                                Examens
                                            </button>
                                            <button
                                        type="button"
                                        className="btn btn-danger ms-3"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#infoModal-${service.id}`}
                                    >
                                        En savoir plus...
                                    </button>

                                        </div> */}
                                </div>
                            </div>

                            {/* Modal Examens */}
                            <div className="modal fade" id={`examensModal-${service.id}`} tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">Examens pour {service.title}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <ul className="list-group">
                                                {service.examen.map((examen) => (
                                                    <li key={examen.id} className="list-group-item">
                                                        {examen.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                Fermer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Modal Info */}
                            <div className="modal fade" id={`infoModal-${service.id}`} tabIndex="-1" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-scrollable">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title">À propos de {service.title}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <p>
                                                { }
                                            </p>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                                Fermer
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Service;
