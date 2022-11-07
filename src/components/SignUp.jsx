import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import validator from "validator";
import { Link } from "react-router-dom";
import LeftSideImage from "../assets/leftSide.png";

import GoogleButton from "./GoogleButton";
import HOR from "./HOR";

const style = {
  overlay: `w-screen h-screen bg-white flex box-border`,
  leftSide: `max-w-[200px] h-full`,
  leftImage: `h-full object-cover object-left`,
  form: ``,
  container: `bg-white w-full h-full h-[83vh]`,
  popup: `flex flex-col justify-center h-full w-[400px] p-8`,
  heading: `text-2xl font-medium mb-2`,
  subtitle: `mb-12`,
  link: `text-blue-700`,
  emailInput: `border hover:border-gray-400 rounded text-sm font-bold p-4 w-full mb-6 active:border-blue-700 outline-none`,
  button: `bg-blue-600 text-white font-medium text-[20px] rounded hover:bg-blue-500 w-full p-2`,
  switch: `text-blue-600 underline underline-offset-1 inline cursor-pointer font-bold`,
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { user, signUp } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
    } catch (err) {
      setError(err);
      console.log("catching error");
    }
    console.log("error");
  };

  return (
    <div className={style.overlay}>
      <div className={style.leftSide}>
        <img className={style.leftImage} src={LeftSideImage} alt="" />
      </div>

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

          <GoogleButton onClick={null} />
          <HOR />
          <form onSubmit={handleSubmit} className={style.form}>
            <input
              type="email"
              onChange={(e) => {
                var email = e.target.value;
                setEmail(e.target.value);

                // if (validator.isEmail(email)) {
                //   setEmail(e.target.value);
                //   setError("");
                // } else {
                //   setError("Enter valid Email!");
                // }
              }}
              className={style.emailInput}
              placeholder="EMAIL"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={style.emailInput}
              placeholder="PASSWORD"
            />
            <button className={style.button}>Continue</button>
          </form>
          <Link to="/login">
            <p className="mt-5">
              Already a redditor? <p className={style.switch}>Log In</p>
            </p>
          </Link>
          {error ? (
            <p className="p-4 w-full bg-red-400 mt-3 rounded text-red-900">
              {error}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
