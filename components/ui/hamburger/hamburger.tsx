import React from "react";
import { GrMenu } from "react-icons/gr";
import { HiMenuAlt2 } from "react-icons/hi";

function Hamburger({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="text-4xl text-red900">
      {isOpen ? <HiMenuAlt2 /> : <GrMenu />}
    </div>
  );
}

export default Hamburger;
