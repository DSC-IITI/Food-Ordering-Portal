import React from "react";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="flex md:h-[92vh] h-full justify-center items-center bg-gradient-to-r from-sky-500 to-orange-300">
      <div className="lg:w-1/3 w-[90vh]">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
