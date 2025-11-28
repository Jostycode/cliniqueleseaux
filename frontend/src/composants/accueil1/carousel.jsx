import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img2.jpg";
import ambulance from "../../assets/ambulance1.png";
import "bootstrap/dist/css/bootstrap.min.css";

function MiniService() {

    return (
        <>
            <div className="carousel-container">

                <Carousel fade interval={3000}>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img
                            className="d-block w-100 carousel-image"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                <div className="carousel-container-2">
                    <h1>Bienvenue à la clinique médicale <br /> <p className="leseaux">"LES EAUX"</p></h1>
                    <p>votre santé est notre priorité première</p>
                </div>
                <div className="terrain-ambulance">
                    <img src={ambulance} alt="" className="ambulance" />
                </div>
            </div>
        </>
    );
}

export default MiniService;
