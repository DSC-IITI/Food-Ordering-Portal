import React, { useEffect, useState } from "react";
import Link from "next/link";
import { isAuthenticated, logout } from "@/lib/auth";

export default function Navbar(params: { toggleSidebar: () => void }) {
  var [isLoggedIn, updateIsLoggedIn] = useState(false);
  useEffect(() => {
    updateIsLoggedIn(isAuthenticated());
  }, []);
  return (
    <nav className="navbar md:h-[8vh] md:justify-between justify-center">
      <Link href="/">
        <h1 className="mx-4 my-4 text-xl font-bold">Food Order</h1>
      </Link>
      <div className="navbar__links md:gap-12 justify-between md:w-auto w-screen px-4 py-4 md:px-8">
        <a href="/about">
          <img src="" alt="" /> Search
        </a>
        <a href="/menu">
          <img src="discount.png" alt="" style={{ width: "20px" }} /> Offers
        </a>
        {isLoggedIn ? (
          <Link href="/" onClick={logout}>
            Sign Out
          </Link>
        ) : (
          <>
            <Link href="/login">
              <img style={{ width: "20px" }} src="user.png" alt="" /> Sign In
            </Link>
            <Link href="/register">Sign Up</Link>
          </>
        )}

        <button onClick={params.toggleSidebar}>
          <img src="menu.svg" alt="" style={{ width: "20px" }} />
        </button>
      </div>
    </nav>
  );
}
