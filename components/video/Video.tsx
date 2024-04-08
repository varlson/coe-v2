"use client";
import React, { useState } from "react";
import Spiner from "../ui/Spiner";
import Modal from "../modal/Modal";
import { ModalTypes } from "@/types/types";

function Video({ url }: { url: string }) {
  const [isloading, setIsloading] = useState(true);
  const loading = () => {
    setIsloading(false);
  };

  return (
    <div className="">
      {isloading && (
        <Modal
          setIsOpen={loading}
          isOpen={isloading}
          modalType={ModalTypes.SpinnerModal}
        />
      )}
      <iframe
        onLoad={loading}
        src={url}
        title="Sobre o curso"
        className="md:w-10/12 md:h-96  h-52 object-fill m-auto rounded"
        allowFullScreen
      ></iframe>
    </div>
  );
}
export default Video;
