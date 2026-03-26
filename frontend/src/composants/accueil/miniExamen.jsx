import ascoma from "../../assets/ascoma.JPEG";
import agc from "../../assets/agcvie.PNG";
import arc from "../../assets/arc.JPG";
import willis from "../../assets/willis.PNG";
import sunu from "../../assets/sunu.PNG";
import olea from "../../assets/olea.PNG";
import nsia from "../../assets/nsia.JPG";
// import ofis from "../../assets/ofis.PNG";
// import mercure from "../../assets/mercure.JPEG";

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
        // { title: "OFIS", image: ofis },
        // { title: "MERCURE", image: mercure },

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
