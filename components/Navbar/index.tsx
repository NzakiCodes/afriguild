import Image from "next/image";
import React from "react";
import NavLink from "../NavLink";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="home-links-search-section">
        <div className="logo">
          <Image
            src={"/images/logo-afriguild.svg"}
            layout="intrinsic"
            width={214}
            height={40}
            alt="Afriguild"
          />
        </div>
        <div className="nav-links">
          <NavLink isActive={false} link="/" text="Home" />
          <NavLink isActive={false} link="/" text="Games" />
          <NavLink isActive={true} link="/" text="Leaderboard" />
        </div>
        <div className="search-container">
            <input placeholder="Find a tournament" type="text" name="searh" id="search" />
        </div>
        <div>
            
        </div>
      </div>
    </nav>
  );
}



export default Navbar;
