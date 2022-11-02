import React, { useState } from "react";
import { auth } from "../firebase";
import { SignUpWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from "./GoogleButton";

const style = {
  button: `text-xl font-medium min-w-[160px] px-6 py-2 border rounded-full text-white  hover:bg-zinc-900 mr-6`,
  container: `absolute bg-white w-[500px] h-[83vh] rounded-3xl p-20 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] `,
  popup: `flex flex-col justify-center w-full h-full`,
  heading: `text-2xl font-medium mb-2`,
  subtitle: `mb-12`,
  link: `text-blue-700`,
};

const SignUp = () => {
  return (
    <div className={style.container}>
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

        <GoogleButton />
      </div>
    </div>
  );
};

export default SignUp;
