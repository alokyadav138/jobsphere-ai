import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <nav className="navbar">
      <div className="navContainer">

        <Link to="/" className="logo">
          Job<span>Sphere AI</span>
        </Link>

        <ul className={show ? "navLinks active" : "navLinks"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/job/getall">Jobs</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        <div className="menuIcon" onClick={() => setShow(!show)}>
          {show ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;