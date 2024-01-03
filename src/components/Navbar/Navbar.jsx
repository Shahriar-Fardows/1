import  { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

const Navbar = () => {
  const { user, googleUser, logOut } = useContext(AuthContext);
  console.log(googleUser);
  const handleSignOut = () => {
    logOut();
  };

  const links = (
    <>
      <li className="mr-2">
        <NavLink className='text-green-500'  to="/">Home</NavLink>
      </li>
      <li className="mr-2">
        <NavLink  className='text-green-500' to="/about">About</NavLink>
      </li>
      <li className="mr-2">
        <NavLink className='text-green-500' to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 sticky top-0 z-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <button className="text-2xl  text-green-500 rounded p-2 ml-[30px] ">
          <Link to="/">Real Estate Events</Link>
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {googleUser && (
          <img className="w-[50px]" src={googleUser.photoURL} alt="" />
        )}

        {googleUser && (
          <button className="btn text-green-500 mr-[30px]">
            {googleUser.displayName}
          </button>
        )}

        {user ? (
          
            <button
              onClick={handleSignOut}
              className="btn  mr-[30px] text-green-500"
            >
              Sign Out
            </button>
          
        ) : (
          <Link  to="/login">
            <button className="btn text-green-500 mr-[30px]">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
