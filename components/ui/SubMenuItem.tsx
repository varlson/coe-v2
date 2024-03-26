"use client";
import React, { useState } from "react";
import Icon from "./Icon";
import { IconTypes } from "@/types/types";

function SubMenuItem() {
  return (
    <div className="w-full flex flex-col ">
      <div
        id="home"
        className="bg-dred flex text-white  m-0 submenu duration-600 transition-all"
      >
        <ul className="flex gap-x-6 m-0 p-2">
          <li>Menu1</li>
          <li>Menu2</li>
          <li>Menu3</li>
          <li>Menu4</li>
        </ul>
      </div>

      <div
        id="search"
        className="bg-dred flex text-white  m-0 submenu duration-600 transition-all"
      >
        <ul className="flex gap-x-6 m-0 p-2">
          <li>Menu5</li>
          <li>Menu6</li>
          <li>Menu7</li>
          <li>Menu8</li>
        </ul>
      </div>

      <div
        id="infra"
        className="bg-dred flex text-white  m-0 submenu duration-600 transition-all"
      >
        <ul className="flex gap-x-6 m-0 p-2">
          <li>Menu9</li>
          <li>Menu10</li>
          <li>Menu11</li>
          <li>Menu12</li>
        </ul>
      </div>

      <div
        id="scholarships"
        className="bg-dred flex text-white  m-0 submenu duration-600 transition-all"
      >
        <ul className="flex gap-x-6 m-0 p-2">
          <li>Menu13</li>
          <li>Menu14</li>
          <li>Menu15</li>
          <li>Menu16</li>
        </ul>
      </div>
    </div>
  );
}

export default SubMenuItem;
