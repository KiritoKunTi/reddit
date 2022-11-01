import React from "react";
import Logo from "../assets/reddit-logo-new.svg";

const style = {
  container: `w-full h-fit flex justify-between items-center bg-[#272729] px-8 py-2 border-b-2 border-b-[#343536]`,
  logo: `w-[130px]`,
  block: ``,
  button: `text-xl font-medium min-w-[160px] px-6 py-2 border rounded-full`,
  singUp: `text-white hover:bg-zinc-900 mr-6`,
  logIn: `text-black-600 bg-slate-300 hover:bg-slate-400`,
};

const Header = () => {
  return (
    <div className={style.container}>
      <img className={style.logo} src={Logo} alt="reddit" />
      <div className={style.block}>
        <button className={`${style.button} ${style.singUp}`}>Sign Up</button>
        <button className={`${style.button} ${style.logIn}`}>Log In</button>
      </div>
    </div>
  );
};

export default Header;
