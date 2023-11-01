"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function page() {
  const error = useSearchParams().get("error");
  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = () => {
    signIn("credentials", { callbackUrl: "/auth", username, password })
      .then(() => {
        console.log("signed in");
      })
      .catch((e) => {
        console.log("error", e);
      });
  };
  return (
    <div className="loginbox">
      <h2>
        <br />
        Members Login
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
          Log In
        </button>
        <button id="signUp">Create new acount? Register Here</button>
      </div>
    </div>
  );
}
