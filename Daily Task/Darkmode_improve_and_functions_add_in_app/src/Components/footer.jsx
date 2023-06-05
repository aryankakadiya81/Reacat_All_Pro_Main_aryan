function footer(Props) {

    return (
        <div>
            <footer className={`mainfooter bg-${Props.Mode == 'light' ? 'secondary' : 'dark'} text-white`} role="contentinfo">
                <div className="footer-middle">
                    <div className="container pt-5">
                        <div className="d-flex justify-content-around px-5">
                            <div className="">
                                <div className="footer-pad">
                                    <h4>Heading 1</h4>
                                    <ul className="list-unstyled">
                                        <li></li>
                                        <li>Payment Center</li>
                                        <li>Contact Directory</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <div className="footer-pad">
                                    <h4>Heading 2</h4>
                                    <ul className="list-unstyled">
                                        <li>Website Tutorial</li>
                                        <li>Accessibility</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="">
                                <div className="footer-pad">
                                    <h4>Heading 3</h4>
                                    <ul className="list-unstyled">
                                        <li>Parks and Recreation</li>
                                        <li>Public Works</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 copy my-4">
                                <p className="text-center">&copy; Copyright 2018 - Company Name.  All rights reserved.</p>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </div>
    )
}


export default footer