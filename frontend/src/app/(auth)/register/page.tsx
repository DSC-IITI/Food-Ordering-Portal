import React from "react";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex md:h-[100vh] h-full justify-center items-center bg-gradient-to-r from-sky-500 to-orange-300">
      <div className="lg:w-1/3 w-[90vh]">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;
