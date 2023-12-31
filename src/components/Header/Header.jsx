import React, { useEffect } from "react";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/userSlice";
import { logo, user_avatar } from "../../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

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

  return (
    <div className="px-8 py-2 flex items-center absolute left-0 right-0 top-0 z-10">
      <img src={logo} alt="Netflix-Logo" className="h-[80px]" />
      {user && (
        <div className="flex ml-auto gap-2 items-center">
          <p className="text-white font-bold ">{user.displayName}</p>
          <img src={user.photoURL} alt="user-icon" className="h-[50px]" />
          <button
            className="bg-blue-500 px-5 py-2 text-white font-bold"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
