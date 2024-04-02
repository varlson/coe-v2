import React from "react";
import UseAnimations from "react-useanimations";
import alertTriangle from "react-useanimations/lib/alertTriangle";

function ErrorMessage({ errorMsg }: { errorMsg: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-x-4">
      <UseAnimations
        animation={alertTriangle}
        strokeColor="#a71c07"
        size={70}
      />
      <p>{errorMsg}</p>
    </div>
  );
}

export default ErrorMessage;
