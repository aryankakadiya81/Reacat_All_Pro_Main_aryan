function login() {

    return (
        <div className="d-flex justify-content-center align-items-center mt-5">
            <div className="col-6 card border-white border-2 rounded-0 bg-dark" style={{width: "27rem"}}>
            <div className="card-body">
              <h5 className="card-title text-light text-center fs-3 mt-3">Login Form</h5>
              <form action="">
                <div className="mb-3 col-10 mx-5 mt-5 mb-0">
                  <label for="exampleInputEmail1" className="form-label text-white fw-bold">User Name</label>
                  <input type="text" className="form-control border-2 rounded-1 bg-white bg-opacity-10 text-white"
                    id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
        
                <div className="col-10 mx-5 my-0 mb-4">
                  <label for="exampleInputEmail1" className="form-label text-white fw-bold">Password</label>
                  <input type="password" className="form-control border-2 rounded-1 bg-white bg-opacity-10 text-white"
                    id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
        
                <div className="form-check my-0 col-10 mx-5">
                  <input className="form-check-input border-2  rounded-0" type="checkbox" value="" id="flexCheckDefault"/>
                  <label className="form-check-label text-white fw-bold" for="flexCheckDefault">
                    Remember me ?
                  </label>
                </div>
        
                <div className="mt-4 ms-4 d-flex justify-content-center">
                  <button type="button" className="btn bg-white rounded-1 text-primary col-10">Log in</button>
                </div>
        
                <div className="d-flex ms-4 my-4 justify-content-center ">
                  <a href="" className="text-light text-decoration-none fw-bold">Forgot Password ?</a>
                </div>
        
        
        
              </form>
            </div>
          </div>
        </div>
    )

}

export default login