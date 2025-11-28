import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import Navbarclinique from "../accueil/menu";
import Footer from "../accueil/footer";
import "bootstrap/dist/css/bootstrap.min.css";


function Apropos() {
    return (
        <>
            <Navbarclinique color1="primary-subtle" />
            <div className="">
                <div className="miniapropos">
                    <div className="card mb-0 about" >
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="side-b">
                                    <p className="card-text text1">
                                        Notre vision est de bâtir une clinique médicale qui incarne l’excellence, l’humanité et l’innovation au service de la santé. Nous aspirons à devenir un pilier incontournable du bien-être dans notre communauté, un lieu où chaque patient est accueilli avec dignité, compassion et professionnalisme, et où chaque membre de l’équipe médicale est animé par une passion profonde pour le soin et la guérison.
                                    </p>
                                    {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>
                            <div className="col-md-6 imgcard side-a">
                                {/* <img src={img2} className="img-fluid rounded-start" alt="..." /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="miniapropos">
                    <div className="card mb-0 about" >
                        <div className="row g-0">
                            <div className="col-md-6 imgcard side-aa">
                                <img src={img22} className="img-fluid rounded-start side-aa-img" alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="side-bb">
                                    <p className="card-text text1">
                                        Notre vision est de bâtir une clinique médicale qui incarne l’excellence, l’humanité et l’innovation au service de la santé. Nous aspirons à devenir un pilier incontournable du bien-être dans notre communauté, un lieu où chaque patient est accueilli avec dignité, compassion et professionnalisme, et où chaque membre de l’équipe médicale est animé par une passion profonde pour le soin et la guérison.
                                    </p>
                                    {/* <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p> */}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default Apropos;