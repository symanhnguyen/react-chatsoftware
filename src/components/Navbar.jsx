import React from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut.jsx";

const style = {
  nav: `rounded bg-green-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white font-bold text-3xl`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat now!</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
