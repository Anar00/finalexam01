import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav-contanier">
        <div className="nav-header">
          <div className="nav-hearder-left">
            <img src="http://htmlbeans.com/html/swan/images/logo.png" alt="" />
          </div>
          <div className="nav-hearder-right">
            <div className="contact-us">
              <div className="contact-left">
                Contact US :<p>Mail@Example.com </p>
              </div>
            </div>
            <i class="fa-solid fa-envelope"></i>
            <div className="call-us">
              <div className="call-right">
                CallUs :<p>+201093515252 </p>
              </div>
            </div>
            <i class="fa-solid fa-phone"></i>
          </div>
        </div>
        <nav className="nav">
          <div className="nav-left">
            <ul>
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              <li>
                <Link className="link" to="/add">Add</Link>
              </li>
              <li> Our Services</li>
              <li>Pricing Table</li>
              <li> Contact Us</li>
            </ul>
          </div>
          <div className="nav-right">
            <button>GET A QUOTE</button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
