import Icon from "@/components/ui/icons/Icon";
import { IconTypes } from "@/types/types";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "COE - Busca",
  },
};

function page() {
  return (
    <div className="w-9/12 m-auto  ">
      <div className="my-10 flex justify-center">
        <form className="flex border rounded-lg border-red900 w-96 h-10 p-2 items-center">
          <input
            className="flex-1 bg-transparent h-full p-2 focus:outline-none placeholder:font-jura"
            type="text"
            placeholder="Digite palavras chaves como post, autor..."
          />
          <button type="submit">
            <Icon
              styles="h-10 w-10"
              src="red-search"
              iconType={IconTypes.DefaultIcon}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default page;
