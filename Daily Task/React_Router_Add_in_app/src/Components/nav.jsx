import { Link } from "react-router-dom";
function Navbar(Props) {

    return (
        <div className="w-100">
            <nav className={`navbar navbar-expand-lg fs-5 bg-${Props.Mode == 'light' ? 'secondary' : 'dark'}`}>
                <div className="container-fluid">
                    <div><i className="bi bi-card-text text-white fs-1"></i></div>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-3">
                            <li className="nav-item">

                                <Link className={`nav-link active text-light`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link active text-light`} aria-current="page" to="/About">About</Link>
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

export default Navbar;