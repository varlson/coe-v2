"use client";
import Info from "@/components/Info/Info";
import { useContextApp } from "@/context/Context";
import React from "react";
function InfoPage() {
  const { Colegiate_Info } = useContextApp();
  const { Contacts } = Colegiate_Info;
  return (
    <div className=" ">
      <div className="min-h-screen ">
        <Info logo="contact" title={Contacts.menu}>
          {Contacts.contacts.map((deps, index) => (
            <div id={deps.link} key={index} className="min-h-80 my-5">
              <p className="title2 px-3 py-2 bg-red900 text-white rounded">
                {deps.depts}
              </p>
              <div className="mt-4 flex flex-col justify-between py-10 bg-darkLight  px-2 rounded">
                <p className="my-2 ">
                  Responsável:
                  <span className="ml-2 font-bold">{deps.chief}</span>
                </p>
                <div className="md:flex justify-between">
                  <div className="w-6/12 px-3 border-r">
                    <p className="underline title2 text-center">
                      Atendimento Presencial
                    </p>
                    {deps.presential?.days && (
                      <p className="py-1 text-justify">{`Horários: ${deps.presential?.days}`}</p>
                    )}
                    {deps.presential?.mail && (
                      <p className="py-1 text-justify">{`Email: ${deps.presential?.mail}`}</p>
                    )}
                    {deps.presential?.tel && (
                      <p className="py-1 text-justify">{`Telefone: ${deps.presential?.tel}`}</p>
                    )}
                  </div>
                  <div className="border-l w-6/12 px-3">
                    <p className="text-center underline title2">
                      Atendimento Remoto
                    </p>
                    {deps.remote.days && (
                      <p className=" text-right py-1 ">{`Horários: ${deps.remote?.days}`}</p>
                    )}
                    {deps.remote.mail && (
                      <p className=" text-right py-1 ">{`Email: ${deps.remote?.mail}`}</p>
                    )}
                    {deps.remote.tel && (
                      <p className=" text-right py-1 ">{`Telefone: ${deps.remote?.tel}`}</p>
                    )}
                  </div>
                </div>
                {deps.addr && <p className="text-center mb-1">{deps.addr}</p>}
              </div>
            </div>
          ))}
        </Info>
      </div>
    </div>
  );
}

export default InfoPage;
