import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Page4({ children }) {
    return (

        <div className="page4 text-white d-flex justify-content-center">
            <Link rel="stylesheet" href="" className="text-white text-decoration-none justify-content-center d-flex bg-danger p-2 rounded-3">
                {children}
            </Link>
        </div>
    )
}

export default Page4