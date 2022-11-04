import React, { useState } from "react";
import GoogleButton from "./GoogleButton";
import { GrClose } from "react-icons/gr";
import HOR from "./HOR";

const style = {
  overlay: `absolute top-0 left-0 w-screen h-screen`,
  closeBtn: `absolute top-6 right-6`,
  button: `bg-[#d93a00] text-white font-medium text-[20px] py-3 rounded-full hover:bg-[#d82a00]`,
  container: `absolute bg-white w-[500px] h-[83vh] rounded-3xl p-20 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] `,
  popup: `flex flex-col justify-center w-full h-full`,
  heading: `text-2xl font-medium mb-2`,
  subtitle: `mb-12`,
  link: `text-blue-700`,
  emailInput: `px-5 py-4 border hover:border-gray-400 rounded-full text-lg font-medium bg-gray-100 mb-6 active:border-blue-700 outline-none`,
};

const SignUp = ({ show, close }) => {
  if (!show) return null;

  return (
    <div onClick={close} className={style.overlay}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={style.container}
      >
        <GrClose size={20} className={style.closeBtn} onClick={close} />
        <div className={style.popup}>
          <h2 className={style.heading}>Sign Up</h2>
          <p className={style.subtitle}>
            By continuing, you are setting up a Reddit account and agree to our{" "}
            <a
              className={style.link}
              href="https://www.redditinc.com/policies/user-agreement"
            >
              User Agreement
            </a>{" "}
            and{" "}
            <a
              className={style.link}
              href="https://www.reddit.com/policies/privacy-policy"
            >
              Privacy Policy
            </a>
            .
          </p>

          <GoogleButton onClick={null} />
          <HOR />
          <input className={style.emailInput} placeholder="Email" />
          <button className={style.button}>Continue</button>
          <p className="mt-5">
            Already a redditor?{" "}
            <span className="text-blue-600 underline-offset-1">Log In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
