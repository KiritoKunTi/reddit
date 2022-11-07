import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import LeftSideImage from "../assets/leftSide.png";
import GoogleButton from "./GoogleButton";
import HOR from "./HOR";
import { Link } from "react-router-dom";

const style = {
  overlay: `w-screen h-screen bg-white flex box-border`,
  leftSide: `max-w-[200px] h-full`,
  leftImage: `h-full object-cover object-left`,
  form: ``,
  container: `bg-white w-full h-full`,
  popup: `flex flex-col justify-center h-full w-[425px] p-8`,
  heading: `text-2xl font-medium mb-2`,
  subtitle: `mb-12`,
  link: `text-blue-700`,
  button: `bg-blue-600 text-white font-medium text-[20px] w-full p-2 rounded hover:bg-blue-500`,
  emailInput: `border hover:border-gray-400 rounded text-sm font-bold p-4 w-full mb-6 active:border-blue-700 outline-none`,
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
      <div className={style.leftSide}>
        <img className={style.leftImage} src={LeftSideImage} alt="" />
      </div>

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
              placeholder="EMAIL"
            />
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className={style.emailInput}
              placeholder="PASSWORD"
            />
            <button className={style.button}>Log In</button>
          </form>
          <Link to="/signup">
            <p className="mt-5">
              New to Reddit? <p className={style.switch}>Sign Up</p>
            </p>
          </Link>
          <p className="bg-red-300">{error}</p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
