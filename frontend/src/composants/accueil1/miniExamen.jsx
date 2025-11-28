import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import "bootstrap/dist/css/bootstrap.min.css"; // très important

function MiniExamen() {
    const examens = [
        { title: "Card title", image: img11 },
        { title: "Card title", image: img22 },
        { title: "Card title", image: img33 },
        { title: "Card title", image: img11 },
        { title: "Card title", image: img22 },
        { title: "Card title", image: img33 }
    ]
    return (
        <>
            <div className="service1 ">
                <h2 className="service-title exat">Nos examens</h2>
                <p>
                    La clinique met à votre disposition un service complet d’examens médicaux, réalisé avec des équipements modernes et performants. Ces examens permettent d’établir des diagnostics précis et d’assurer un suivi rigoureux de votre état de santé. Notre équipe veille à ce que chaque patient bénéficie d’une prise en charge rapide, sécurisée et adaptée à ses besoins spécifiques.
                </p>
                <div className="examen-content">
                    <div className="examen-track">
                        {examens.map((examen) => (
                            <div className="card cardexamen">
                                <img src={examen.image} className="service-content-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white justify-self-center">{examen.title}</h5>
                                </div>
                            </div>
                        ))}
                        {/* duplication pour effet infini */}
                        {examens.map((examen) => (
                            <div className="card cardexamen">
                                <img src={examen.image} className="service-content-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-white justify-self-center">{examen.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="cardcolexamen"></div>
                </div>
            </div>
        </>
    );
}

export default MiniExamen;
