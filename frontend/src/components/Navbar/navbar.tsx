"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="bg-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              IITI Foodie
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                href="/"
                className="hover:bg-orange-600 px-3 py-2 rounded-md"
              >
                Home
              </Link>
              <Link
                href="/menu"
                className="hover:bg-orange-600 px-3 py-2 rounded-md"
              >
                Menu
              </Link>
              <Link
                href="/about"
                className="hover:bg-orange-600 px-3 py-2 rounded-md"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="hover:bg-orange-600 px-3 py-2 rounded-md"
              >
                Contact
              </Link>
              {!isLoggedIn ? (
                <>
                  <Button
                    variant="outline"
                    className="text-black hover:text-white bg-opacity-50 border-white hover:bg-orange-600"
                    onClick={handleLogin}
                  >
                    Login
                  </Button>
                  <Button
                    variant="outline"
                    className="text-black hover:text-white bg-opacity-50 border-white hover:bg-orange-600"
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <Button
                  variant="outline"
                  className="text-black hover:text-white bg-opacity-50 border-white hover:bg-orange-600"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-white"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="hover:bg-orange-600 block px-3 py-2 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="hover:bg-orange-600 block px-3 py-2 rounded-md"
            >
              Menu
            </Link>
            <Link
              href="/about"
              className="hover:bg-orange-600 block px-3 py-2 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:bg-orange-600 block px-3 py-2 rounded-md"
            >
              Contact
            </Link>
            {!isLoggedIn ? (
              <>
                <Button
                  variant="outline"
                  className="text-black hover:text-white border-white hover:bg-orange-600 bg-opacity-50 w-full mt-2"
                  onClick={handleLogin}
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="text-black hover:text-white border-white hover:bg-orange-600 bg-opacity-50 w-full mt-2"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <Button
                variant="outline"
                className="text-black hover:text-white border-white hover:bg-orange-600 bg-opacity-50 w-full mt-2"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
