"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { UserDetailsFC } from "@/helpers/auth";
import { getUserDetails } from "@/helpers/auth";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [user, setUser] = useState<UserDetailsFC | null>(null);
  useEffect(() => {
    const updateUser = async () => {
      const u1 = await getUserDetails();
      setUser(u1);
    };
    updateUser();
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <Navbar toggleSidebar={toggleSidebar} loggedIn={user?.username} />
      <Sidebar isOpen={isSidebarOpen} user={user} />
    </header>
  );
}
