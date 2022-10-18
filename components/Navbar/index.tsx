import Image from "next/image";
import Link from "next/link";
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
          <input
            placeholder="Find a tournament"
            type="text"
            name="searh"
            id="search"
          />
        </div>
      </div>
      <div className="my-area">
        <div className="wallet-notification">
          <NavLink link="/wallet" isActive={false} text={"My Wallet"} />
          <Link href={"/"}>
            <a className="notification-icon">
              <svg
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.39046 11.125C4.38943 10.3837 4.53511 9.64959 4.81912 8.96491C5.10313 8.28024 5.51984 7.65854 6.04524 7.13567C6.57064 6.61279 7.19433 6.19907 7.88036 5.91837C8.5664 5.63766 9.30121 5.49551 10.0424 5.50011C13.1354 5.5231 15.6094 8.09396 15.6094 11.1956V11.75C15.6094 14.548 16.1948 16.1717 16.7104 17.0592C16.7659 17.154 16.7955 17.2618 16.7961 17.3717C16.7966 17.4816 16.7682 17.5897 16.7137 17.6851C16.6592 17.7805 16.5805 17.8599 16.4855 17.9151C16.3905 17.9704 16.2826 17.9997 16.1727 18H3.82645C3.71654 17.9997 3.60865 17.9704 3.51367 17.9151C3.41868 17.8598 3.33996 17.7805 3.28544 17.685C3.23092 17.5896 3.20253 17.4815 3.20313 17.3716C3.20374 17.2617 3.23332 17.1539 3.28889 17.059C3.80478 16.1716 4.39046 14.5479 4.39046 11.75L4.39046 11.125Z"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.5 18V18.625C7.5 19.288 7.76339 19.9239 8.23223 20.3928C8.70107 20.8616 9.33696 21.125 10 21.125C10.663 21.125 11.2989 20.8616 11.7678 20.3928C12.2366 19.9239 12.5 19.288 12.5 18.625V18"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 14C18.866 14 22 10.866 22 7C22 3.13401 18.866 0 15 0C11.134 0 8 3.13401 8 7C8 10.866 11.134 14 15 14Z"
                  fill="#FF0000"
                />
                <path
                  d="M14.9474 8.05966C14.6463 8.05966 14.3778 8.00426 14.142 7.89347C13.9077 7.78267 13.7216 7.62997 13.5838 7.43537C13.446 7.24077 13.3743 7.01776 13.3686 6.76634H14.2635C14.2734 6.93537 14.3445 7.07244 14.4766 7.17756C14.6087 7.28267 14.7656 7.33523 14.9474 7.33523C15.0923 7.33523 15.2202 7.30327 15.331 7.23935C15.4432 7.17401 15.5305 7.08381 15.593 6.96875C15.657 6.85227 15.6889 6.71875 15.6889 6.56818C15.6889 6.41477 15.6563 6.27983 15.5909 6.16335C15.527 6.04687 15.4382 5.95597 15.3246 5.89062C15.2109 5.82528 15.081 5.7919 14.9347 5.79048C14.8068 5.79048 14.6825 5.81676 14.5618 5.86932C14.4425 5.92187 14.3494 5.99361 14.2827 6.08452L13.4624 5.9375L13.669 3.63636H16.3366V4.39062H14.4297L14.3168 5.48366H14.3423C14.419 5.37571 14.5348 5.28622 14.6896 5.2152C14.8445 5.14418 15.0178 5.10866 15.2095 5.10866C15.4723 5.10866 15.7067 5.17045 15.9126 5.29403C16.1186 5.41761 16.2812 5.58736 16.4006 5.80327C16.5199 6.01776 16.5788 6.26491 16.5774 6.54474C16.5788 6.83878 16.5107 7.10014 16.3729 7.32884C16.2365 7.55611 16.0455 7.73509 15.7997 7.86577C15.5554 7.99503 15.2713 8.05966 14.9474 8.05966Z"
                  fill="white"
                />
              </svg>
            </a>
          </Link>
        </div>
        <div className="profile">
          <Image src={"/images/me.png"} height={48} width={48} alt="avatar" />
          <button className="profile-button">
            <span>stanleywest </span>
            <svg
              width="14"
              height="9"
              viewBox="0 0 14 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.07422 1.5L7.07422 7.5L13.0742 1.5"
                stroke="white"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
