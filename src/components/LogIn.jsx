import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";

import GoogleButton from "./GoogleButton";
import HOR from "./HOR";

const style = {
  overlay: `absolute top-0 left-0 w-screen h-screen`,
  form: ``,
  closeBtn: `absolute top-6 right-6`,
  button: `bg-[#d93a00] text-white font-medium text-[20px] py-3 w-full rounded-full hover:bg-[#d82a00]`,
  container: `absolute bg-white w-[500px] h-[83vh] rounded-3xl p-20 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] `,
  popup: `flex flex-col justify-center w-full h-full`,
  heading: `text-2xl font-medium mb-2`,
  subtitle: `mb-12`,
  link: `text-blue-700`,
  emailInput: `px-5 py-4 border hover:border-gray-400 rounded-full text-lg font-medium bg-gray-100 mb-6 active:border-blue-700 outline-none`,
  switch: `text-blue-600 underline underline-offset-1 inline cursor-pointer font-bold ml-1`,
};

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, logIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={style.overlay}>
      <div className={style.container}>
        <div className={style.popup}>
          <h2 className={style.heading}>Log In</h2>
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
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className={style.emailInput}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={style.emailInput}
              placeholder="Password"
            />
            <button className={style.button}>Log In</button>
          </form>
          <p className="mt-5">
            New to Reddit? <p className={style.switch}>Sign Up</p>
          </p>
          <p className="bg-red-300">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
