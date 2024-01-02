import React, { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { logo, user_avatar } from "../../utils/constants";
import { toggleGptSearchView } from "../../utils/gptSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [profileBtn, setProfileBtn] = useState(false);

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (response) => {
      if (response) {
        const { uid, email, displayName, photoURL } = response;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscibe();
    };
  }, []);

  const handleGptSearch = () => {};

  return (
    <div className="px-8 py-2 flex items-center fixed left-0 right-0 top-0 z-10">
      <img src={logo} alt="Netflix-Logo" className="h-[80px]" />

      {user && (
        <div className="flex ml-auto gap-2 items-center">
          <button
            className="text-white px-[20px] py-[10px] bg-purple-900 hover:bg-purple-950 duration-200 rounded-md font-bold"
            onClick={() => dispatch(toggleGptSearchView())}
          >
            GPT Search
          </button>

          <div className="relative ">
            <img
              src={user.photoURL}
              alt="user-icon"
              className="h-[50px] cursor-pointer"
              onClick={() => setProfileBtn(!profileBtn)}
            />
            {profileBtn && (
              <div className=" py-[10px] absolute bg-white right-0 top-[110%] rounded flex flex-col w-[150px] gap-[8px] items-center">
                <p className=" font-bold  border-[#111] border-b-[1px]">
                  {user.displayName}
                </p>

                <p
                  className=" font-semibold hover:bg-[#111] hover:text-white w-full cursor-pointer text-center py-2"
                  onClick={handleSignOut}
                >
                  Sign Out
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
