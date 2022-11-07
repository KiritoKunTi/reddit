import React, { useState } from "react";
import Logo from "../assets/reddit-logo-new.svg";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { Link } from "react-router-dom";

import { UserAuth } from "../context/AuthContext";
import { SlLogout } from "react-icons/sl";
import { GiRamProfile } from "react-icons/gi";
import { FiChevronDown } from "react-icons/fi";

const style = {
  container: `w-full h-fit flex justify-between items-center bg-[#272729] px-8 py-1 border-b-2 border-b-[#343536]`,
  logo: `w-[130px] cursor-pointer`,
  block: ``,
  button: `text-xl font-medium min-w-[140px] px-[15px] py-[7px] border rounded-full my-2`,
  singUp: `text-white  hover:bg-zinc-900 mr-6`,
  logIn: `text-black-600 bg-slate-300 hover:bg-slate-400`,
  dropdown: `inline-block relative group w-[230px] border border-[#343536] p-4`,
  dropdownOptions: `hidden absolute overflow-auto group-hover:block`,
  inOption: `flex items-center gap-2 bg-[#272729] min-w-[180px] max-w-[190px] p-4 text-white text-lg border border-[#343536] rounded cursor-pointer`,
  profileMenu: `flex items-center justify-center gap-2 text-white`,
};

const Header = () => {
  const { user, logOut } = UserAuth();

  console.log(user);

  return (
    <div className={style.container}>
      <img className={style.logo} src={Logo} alt="reddit" />
      <div className={style.block}>
        {!user ? (
          <div>
            <Link to="/signup">
              <button className={`${style.button} ${style.singUp}`}>
                Sign Up
              </button>
            </Link>
            <Link to="/login">
              <button className={`${style.button} ${style.logIn}`}>
                Log In
              </button>
            </Link>
          </div>
        ) : (
          <div className={style.dropdown}>
            <button className={style.profileMenu}>
              <GiRamProfile size={25} color="gold" /> {user?.email}
              <FiChevronDown
                size={25}
                color="gray"
                className="absolute right-2"
              />
            </button>
            <div className={style.dropdownOptions}>
              <div onClick={logOut} className={style.inOption}>
                <SlLogout color="white" size={20} />
                <span>Log Out</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
