import Link from "next/link";
import React, { MouseEvent, useState } from "react";
import Icon from "../ui/icons/Icon";
import { IconTypes } from "@/types/types";

function RightSide() {
  const [item, setItem] = useState({
    reports: false,
    tcc: false,
    resolutions: false,
    atvs: false,
  });
  const clickHandle = (id: string) => {
    const elem = document.getElementById(id) as HTMLLIElement;
    if (!elem.style.maxHeight || elem.style.maxHeight == "0px") {
      elem.style.maxHeight = elem.scrollHeight + "px";
      setItem({ ...item, [id]: true });
    } else {
      setItem({ ...item, [id]: false });
      elem.style.maxHeight = "0px";
    }
  };

  return (
    <div className=" px-5 text-center font-play_fair py-2 ">
      <ul className="flex flex-col justify-center">
        <li className="w-24 rounded cursor-pointer min-h-12 flex flex-col items-center justify-center bg-black text-white my-1 p-">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => clickHandle("reports")}
          >
            <p>Editais</p>
            <Icon
              styles={` ${
                item.reports ? "expand-collapse-in" : "expand-collapse-out"
              } h-4 w-6`}
              src={item.reports ? "collapse" : "expand"}
              iconType={IconTypes.DefaultIcon}
            />
          </div>
          <ul
            id="reports"
            className=" bg-darkLight  w-full text-black sub-item transition-all duration-100"
          >
            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-1</Link>
            </li>

            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-2</Link>
            </li>

            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-3</Link>
            </li>
          </ul>
        </li>
        <li className="w-24 rounded cursor-pointer min-h-12 flex flex-col items-center justify-center bg-black text-white my-1 p-">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => clickHandle("tcc")}
          >
            <p>TCC</p>
            <Icon
              styles={` ${
                item.tcc ? "expand-collapse-in" : "expand-collapse-out"
              } h-4 w-6`}
              src={item.tcc ? "collapse" : "expand"}
              iconType={IconTypes.DefaultIcon}
            />
          </div>
          <ul
            id="tcc"
            className=" bg-darkLight  w-full text-black sub-item transition-all duration-100"
          >
            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-1</Link>
            </li>

            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-2</Link>
            </li>

            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-3</Link>
            </li>
          </ul>
        </li>
        <li className="w-24 rounded cursor-pointer min-h-12 flex flex-col items-center justify-center bg-black text-white my-1 p-">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => clickHandle("resolutions")}
          >
            <p>Resoluções</p>
            <Icon
              styles={` ${
                item.resolutions ? "expand-collapse-in" : "expand-collapse-out"
              } h-4 w-6`}
              src={item.resolutions ? "collapse" : "expand"}
              iconType={IconTypes.DefaultIcon}
            />
          </div>
          <ul
            id="resolutions"
            className=" bg-darkLight  w-full text-black sub-item transition-all duration-100"
          >
            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-1</Link>
            </li>

            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-2</Link>
            </li>

            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-3</Link>
            </li>
          </ul>
        </li>
        <li className="w-24 rounded cursor-pointer min-h-12 flex flex-col items-center justify-center bg-black text-white my-1 p-">
          <div
            className="flex flex-col justify-center items-center"
            onClick={() => clickHandle("atvs")}
          >
            <p>ATVs</p>
            <Icon
              styles={` ${
                item.atvs ? "expand-collapse-in" : "expand-collapse-out"
              } h-4 w-6`}
              src={item.atvs ? "collapse" : "expand"}
              iconType={IconTypes.DefaultIcon}
            />
          </div>
          <ul
            id="atvs"
            className=" bg-darkLight  w-full text-black sub-item transition-all duration-100"
          >
            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-1</Link>
            </li>

            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-2</Link>
            </li>

            <li className="p-1 rounded my-1 w-full border-b hover:bg-black hover:text-white transition-all duration-150">
              <Link href="">Algo-3</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default RightSide;
