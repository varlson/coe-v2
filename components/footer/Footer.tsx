import React from "react";
import { ComercialTime, Location, MediaSocial } from "../ui/footerUtil/Util";

function Footer() {
  return (
    <div id="footer" className="font-Jura text-white py-10 bg-dblack900">
      <div className="px-3 text-sm  lg:justify-between md:w-9/12 grid md:grid-cols-2 lg:grid-cols-3 m-auto">
        <Location />
        <MediaSocial />
        <ComercialTime />
      </div>
    </div>
  );
}

export default Footer;
