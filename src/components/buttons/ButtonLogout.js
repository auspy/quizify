"use client";
import { signOut } from "next-auth/react";
const ButtonLogout = () => {
  const handleCLick = () => {
    signOut();
  };
  return (
    <button id="logout" onClick={handleCLick}>
      Logout
    </button>
  );
};

export default ButtonLogout;
