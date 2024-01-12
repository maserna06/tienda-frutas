import { useRouteError, Link } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    console.error(error);

    return (
        <>
            <div
                className="error-page d-flex align-items-center flex-wrap justify-content-center pd-20"
            >
                <div className="pd-10">
                    <div className="error-page-wrap text-center">
                        <h1>404</h1>
                        <h3>Error: 404 Pagina no encontrada</h3>
                        <p>
                            Lo sentimos, la pagina que busccas no se puede acceder.
                            <br />
                            Revisa la URL
                        </p>
                        <p>
                            <i>{ error.statusText || error.message }</i>
                        </p>
                        <div className="pt-20 mx-auto max-width-200">
                            <Link to={`/`} className="btn btn-primary btn-block btn-lg">
                                Regresar al Inicio
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage