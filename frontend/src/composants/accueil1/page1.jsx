import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import video from "../../assets/Page1.webm";

export default function Page1() {
    const videoRef = useRef(null);

    useEffect(() => {
        const vid = videoRef.current;
        if (vid) {
            // Essaye de lancer la lecture
            vid.play().catch(err => {
                console.log("Autoplay bloqué :", err);
            });
        }
    }, []);

    return (
        <div className="page1">
            <video
                ref={videoRef}
                className="page11"
                src={video}
                autoPlay
                loop
                muted
                playsInline
            ></video>
        </div>
    );
}
