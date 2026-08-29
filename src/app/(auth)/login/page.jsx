"use client";

import { useRouter } from "next/navigation";
import React from "react";

function loginUser() {
  return true;
}

const Login = () => {
  const router = useRouter();

  const handleLogin = async () => {
    const response = await loginUser();
    if (response) {
      console.log("Transfer");
      router.push("/");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
