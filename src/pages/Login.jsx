import React from 'react';

const Login = () => {
    return (
        <div className="text-center mt-4 "> 
            <h1 style={{color: "red"}}><i><b>To-Tummy</b></i></h1> 

            <div className="d-flex justify-content-center mt-3"> 
                <div className="card border-info mb-3" style={{ maxWidth: "24rem", padding: "20px" }}>
                    <div className="card-header text-center bg-danger">User Login</div>
                    <div className="card-body">
                        <h5 className="card-title text-center">Sign in to your account</h5>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="Email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="Email" placeholder="Enter your Email" required autoFocus/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" required/>
                            </div>

                            <button type="submit" className="btn btn-danger w-100">Login</button>
                            <div className="text-center mt-3">
                                <p>Don't have an account? <a href="/Register">Create one</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
