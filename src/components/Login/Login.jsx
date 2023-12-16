import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import { checkValidateData } from "../../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => setIsSignInForm(!isSignInForm);

  const handleSubmit = () => {
    const isError = checkValidateData(
      email.current.value,
      password.current.value
    );
    if (isError) setErrorMessage(isError);
  };

  return (
    <div className="text-[#777]">
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover brightness-[45%] fixed inset-0 -z-10 "></div>
      <Header />
      <div className="flex items-center justify-center mt-5 ">
        <div className="flex flex-col bg-[rgb(0,0,0,0.75)] p-[70px] rounded-md w-[37%] min-w-[300px]">
          <h2 className="text-3xl text-white font-semibold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Username"
              className="py-[12px] px-[20px]  bg-[#333] rounded mt-10 -mb-5"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="py-[12px] px-[20px]  bg-[#333] rounded mt-10"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="py-[12px] px-[20px]  bg-[#333] rounded mt-5"
          />
          <button
            className="py-[12px] px-[20px]  bg-[#e50814] text-white rounded mt-10 font-semibold"
            onClick={handleSubmit}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center text-[12px] text-red-600 mt-2">
            {errorMessage}
          </p>

          <p
            className="mt-20 text-[14px] cursor-pointer"
            onClick={toggleSignIn}
          >
            New to Netflix?{" "}
            <span className="text-[15px] text-white ">
              {!isSignInForm ? "Sign In" : "Sign Up"} now
            </span>
          </p>
          <p className="mt-2 text-[14px]">
            Sign in is protected by Google reCAPTCHA to ensure you’re not a bot.{" "}
            <span className="text-[15px] text-[royalblue] cursor-pointer">
              Learn more
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
