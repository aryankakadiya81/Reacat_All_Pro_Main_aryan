
function Navbar(Props) {

    return (
        <div>
            <nav className={`navbar navbar-expand-lg bg-${Props.Mode == 'light' ? 'secondary' : 'dark'}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-light`} href="#">Navbar</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-light`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link active text-light`} aria-current="page" href="#">About</a>
                            </li>
                        </ul>
                        <i className={`bi bi-sun-fill fs-5 text-light`}></i>
                        <div className="form-check form-switch mx-2 ms-3">
                            <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" onClick={Props.ToggleMode} defaultChecked="" />
                        </div>
                        <i className={`bi bi-moon-fill fs-6 text-light`}></i>

                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar