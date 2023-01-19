import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import {GrFormClose } from "react-icons/gr";
import logo from "../../Images/IndiGo-Logo.png";
import "./Navigation.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [close ,setClose]=useState(true)
  


  const handleOpen=()=>{
    setOpen(!open)
  
  }
  const handleClose=()=>{
    setClose(!close)
    
  }
  
  return (
    <div className="nav-bar">
      <nav>
        <div>
          <button onClick={() => setOpen(handleOpen)}>
            <RxHamburgerMenu />
          </button>
          <button onclick="window.location.href = '#';">
            <img src={logo} alt="" />
          </button>
        </div>

        <>
          <ul>
            <li>Book</li>
            <li>Check-in</li>
            <li>Manage</li>
            <li>6E Rewards</li>
            <li>Info</li>
            <li>Login</li>
          </ul>
        </>
      </nav>

      {(open&&close) && (
        <div className="ham-menu-sec">
          <div className="menu">
            <div className="login-sec">
                <div>
                    <button type="button" onClick={handleClose}><GrFormClose/></button>
                </div>

                <button>Login/Singup</button>

            </div>
            <div>

            </div>
  

          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
