import ascoma from "../../assets/ascoma.jpeg";
import agc from "../../assets/agcvie.png";
import arc from "../../assets/arc.jpg";
import willis from "../../assets/willis.png";
import sunu from "../../assets/sunu.png";
import olea from "../../assets/olea.png";
import nsia from "../../assets/nsia.jpg";
import ofis from "../../assets/ofis.png";
import mercure from "../../assets/mercure.jpEg";

import "bootstrap/dist/css/bootstrap.min.css"; // très important

function MiniExamen() {
    const examens = [
        { title: "ASCOMA", image: ascoma },
        { title: "AGC", image: agc },
        { title: "ARC", image: arc },
        { title: "WILLIS", image: willis },
        { title: "SUNU", image: sunu },
        { title: "OLEA", image: olea },
        { title: "NSIA", image: nsia },
        { title: "OFIS", image: ofis },
        { title: "MERCURE", image: mercure },

    ]
    return (
        <>
            <div className="service1 ">
                <h5 className="service-title text-center exat">"Ils nous font confiance"</h5>

                <div className="examen-content">
                    <div className="examen-track">
                        {examens.map((examen) => (
                            <div className="card cardexamen">
                                <img src={examen.image} className="service-content-img" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-dark justify-self-center">{examen.title}</h5>
                                </div>
                            </div>
                        ))}
                        {/* duplication pour effet infini */}
                        {examens.map((examen) => (
                            <div className="card cardexamen">
                                <img src={examen.image} className="service-content-img" alt="..." />
                                <div className="card-body ">
                                    <h5 className="card-title text-dark justify-self-center text-center">{examen.title}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="cardcolexamen"></div> */}
                </div>
            </div>
        </>
    );
}

export default MiniExamen;
