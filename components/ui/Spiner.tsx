import React from "react";
import { TailSpin } from "react-loader-spinner";

function Spiner() {
  return (
    <div className="flex justify-center items-center">
      <TailSpin
        visible={true}
        height="60"
        width="60"
        color="#873926"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Spiner;
