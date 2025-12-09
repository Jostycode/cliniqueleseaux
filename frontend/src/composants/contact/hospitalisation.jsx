import Navbarclinique from "../accueil/menu";
import Footer from "../accueil/footer";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import img22 from "../../assets/img2.jpg";
import horaire from "../../assets/horaire.png";

function Hospitalisation() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !phone || !message) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const numeroWhatsApp = "237694786507";
        const texte = `Bonjour, je suis ${name}.\nNuméro : ${phone}\n\n${message}`;
        const lienWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texte)}`;

        window.location.href = lienWhatsApp;
    };

    const handleSendEmail = () => {
        if (!name || !phone || !message) {
            alert("Veuillez remplir tous les champs.");
            return;
        }

        const subject = `Message de ${name}`;
        const body = `Nom : ${name}\nNuméro : ${phone}\n\n${message}`;
        const mailtoLink = `mailto:cliniqueleseaux@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;
    };

    return (
        <>
            <Navbarclinique color1="primary-subtle" />

            <div className="page5">
                <div className="card mb-0 about" >
                    <h2 className="service-title stext pb-5 d-flex justify-content-center">Hospitalisation</h2>
                    <div className="row g-0">

                        <img src={img22} className="col-md-6 side-a py-5" alt="..." />

                        <div className="col-md-6">
                            <div className="side-bb py-5 px-3">
                                <p className="card-text text1">
                                    La clinique médicale "LES EAUX" dispose des chambres d'hospitalisation équipées aux standards internationaux par consequent le patient admis beneficie d'une tenue de rechange nous respectons toutes intimité de nos patients. <br /><br />
                                    Il a droit a (3)trois repas par jour, le petit dejeuner, le dejeuner; le diner et une bouteille d'eau de 1Litre par jour. <br /><br />

                                    Au cœur de notre clinique réside une préoccupation sincère pour votre santé. C’est pourquoi chaque jour notre équipe s’emploie à vous offrir des soins médicaux répondant aux normes dans un environnement à la fois contemporain et chaleureux.
                                    <br /><br />
                                    <img src={horaire} className="h-70" alt="" />
                                    <br />
                                    Votre santé est notre priorité.

                                </p>


                                {/* <Link to="/apropos" className='serviceparagraphe'>en savoir plus... </Link> */}
                                {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Hospitalisation;