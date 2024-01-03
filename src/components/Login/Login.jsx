import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";


const Login = () => {
  const {signIn, googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      // console.log(result)
      navigate(location.state ? location.state : "/");
    });
  };

  const handleLogin = (e) => {
    // console.log(e);
    e.preventDefault()
    const form = new FormData(e.currentTarget);
    // access form datas using formdata
    const email = form.get("email")
    const password = form.get("password")
    
    console.log(email,password)
    // console.log(email,password)

    signIn(email,password)
    .then(result=>{
      console.log(result.user)
      navigate(location.state ? location.state : '/')
    })
    .catch(error=>{
      error.message
    })
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="text-center"></div>
          <div className="card shrink-0 w-full lg:w-[600px] md:w-[600px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <h2 className="text-4xl font-semibold text-center">Login</h2>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <h2 className="text-center">
                Have not account yet?
                <span>
                  <Link to="/register" className="text-blue-600 font-bold">
                    Register
                  </Link>
                </span>
              </h2>
            </form>
            <h2 className="text-center">OR</h2>
            <button onClick={handleGoogleSignIn} className="btn btn-accent">
              <FaGoogle></FaGoogle>SignIn with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
