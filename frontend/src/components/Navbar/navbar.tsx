import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="bg-blue-400 px-4 py-4">
        <div className="float-left">LOGO</div>
        <div className="flex justify-end gap-8">
          <div>Home</div>
          <div>Restaurents</div>
          <div>Profile</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
