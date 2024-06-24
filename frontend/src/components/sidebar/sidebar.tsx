"use client";

import React, { useEffect, useState } from "react";
import { getUserDetails } from "@/lib/api";
import { UserDetailsFC } from "@/lib/api";

export default function Sidebar(params: {
  isOpen: boolean;
  user: UserDetailsFC | null | undefined;
}) {
  return (
    <div
      className={
        params.isOpen
          ? "sidebar md:w-72 w-screen flex"
          : "sidebar md:w-72 w-screen hidden"
      }
    >
      {params.user && (
        <a href="" className="capitalize">
          Hello {params.user.username}
        </a>
      )}
      <a href="">Become a partner</a>
      <a href="">Contact US</a>
      <a href="">Social Media</a>
    </div>
  );
}
