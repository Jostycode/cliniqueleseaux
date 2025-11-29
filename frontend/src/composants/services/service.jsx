import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import Navbarclinique from "../accueil/menu";
import Footer from "../accueil/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Service() {
    const services = [
        { id: 1, title: "LES ACTES MEDICAUX", image: img11, examen: [{ id: 1, name: "Consultation" }, { id: 2, name: "Echographie pelvienne" }, { id: 3, name: "Echographie abdominale" }, { id: 4, name: "Echographie Testiculaire" }, { id: 5, name: "Echographie des parties molles" }, { id: 6, name: "Echographie prostatique" }, { id: 7, name: "Echographie des seins" }, { id: 8, name: "Echographie fontanelle" }, { id: 9, name: "Echographie cervicale" }, { id: 10, name: "Surveillance de la grossesse (CPN" }, { id: 11, name: "Accouchement" }, { id: 12, name: "Chlamydiae" }, { id: 13, name: "Hydrotubatio" }, { id: 14, name: "GERF" }, { id: 15, name: "Selles" }, { id: 16, name: "Frottis sanguin" }, { id: 17, name: "GERF" }, { id: 18, name: "NFS" }, { id: 19, name: "VS" }, { id: 20, name: "T.E" }, { id: 21, name: "ECBU" }, { id: 22, name: "PV" }, { id: 23, name: "BW" }, { id: 24, name: "Hémogramme" }, { id: 25, name: "Cytogramme culture" }, { id: 26, name: "Spermogramme culture" }, { id: 27, name: "Hemoculture" }, { id: 28, name: "Microalbuminurie" }, { id: 29, name: "Prolactinimie" }, { id: 30, name: "VDRL" }, { id: 31, name: "Dosage prolactine" }, { id: 32, name: "Testostérone" }, { id: 33, name: "spermoculture" }, { id: 34, name: "PV+ Mycoplasme" }, { id: 35, name: "TP/INR" }, { id: 36, name: "SDWF" }, { id: 37, name: "Glycémie" }, { id: 38, name: "magnésemie" }, { id: 40, name: "albuminerie" }, { id: 41, name: "glucosurie" }, { id: 42, name: "Glaire cervicale " }, { id: 43, name: "TPC" }, { id: 44, name: "Spermogramme " }, { id: 45, name: "spermocytogramme" }, { id: 46, name: "Hospitalisation/jour" }, { id: 47, name: "aslo" }, { id: 48, name: "Taux reticulocyte" }, { id: 49, name: "Charge virale " }, { id: 50, name: "Taux de CD4 " }, { id: 51, name: "Hormones Thyroidiens T3" }, { id: 52, name: "Hormones Thyroidiens T4" }, { id: 53, name: "Hormones Thyroidiens TSH" }, { id: 54, name: "Kaliemie" }, { id: 55, name: "fistulographie" }, { id: 56, name: "Serologie toxo" }, { id: 57, name: "Serologie rubeole" }, { id: 58, name: "Serologie sphylitique" }, { id: 59, name: "GERH+Frottis" }, { id: 60, name: "Urotro- cystoscopie" }, { id: 61, name: "galactographie" }, { id: 62, name: "pyoculture" }, { id: 63, name: "ETF" }, { id: 64, name: "AC-anti-AVC" }, { id: 65, name: "Dosage d’oestradial" }, { id: 66, name: "AMH" }, { id: 67, name: "Serologie siphilis" }, { id: 68, name: "NFS + réticulocyte" }, { id: 69, name: "Dosage beta HCG" }, { id: 70, name: "Uroculture simple" }, { id: 71, name: "créatinemie" }, { id: 72, name: "Copro-culture" }, { id: 73, name: "Copro-culture+ATB" }, { id: 74, name: "Cholestéroe tota" }, { id: 75, name: "Triglycéride" }, { id: 76, name: "Uricémie ( acide urique)" }, { id: 77, name: "Azotémie( urée)" }, { id: 78, name: "transaminases" }, { id: 79, name: "Protéines totale" }, { id: 80, name: "amylase" }, { id: 81, name: "Albumine" }, { id: 82, name: "ALP" }, { id: 83, name: "bilirubine" }, { id: 84, name: "calcium" }, { id: 85, name: "chlore" }, { id: 86, name: "CPK" }, { id: 87, name: "Gama GT" }, { id: 88, name: "Potassium" }, { id: 89, name: "sodium" }, { id: 90, name: "PV mycoplasme" }, { id: 91, name: "Serologie chlamydia" }, { id: 92, name: "toxoplasmose" }, { id: 93, name: "Rubeole " }, { id: 94, name: "TS" }, { id: 96, name: "TCK" }, { id: 97, name: "TP/INR" }, { id: 98, name: "TC" }, { id: 99, name: "PCA" }, { id: 100, name: "BHCG plasmatiques" }, { id: 101, name: "PV+ATB" }, { id: 102, name: "ECBU+ATB" }, { id: 103, name: "Spermogramme +ATB" }, { id: 104, name: "coproculture" }, { id: 105, name: "T3" }, { id: 106, name: "T4" }, { id: 107, name: "FSH" }, { id: 108, name: "oestradial" }, { id: 109, name: "progesterone" }, { id: 110, name: "Bilurbine directe" }, { id: 111, name: "Bilurbnine indirect" }, { id: 112, name: "HDL" }, { id: 113, name: "LDL " }, { id: 114, name: "CRP" }, { id: 115, name: "magnesemie" }, { id: 116, name: "prolactinemie" }, { id: 117, name: "TPHA" }, { id: 118, name: "Ag-HBS" }, { id: 119, name: "HBA1C" }, { id: 120, name: "Hépatite C" }, { id: 121, name: "Hépatite B" }, { id: 122, name: "Facteurs rhumatoides" }, { id: 123, name: "serologie H pylori " }, { id: 124, name: "Ig-e" }, { id: 125, name: "Hemogramme complet" }, { id: 126, name: "Electrophorese HB" }, { id: 127, name: "Echo-doppler" }, { id: 128, name: "D-Divers" }, { id: 129, name: "F.R" }, { id: 130, name: "TE" }, { id: 131, name: "GRSH" }, { id: 132, name: "EHB" }, { id: 133, name: "SRV" },] },


        { id: 2, title: "RADIOLOGIE", image: img22, examen: [{ id: 1, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 2, name: "A.S.P" }, { id: 3, name: "Thorax osseux" }, { id: 4, name: "Crane (face + profil)" }, { id: 5, name: "Face haute" }, { id: 6, name: "Face basse" }, { id: 7, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 8, name: "A.S.P" }, { id: 9, name: "Thorax osseux " }, { id: 10, name: "Crane (face + profil)" }, { id: 11, name: "Face haute " }, { id: 12, name: "Face basse " }, { id: 13, name: "Blondeau " }, { id: 14, name: "Schuller " }, { id: 15, name: "Trou optique " }, { id: 16, name: "Os propre du nez " }, { id: 17, name: "Rachis cervical (face + profil)" }, { id: 18, name: "Rachis ¾ droit (face + profil)" }, { id: 19, name: "Rachis ¾ gauche (face + profil)" }, { id: 20, name: "Rachis lombaire (face + profil)" }, { id: 21, name: "Rachis lombaire-sacré  (face + profil)" }, { id: 22, name: "Rachis dorsal (face + profil)" }, { id: 23, name: "Cavum " }, { id: 24, name: "HIRZ" }, { id: 25, name: "H.S.G" }, { id: 26, name: "U.I.V" }, { id: 27, name: "Uretro cystographie rétrograde " }, { id: 28, name: "Lavement baryté " }, { id: 28, name: "Contenu utérin" }, { id: 30, name: "TOGD" }, { id: 1, name: "Mammographie " }, { id: 31, name: "pulmonaire" }, { id: 32, name: "Main (face + profil)" }, { id: 33, name: "Poignet (face + profil)" }, { id: 34, name: "Avant-bras (face + profil)" }, { id: 35, name: "Radio UIV" }, { id: 36, name: "Coude (face + profil)" }, { id: 37, name: "Humérus (face + profil)" }, { id: 38, name: "Pied (face + profil)" }, { id: 39, name: "Cheville (face + profil)" }, { id: 40, name: "" }, { id: 41, name: "Jambe (face + profil)" }, { id: 42, name: "Genou (face + profil)" }, { id: 43, name: "Fémur (face + profil)" }, { id: 44, name: "Epaule (face + profil)" }, { id: 45, name: "Clavicule (face + profil)" }, { id: 46, name: "Maxillaire défilé (face + profil)" }, { id: 47, name: "Bassin [hanche] (face + profil)" },] },



        { id: 3, title: "Dermatologie", image: img33, examen: [{ id: 1, name: "" }, { id: 2, name: "Photothérapie" }] },
        { id: 4, title: "LES ACTES MEDICAUX", image: img11, examen: [{ id: 1, name: "Consultation" }, { id: 2, name: "Echographie pelvienne" }, { id: 3, name: "Echographie abdominale" }, { id: 4, name: "Echographie Testiculaire" }, { id: 5, name: "Echographie des parties molles" }, { id: 6, name: "Echographie prostatique" }, { id: 7, name: "Echographie des seins" }, { id: 8, name: "Echographie fontanelle" }, { id: 9, name: "Echographie cervicale" }, { id: 10, name: "Surveillance de la grossesse (CPN" }, { id: 11, name: "Accouchement" }, { id: 12, name: "Chlamydiae" }, { id: 13, name: "Hydrotubatio" }, { id: 14, name: "GERF" }, { id: 15, name: "Selles" }, { id: 16, name: "Frottis sanguin" }, { id: 17, name: "GERF" }, { id: 18, name: "NFS" }, { id: 19, name: "VS" }, { id: 20, name: "T.E" }, { id: 21, name: "ECBU" }, { id: 22, name: "PV" }, { id: 23, name: "BW" }, { id: 24, name: "Hémogramme" }, { id: 25, name: "Cytogramme culture" }, { id: 26, name: "Spermogramme culture" }, { id: 27, name: "Hemoculture" }, { id: 28, name: "Microalbuminurie" }, { id: 29, name: "Prolactinimie" }, { id: 30, name: "VDRL" }, { id: 31, name: "Dosage prolactine" }, { id: 32, name: "Testostérone" }, { id: 33, name: "spermoculture" }, { id: 34, name: "PV+ Mycoplasme" }, { id: 35, name: "TP/INR" }, { id: 36, name: "SDWF" }, { id: 37, name: "Glycémie" }, { id: 38, name: "magnésemie" }, { id: 40, name: "albuminerie" }, { id: 41, name: "glucosurie" }, { id: 42, name: "Glaire cervicale " }, { id: 43, name: "TPC" }, { id: 44, name: "Spermogramme " }, { id: 45, name: "spermocytogramme" }, { id: 46, name: "Hospitalisation/jour" }, { id: 47, name: "aslo" }, { id: 48, name: "Taux reticulocyte" }, { id: 49, name: "Charge virale " }, { id: 50, name: "Taux de CD4 " }, { id: 51, name: "Hormones Thyroidiens T3" }, { id: 52, name: "Hormones Thyroidiens T4" }, { id: 53, name: "Hormones Thyroidiens TSH" }, { id: 54, name: "Kaliemie" }, { id: 55, name: "fistulographie" }, { id: 56, name: "Serologie toxo" }, { id: 57, name: "Serologie rubeole" }, { id: 58, name: "Serologie sphylitique" }, { id: 59, name: "GERH+Frottis" }, { id: 60, name: "Urotro- cystoscopie" }, { id: 61, name: "galactographie" }, { id: 62, name: "pyoculture" }, { id: 63, name: "ETF" }, { id: 64, name: "AC-anti-AVC" }, { id: 65, name: "Dosage d’oestradial" }, { id: 66, name: "AMH" }, { id: 67, name: "Serologie siphilis" }, { id: 68, name: "NFS + réticulocyte" }, { id: 69, name: "Dosage beta HCG" }, { id: 70, name: "Uroculture simple" }, { id: 71, name: "créatinemie" }, { id: 72, name: "Copro-culture" }, { id: 73, name: "Copro-culture+ATB" }, { id: 74, name: "Cholestéroe tota" }, { id: 75, name: "Triglycéride" }, { id: 76, name: "Uricémie ( acide urique)" }, { id: 77, name: "Azotémie( urée)" }, { id: 78, name: "transaminases" }, { id: 79, name: "Protéines totale" }, { id: 80, name: "amylase" }, { id: 81, name: "Albumine" }, { id: 82, name: "ALP" }, { id: 83, name: "bilirubine" }, { id: 84, name: "calcium" }, { id: 85, name: "chlore" }, { id: 86, name: "CPK" }, { id: 87, name: "Gama GT" }, { id: 88, name: "Potassium" }, { id: 89, name: "sodium" }, { id: 90, name: "PV mycoplasme" }, { id: 91, name: "Serologie chlamydia" }, { id: 92, name: "toxoplasmose" }, { id: 93, name: "Rubeole " }, { id: 94, name: "TS" }, { id: 96, name: "TCK" }, { id: 97, name: "TP/INR" }, { id: 98, name: "TC" }, { id: 99, name: "PCA" }, { id: 100, name: "BHCG plasmatiques" }, { id: 101, name: "PV+ATB" }, { id: 102, name: "ECBU+ATB" }, { id: 103, name: "Spermogramme +ATB" }, { id: 104, name: "coproculture" }, { id: 105, name: "T3" }, { id: 106, name: "T4" }, { id: 107, name: "FSH" }, { id: 108, name: "oestradial" }, { id: 109, name: "progesterone" }, { id: 110, name: "Bilurbine directe" }, { id: 111, name: "Bilurbnine indirect" }, { id: 112, name: "HDL" }, { id: 113, name: "LDL " }, { id: 114, name: "CRP" }, { id: 115, name: "magnesemie" }, { id: 116, name: "prolactinemie" }, { id: 117, name: "TPHA" }, { id: 118, name: "Ag-HBS" }, { id: 119, name: "HBA1C" }, { id: 120, name: "Hépatite C" }, { id: 121, name: "Hépatite B" }, { id: 122, name: "Facteurs rhumatoides" }, { id: 123, name: "serologie H pylori " }, { id: 124, name: "Ig-e" }, { id: 125, name: "Hemogramme complet" }, { id: 126, name: "Electrophorese HB" }, { id: 127, name: "Echo-doppler" }, { id: 128, name: "D-Divers" }, { id: 129, name: "F.R" }, { id: 130, name: "TE" }, { id: 131, name: "GRSH" }, { id: 132, name: "EHB" }, { id: 133, name: "SRV" },] },


        { id: 5, title: "RADIOLOGIE", image: img22, examen: [{ id: 1, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 2, name: "A.S.P" }, { id: 3, name: "Thorax osseux" }, { id: 4, name: "Crane (face + profil)" }, { id: 5, name: "Face haute" }, { id: 6, name: "Face basse" }, { id: 7, name: "Bassin [hanche] ¾ obturateur (face + profil)" }, { id: 8, name: "A.S.P" }, { id: 9, name: "Thorax osseux " }, { id: 10, name: "Crane (face + profil)" }, { id: 11, name: "Face haute " }, { id: 12, name: "Face basse " }, { id: 13, name: "Blondeau " }, { id: 14, name: "Schuller " }, { id: 15, name: "Trou optique " }, { id: 16, name: "Os propre du nez " }, { id: 17, name: "Rachis cervical (face + profil)" }, { id: 18, name: "Rachis ¾ droit (face + profil)" }, { id: 19, name: "Rachis ¾ gauche (face + profil)" }, { id: 20, name: "Rachis lombaire (face + profil)" }, { id: 21, name: "Rachis lombaire-sacré  (face + profil)" }, { id: 22, name: "Rachis dorsal (face + profil)" }, { id: 23, name: "Cavum " }, { id: 24, name: "HIRZ" }, { id: 25, name: "H.S.G" }, { id: 26, name: "U.I.V" }, { id: 27, name: "Uretro cystographie rétrograde " }, { id: 28, name: "Lavement baryté " }, { id: 28, name: "Contenu utérin" }, { id: 30, name: "TOGD" }, { id: 1, name: "Mammographie " }, { id: 31, name: "pulmonaire" }, { id: 32, name: "Main (face + profil)" }, { id: 33, name: "Poignet (face + profil)" }, { id: 34, name: "Avant-bras (face + profil)" }, { id: 35, name: "Radio UIV" }, { id: 36, name: "Coude (face + profil)" }, { id: 37, name: "Humérus (face + profil)" }, { id: 38, name: "Pied (face + profil)" }, { id: 39, name: "Cheville (face + profil)" }, { id: 40, name: "" }, { id: 41, name: "Jambe (face + profil)" }, { id: 42, name: "Genou (face + profil)" }, { id: 43, name: "Fémur (face + profil)" }, { id: 44, name: "Epaule (face + profil)" }, { id: 45, name: "Clavicule (face + profil)" }, { id: 46, name: "Maxillaire défilé (face + profil)" }, { id: 47, name: "Bassin [hanche] (face + profil)" },] },



        { id: 6, title: "Dermatologie", image: img33, examen: [{ id: 1, name: "" }, { id: 2, name: "Photothérapie" }] },
    ];

    return (
        <>
            <Navbarclinique />

            <div className="servicep ">
                <h2 className="service-title">🥼 Nos services</h2>
                <div className="row row-cols-1 row-cols-md-3 gx-4 gy-5 pb-5 px-5 w-100">
                    {services.map((service) => (
                        <div key={service.id} className="col ">
                            <div className="card h-100">
                                <img src={service.image} className="card-img-top " alt={service.title} />
                                <div className="card-body service-p d-flex justify-content-between align-items-center">
                                    <h5 className="card-title">{service.title}</h5>
                                    <button
                                        type="button"
                                        className="btn btn-danger ms-3"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#infoModal-${service.id}`}
                                    >
                                        En savoir plus...
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
                                                Ce service propose des examens spécialisés pour diagnostiquer et traiter les pathologies liées à {service.title.toLowerCase()}.
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


        </>
    );
}

export default Service;
