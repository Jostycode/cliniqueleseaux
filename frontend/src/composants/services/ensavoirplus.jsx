import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function Ensavoirplus() {
    const services = [
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
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModale">
                En savoir plus...
            </button>

            <div className="modal fade" id="exampleModale" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">a propos de la {service.title}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe laudantium sit dolore quaerat quidem vitae velit, beatae sunt exercitationem eum? Perspiciatis doloribus rem quae nisi laudantium alias maxime officiis dicta.
                            </p>

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