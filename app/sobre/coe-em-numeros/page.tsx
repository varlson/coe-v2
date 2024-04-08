"use client";
import Info from "@/components/Info/Info";
import Modal from "@/components/modal/Modal";
import Icon from "@/components/ui/icons/Icon";
import { colegiate_info } from "@/constants/lan/pt";
import { useContextApp } from "@/context/Context";
import { IconTypes, ModalTypes } from "@/types/types";
import Image from "next/image";
import React, { useState } from "react";

function Page() {
  const { Colegiate_Info } = useContextApp();
  const { coe_statistics } = Colegiate_Info;

  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState<string>("");

  const clickHandle = (currentSrc: string) => {
    setSrc(currentSrc);
    closeModal();
  };

  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <Modal
        isOpen={modal}
        setIsOpen={closeModal}
        modalType={ModalTypes.DefaultModal}
      >
        <div className="flex h-[calc(70vh)]">
          <Image
            className=" w-full object-cover h-full"
            height={800}
            width={100}
            src={`/imgs/${src}`}
            alt="graph"
          />
        </div>
      </Modal>
      <Info title={coe_statistics.title}>
        <div className="flex flex-wrap justify-center">
          {coe_statistics.stats.map((item, index) => (
            <div
              className="bg-darkLight cursor-pointer rounded shadow-md w-3/12 one-stats m-2 p-2 relative"
              key={index}
            >
              <div
                onClick={() => {
                  clickHandle(item.img);
                }}
                className="absolute rounded bg-black opacity-0 transition-all duration-300 ease-in-out inset-0"
              >
                <div className="flex h-full justify-center items-center">
                  <Icon
                    iconType={IconTypes.DefaultIcon}
                    styles="h-8 w-8"
                    src="zoom"
                  />
                </div>
              </div>
              <Image
                className=" object-cover h-36 "
                alt="statistic graph"
                height={500}
                width={800}
                src={`/imgs/${item.img}`}
              />
            </div>
          ))}
        </div>
      </Info>
    </>
  );
}

export default Page;
