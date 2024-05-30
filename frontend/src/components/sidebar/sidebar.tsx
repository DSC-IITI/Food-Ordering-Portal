"use client";

import React from "react";

export default function Sidebar(params: { isOpen: boolean }) {
  return (
    <div
      className={
        params.isOpen
          ? "sidebar md:w-72 w-screen flex"
          : "sidebar md:w-72 w-screen hidden"
      }
    >
      <a href="">Become a partner</a>
      <a href="">Contact US</a>
      <a href="">Social Media</a>
    </div>
  );
}
