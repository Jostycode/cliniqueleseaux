import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import image1 from "../../assets/Land_cruiser_ambulance_2.png";

function Reservation({ children, surgence }) {
    const classn = `text-decoration-none justify-content-center d-flex bg-danger p-2 rounded-3 text-white ${surgence ? 'surgence' : ''}`;

    const handleSendEmail = () => {
        const subject = "Demande de réservation";
        const body = "Bonjour, je souhaite réserver un service.";


        const mailtoLink = `mailto:cliniqueleseaux@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

    };

    return (
        <div className="page4 text-white d-flex justify-content-center">
            <button onClick={handleSendEmail} className={classn}>
                {children}
            </button>
        </div>
    );
}

export default Reservation;
