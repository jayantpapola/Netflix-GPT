import React, { useRef, useState } from "react";
import Header from "../Header/Header";
import { checkValidateData } from "../../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/userSlice";
import { user_avatar } from "../../utils/constants";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIn = () => setIsSignInForm(!isSignInForm);

  const handleSubmit = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;
    if (isSignInForm) {
      // Sign In Login
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    } else {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: user_avatar,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  };

  return (
    <div className="text-[#777]">
      <div className="bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/ca6a7616-0acb-4bc5-be25-c4deef0419a7/c5af601a-6657-4531-8f82-22e629a3795e/IN-en-20231211-popsignuptwoweeks-perspective_alpha_website_large.jpg')] bg-cover brightness-[45%] fixed inset-0 -z-10 "></div>
      <Header />
      <div className="flex items-center justify-center mt-28 ">
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
