"use client";
import "./loginPage.css";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "../components/Logo";

export default function page() {
  const error = useSearchParams().get("error");
  const [isLoginPage, setIsLoginPage] = useState(true);
  useEffect(() => {
    if (error) {
      alert("Error: ", error);
    }
  }, [error]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    signIn("credentials", {
      callbackUrl: "/dashboard",
      username,
      password,
      type: isLoginPage ? "login" : "register",
    })
      .then(() => {
        console.log("signed in");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div
      className="fccc w-full h-full pi30"
      style={{ backgroundColor: "transparent" }}
    >
      <Logo
        fontSize={40}
        style={{
          position: "absolute",
          top: 50,
        }}
      />
      <div className="loginbox fcc">
        <h2
          style={{
            fontSize: 24,
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          {isLoginPage ? "Login" : "Register"}
        </h2>
        <div className="flex flex-col">
          <input
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="email"
            name=""
            placeholder="Email ID"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            name=""
            placeholder="Password"
          />
          <button type="button" id="signIn" onClick={handleClick}>
            {isLoginPage ? "Log In" : "Register"}
          </button>
          <button
            id="signUp"
            className="mt-5"
            onClick={() => {
              setIsLoginPage(!isLoginPage);
            }}
          >
            {isLoginPage
              ? "Create new acount? Register"
              : "Already Registered? Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
