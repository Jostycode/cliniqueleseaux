import "bootstrap/dist/css/bootstrap.min.css";

function Page1({ children }) {
    return (

        <div className="page1 bg-success text-white d-flex justify-content-center">
            {children}
        </div>
    )
}

export default Page1