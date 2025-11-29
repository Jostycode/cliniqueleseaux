import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import Navbarclinique from "../accueil/menu";
import Footer from "../accueil/footer";
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";


function Page5() {
    return (
        <>
            <div className="page5">
                <div className="card mb-0 about" >
                    <div className="row g-0">
                        <div className="col-md-6 side-a">
                            <img src={img22} className="side-a-img" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="side-bb py-5 px-3">
                                <h3>Presentation de la clinique</h3>
                                <p className="card-text text1">
                                    La clinique les eaux est un établissement de soins privés, de droit congolais, créé en 1996 dont la vocation est de fournir des soins de qualité et des services répondant aux besoins des patients. <br /><br />
                                    En quelques mots, la clinique les eaux c’est :
                                    Une capacité d’accueil en hospitalisation à temps complets de 34 lits nous somme conscient de l’unicité de chaque patient.
                                    <br /><br />
                                    Parce que votre santé est notre priorité.
                                    Découvrez notre clinique les eaux idéalement situé en pleins centre-ville en diagonale de la banque de sang (CTA). <br /><br />
                                    Notre établissement de santé multidisciplinaire ce déploie sur trois étages, cette infrastructure remarquable n’est que le commencement de notre engagement pour votre bien être.
                                    Notre équipe médicale hautement qualifié disponible 24h/24 ; 7/7 prête à répondre à vos besoins de santé les plus urgents.

                                </p>

                                <p>
                                    Situé en plein centre ville, elle possède une capacité d’accueil de 34 lits en hospitalisation à temps complet, repartie en chambres communes ou individuelles climatisées, avec salle de bain privative, avec televiseur,wifi, refrigirateur, lit de garde malade.
                                </p>
                                <Link to="/apropos" className='serviceparagraphe'>en savoir plus... </Link>
                                {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Page5;