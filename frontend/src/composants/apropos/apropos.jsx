import img11 from "../../assets/img1.jpg";
import img22 from "../../assets/img2.jpg";
import img33 from "../../assets/img2.jpg";
import Navbarclinique from "../accueil/menu";
import Footer from "../accueil/footer";
import "bootstrap/dist/css/bootstrap.min.css";


function Apropos() {
    const apropos = [
        {
            title: "QUI SOMMES NOUS ?",
            text: `La clinique les eaux est un établissement de soins privés, de droit congolais, créé en 1996 dont la vocation est de fournir des soins de qualité et des services répondant aux besoins des patients.
            En quelques mots, la clinique "LES EAUX" c’est :
            Une capacité d’accueil en hospitalisation à temps complets. Nous nous engageons à fournir des soins de la plus haute qualité, soutenus par une équipe médicale hautement qualifiée et constamment formée aux dernières avancées. Notre quête de l'excellence se reflète dans chaque diagnostic et chaque traitement, garantissant à nos patients une prise en charge optimale.

            Grâce à notre équipement et à notre personnel expert, nous assurons des diagnostics précis et des traitements efficaces.`,

            text1: `La priorité absolue de la Clinique médicale les Eaux, est le bien-être et la sécurité de chaque patient. Nous créons un environnement de soins rassurant et bienveillant. Chaque membre de          personnel est dédié à assurer votre confort et votre sécurité tout au long de votre parcours de soins.
              Nous mettons un point d'honneur à respecter les normes de sécurité les plus strictes dans tous nos services. Nous exerçons notre profession avec la plus grande éthique et intégrité, en plaçant la confiance et la transparence au cœur de nos relations avec nos patients.

            Nos décisions sont toujours guidées par le respect de la déontologie médicale et l'intérêt supérieur de nos patients, l'honnêteté et la clarté sont les fondements de notre communication avec vous.

    
            Nous travaillons constamment à améliorer l'accès à nos services pour mieux répondre aux besoins de la communauté.
`
        },
        {
            title: "NOTRE MISSION",
            text: ` est de fournir des soins de santé de premier ordre, en mettant l’accent satisfaction clients et le développement continu de notre équipe.Notre vision est de devenir la référence en matière de soins de santé de qualité, offrant des services innovants et personnalisés. `
        },

        {
            title: "VOICI LES PRINCIPAUX POLES QUI COMPOSENT NOTRE CLINIQUE ",
            text: `L'Accueil et le Secrétariat Médical :
            C'est le premier point de contact. Notre équipe d'accueil est dédiée à vous recevoir chaleureusement, à gérer vos rendez-vous, à enregistrer vos informations administratives et à répondre à vos premières questions.
            Ils assurent la liaison entre les patients et les différents services médicaux, gèrent les dossiers patients et facilitent votre parcours au sein de la clinique.`,
            membre: [
                {
                    title: "LES SOINS INFIRMIERS ET LES PANSEMENTS :",
                    text: `Notre équipe d'infirmiers qualifiés prodigue les soins nécessaires, qu'il s'agisse de pansements, d'injections, de perfusions ou d'autres actes infirmiers prescrits par les médecins.
                    Ils travaillent en étroite collaboration avec les médecins pour assurer la continuité des soins après une consultation ou une intervention.`},
                {
                    title: "LA PHARMACIE INTERNE :",
                    text: `Notre clinique dispose d'une officine pour la délivrance des médicaments prescrits.
                    Elle assure la mise à disposition rapide des traitements pour les patients, souvent directement après leur consultation.`},
                {
                    title: "LES ESPACES D'ATTENTE ET DE REPOS :",
                    text: `Nous avons aménagé des espaces confortables et accueillants pour que vous puissiez patienter dans les meilleures conditions possibles.
                    Ces espaces sont conçus pour votre détente avant et après vos consultations.`},
                {
                    title: "L'ADMINISTRATION ET LA GESTION :",
                    text: `Ce service s'occupe de la gestion globale de la clinique, y compris la facturation, la comptabilité, les ressources humaines, la gestion des stocks et la conformité réglementaire.
                    "Notre clinique, 'Les Eaux', bénéficie d'une structure administrative solide et bien définie, conçue pour assurer une gestion fluide et efficace de toutes nos opérations, de la prise en charge médicale à la satisfaction du patient. `},
            ]
        },
    ]
    return (
        <>
            <Navbarclinique color1="primary-subtle" />
            <div className="px-5 py-5">
                {apropos.map((item, index) => (
                    <div className="mb-0 about" key={index} >
                        <h3 className="h3">{item.title}</h3>
                        <p>{item.text}</p>
                        <p>{item.text1}</p>
                        <div className="row row-cols-1 row-cols-md-4 gx-4 gy-5 pt-5 w-100 ">
                            {item.membre && item.membre.map((subitem, subindex) => (
                                <div key={subindex} className="col px-3 ">
                                    <div className="card h-100 px-3 py-2 membre">
                                        <h5 className="pb-4 text-white">{subitem.title}</h5>
                                        <p className="text-white">{subitem.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}
export default Apropos;