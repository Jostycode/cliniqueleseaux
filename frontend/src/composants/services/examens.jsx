import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Examens() {
    const examens = [
        { id: 1, title: "Card title", image: img11 },
        { id: 2, title: "Card title", image: img22 },
        { id: 3, title: "Card title", image: img33 },
        { id: 4, title: "Card title", image: img11 },
        { id: 5, title: "Card title", image: img22 },
        { id: 6, title: "Card title", image: img33 },
        { id: 7, title: "Card title", image: img11 },
        { id: 8, title: "Card title", image: img22 },
        { id: 9, title: "Card title", image: img33 }
    ]
    return (
        <>
            <button type="button" className="btn btn-primary p-1 btnccc" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Examens
            </button>


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Examens de ce service</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row row-cols-1 row-cols-md-3 g-0 service-content">
                                {examens.map((service, index) =>
                                    <div key={service.id || index} className="col mb-4">
                                        <div className="card">
                                            <img src={service.image} className=" service-content-img" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title text-center">{service.title}</h5>

                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fermer la fenetre</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}