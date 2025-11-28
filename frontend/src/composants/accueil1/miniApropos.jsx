import "bootstrap/dist/css/bootstrap.min.css";
import img4 from "../../assets/img4.jpg"
import ambulance from "../../assets/ambulance1.png";

function miniapropos() {
    return (

        <>
            <div className="carousel-container-2">
                <h1 className="text-sky-600">Bienvenue à la clinique médicale <br /> <p className="leseaux">"LES EAUX"</p></h1>
                <p>votre santé est notre priorité première</p>
            </div>
            <div className="terrain-ambulance">
                <img src={ambulance} alt="" className="ambulance" />
            </div>
            <div className="miniapropos">
                {/* <div className="bgminiapropos"></div> */}
                <h2 className="vision">Notre vision</h2><br />
                <div className="card mb-0 about" >
                    <div className="row g-0">
                        <div className="col-md-6 side-a">
                            <img src={img4} className="img-fluid imgcard" alt="..." />
                        </div>
                        <div className="col-md-6 side-b">

                            <p className="card-text text1">
                                À la clinique, notre priorité est d’offrir à chaque patient une prise en charge complète, personnalisée et de qualité. Nous mettons à votre disposition une large gamme de services médicaux et paramédicaux, alliant expertise, écoute et technologie de pointe. Qu’il s’agisse de soins préventifs, de consultations spécialisées, d’examens diagnostiques ou de suivis thérapeutiques, notre équipe pluridisciplinaire veille à assurer votre bien-être à chaque étape. De nouveaux services viendront bientôt enrichir notre offre afin de répondre encore mieux à vos besoins et d’accompagner votre santé au quotidien, dans un environnement moderne, bienveillant et professionnel.
                            </p>
                            {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default miniapropos