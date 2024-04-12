"use client";
import React from "react";
import CardItems from "../ui/news-cards/CardItems";
import { useContextApp } from "@/context/Context";
import Spiner from "../ui/Spiner";
import ErrorMessage from "../ui/errorMsg/ErrorMessage";

function Cards() {
  const { errorMsg, Posts } = useContextApp();

  return (
    <div className="">
      <p className=" bg-red900 text-white p-2 title1 my-2 border-b  rounded">
        Notícias
      </p>

      {!errorMsg && !Posts.length ? (
        <div className="flex justify-center items-center">
          <Spiner />
        </div>
      ) : (
        <div>
          {!errorMsg ? (
            <div className=" grid md:grid-cols-2 grid-cols-1 justify-items-center">
              {Posts.map((item, index) => (
                <div className="md:px-5" key={index}>
                  <CardItems {...item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="">
              <ErrorMessage errorMsg={errorMsg} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Cards;
