function Footer({ anio }) {
    return (
        <footer className="bg-dark text-light py-4 mt-5" style={{paddingLeft: '200px', paddingRight: '200px'}}>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col text-start">
                    © {anio} HelioAndes Energía <br/>
                    </div>
                    <div className="col text-end">
                        <a href="#privacidad" className="text-light text-decoration-underline me-2">Privacidad</a>
                        <span className="mx-1">·</span>
                        <a href="#terminos" className="text-light text-decoration-underline">Términos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;