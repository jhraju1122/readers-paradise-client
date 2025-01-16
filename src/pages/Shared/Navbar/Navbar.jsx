import { Link } from "react-router-dom";
import logo from '../../../assets/img/logo-library.jpg'
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
 
 
const Navbar = () => {
 const {user, logOut} = useContext(AuthContext);
  
  const handleLogOut = () =>{
  logOut()
  .then(() =>{})
  .catch(error => console.log(error));
  }


    const navOptions = <>
     <Link className="mr-4"><a>Home</a></Link>
    <Link  className="mr-4"><a> All Books</a></Link>
    <Link><a className="mr-4">Borrowed Books</a></Link>
    <Link to='/addbooks' className="mr-4"><a> Add Book</a></Link>
    {
      user ? <>
      <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
      </> : <>
            <li> <Link to='/login'>Login</Link></li>
            </>
    }
    </>
    return (
        <>
           <div className="navbar bg-base-100 z-10 bg-opacity-30 bg-black text-white font-semibold">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-xl">
       {navOptions}

      </ul>
    </div>
    <button className="btn btn-ghost text-xl">Reader's Paradise <span><img className="w-[50px] h-[40px]" src={logo} alt="" /></span></button>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1  text-xl">
      {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link>
          <a className="justify-between text-black">
            Profile
            <span className="badge">New</span>
          </a>
        </Link>
        <Link><a className="text-black">Settings</a></Link>
        <Link><a className="text-black">Logout</a></Link>
        <Link className="text-black" to='/register'><a>Register</a></Link>
      </ul>
    </div>
  
  </div>
</div> 
        </>
    );
};

export default Navbar;