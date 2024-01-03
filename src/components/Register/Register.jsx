import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = props => {
  const [registerError,setRegisterError] = useState("");
  const {createUser} = useContext(AuthContext)


  const handleRegister = (e) => {
    e.preventDefault();
    // const email = e.target.email.value;
    // console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    // access form datas using formdata
    const name = form.get("name")
    const email = form.get("email")
    const password = form.get("password")
    // console.log(name,photo,email,password);

    setRegisterError('');
    // toast('');

    if(password.length<6){
      setRegisterError('Password Should be at least 6 characters or longer')
    }

    // else if(![/A-Z/].test(password)){
    //   setRegisterError('Your password should have at least one Uppercase letter');
    //   return;
    // }

    // else if(!/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g.test(password)){
    //   setRegisterError('Your password should have at least one special character')
    //   return;
    // }

    createUser(email,password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      toast('User Added Succsessfully')
      console.log(user)
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setRegisterError(error.message)

      // ..
    });
  };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="text-center"></div>
          <div className="card shrink-0 w-full lg:w-[600px] md:w-[600px] max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}className="card-body">
              <div className="form-control">
                <h2 className="text-4xl font-semibold text-center">Register</h2>

                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />

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
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>

              <h2 className="text-center">
               already have account?
                <span>
                  <Link to="/login" className="text-blue-600 font-bold">
                    Login
                  </Link>
                </span>
              </h2>
            </form>
            {
              registerError && <p className='text-red-700 m-8'>{registerError}</p>
            }
            <h2 className="text-center">OR</h2>
              <button className="btn btn-accent"><FaGoogle></FaGoogle>SignIn with Google</button>
          </div>
        </div>
      </div>
      <ToastContainer />
        </div>
    );
};

Register.propTypes = {
    
};

export default Register;