function footer(Props) {

    return (
        <div className="container">
            <footer className={`mainfooter bg-${Props.Mode == 'light' ? 'secondary' : 'dark'} text-white`} role="contentinfo">
                <div className="footer-middle">
                    <div className="container pt-3">
                        <div className="row">
                            <div className="col-md-12 copy my-1">
                                <p className="text-center fw-bold">&copy; Copyright 2023 - Aryan Kakadiya. All rights reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </div>
    )
}


export default footer