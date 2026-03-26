import "bootstrap/dist/css/bootstrap.min.css";
import ouverture from "../../assets/ouverture.png";
import horaire from "../../assets/horaire.png";
import facebook from "../../assets/facebook.png";
import gmail from "../../assets/gmail.png";

function Footer(params) {
    const par = ">"
    return (
        <>
            <footer className="footer">
                <div className="footer-a">
                    <div className="footer-aa">
                        <a href="Accueil">Accueil</a>
                        <a href="Services">Services</a>
                        <a href="Apropos">Apropos</a>
                        <a href="Contact">Contact</a>
                    </div>
                    <div className="footer-ab">
                        <div className="footer-aba">
                            <a href={ouverture}>
                                <img src={ouverture} alt="" style={{ width: "80%", padding: "2%" }} />
                            </a>
                            <a href={horaire} style={{ paddingTop: "-10vh" }}>
                                <img src={horaire} alt="" style={{ paddingTop: "1.5vh" }} />
                            </a>
                        </div>
                        <div className="footer-abb">
                            <a href=""><img src={facebook} alt="" style={{ margin: "10%" }} /></a>
                            <a href=""><img src={gmail} alt="" /></a>

                        </div>
                    </div>
                </div>
                <div className="footer-b">
                    &copy; Clinique Médicale "LES EAUX"
                </div>
            </footer>
        </>
    )
}
export default Footer;