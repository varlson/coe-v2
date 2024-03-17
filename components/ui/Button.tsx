import { ButtonProps } from "@/types/types";
import React from "react";

function Button({ label, btnClickHandle, color }: ButtonProps) {
  const localBtnHandle = () => {
    if (btnClickHandle) {
      btnClickHandle();
    }
  };
  return (
    <button onClick={localBtnHandle} className={`btn ${color}`}>
      {label}
    </button>
  );
}

export default Button;
