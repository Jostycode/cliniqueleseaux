import { Link } from 'react-router-dom'
import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import { useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Page3() {
    const services = [
        { title: "Card title", image: img11 },
        { title: "Card title", image: img22 },
        { title: "Card title", image: img33 }
    ]
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const design = entry.target.dataset.design; // get design from dataset
                    entry.target.animate(
                        [
                            { transform: design, opacity: 0 },
                            { transform: "translateX(0px)", opacity: 1 },
                        ],
                        {
                            duration: 2000,
                            fill: "forwards", // keep final state
                        }
                    );
                }
            }
        });

        const targets = [
            { element: document.querySelector(".item1"), design: "translateX(-20px)" },
            { element: document.querySelector(".item4"), design: "translateX(-20px)" },
            { element: document.querySelector(".item3"), design: "translateY(-20px)" },
            { element: document.querySelector(".item2"), design: "translateY(-20px)" },
            { element: document.querySelector(".item6"), design: "translateY(20px)" },
            { element: document.querySelector(".item5"), design: "translateY(20px)" },
        ];

        targets.forEach((el) => {
            if (el.element) {
                el.element.dataset.design = el.design; // store design in dataset
                observer.observe(el.element);
            }
        });

        return () => observer.disconnect();
    }, []);
    return (
        <>
            <div className="service pb-5">
                <div className='div1'>
                    <h2 className="service-title1">nos services</h2>
                    <p>
                        Découvrez ci-dessous les différents services proposés par notre clinique. Chacun d’eux a été conçu pour répondre à vos besoins avec professionnalisme, écoute et attention. Notre équipe met tout en œuvre pour vous offrir des soins de qualité dans un cadre moderne et accueillant.
                    </p>
                </div>
                <div className="container">
                    <div className="item1">
                        <h5>radiologie</h5>
                    </div>
                    <div className="item2"></div>
                    <div className="item3">
                        <h5>medecine generale</h5>
                    </div>
                    <div className="item4"></div>
                    <div className="item5">
                        <h5>pédiatrie</h5>
                    </div>
                    <div className="item6"></div>

                </div>

                <Link to="/service" className='serviceparagraphe'>en savoir plus... </Link>
            </div>
        </>
    );
}

export default Page3;
