import React from "react";
import { TailSpin } from "react-loader-spinner";

function Spiner() {
  return (
    <div className="flex justify-center items-center">
      <TailSpin
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Spiner;
