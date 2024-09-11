"use client";

import { useState } from "react";
import React from "react";
import { useRouter } from "next/navigation";
import { RegisterPostData } from "@/helpers/auth";
import { register } from "@/helpers/auth";

const RegisterForm = () => {
  const router = useRouter();

  const [user, setUser] = useState<RegisterPostData>({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });

  const [error, setError] = useState<string | null>(null);

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (user.password1 !== user.password2) {
      setError("Passwords do not match");
      return;
    }

    const res = await register(user);
    if (res) {
      router.push("/login");
    } else {
      router.push("/register-error");
    }
  };

  return (
    <div className="grid gap-8">
      <div className="bg-gradient-to-r from-sky-600 to-orange-400 dark:bg-opacity-50 bg-opacity-50 rounded-[26px] m-4">
        <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white dark:bg-opacity-70 bg-opacity-50 shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
          <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
            Sign Up
          </h1>
          {error && (
            <div className="text-red-500 text-center mb-4">{error}</div>
          )}
          <form onSubmit={onRegister} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="mb-2 dark:text-gray-400 text-lg"
              >
                User Name
              </label>
              <input
                id="username"
                className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="text"
                placeholder="User Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 dark:text-gray-400 text-lg"
              >
                Email
              </label>
              <input
                id="email"
                className="border p-3 dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="email"
                placeholder="Email"
                required
                value={user.email}
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                    username: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="password1"
                className="mb-2 dark:text-gray-400 text-lg"
              >
                Enter a Password
              </label>
              <input
                id="password1"
                className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
                required
                value={user.password1}
                onChange={(e) => {
                  setUser({
                    ...user,
                    password1: e.target.value,
                  });
                }}
              />
            </div>
            <div>
              <label
                htmlFor="password2"
                className="mb-2 dark:text-gray-400 text-lg"
              >
                Re-enter the Password
              </label>
              <input
                id="password2"
                className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
                type="password"
                placeholder="Password"
                required
                value={user.password2}
                onChange={(e) => {
                  setUser({
                    ...user,
                    password2: e.target.value,
                  });
                }}
              />
            </div>
            <button
              className="bg-gradient-to-r dark:text-gray-300 from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div
            id="third-party-auth"
            className="flex items-center justify-center mt-5 flex-wrap"
          >
            <button className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1">
              <img
                className="max-w-[25px]"
                src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                alt="Google"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
