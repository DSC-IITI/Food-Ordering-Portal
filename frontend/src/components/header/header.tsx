"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/Navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
    </header>
  );
}
