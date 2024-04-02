"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Icon from "./icons/Icon";
import SpinnerModal from "./SpinnerModal";
import { IconTypes, LanLabelType } from "@/types/types";
import { labelLanguage } from "@/constants/labels";
import { useContextApp } from "@/context/Context";

const defaultValues = {
  pt: false,
  es: false,
  en: false,
};

function LanguageControl() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt");
  const [isLoading, setIsLoading] = useState(true);
  const { lanInitializer } = useContextApp();

  const [lanLabel, setLanLabel] = useState<LanLabelType>({
    pt: "Português",
    es: "Espanhol",
    en: "Inglês",
  });

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value || "pt";
    setCurrentLanguage(e.target.value);
    localStorage.setItem("lan", language);
    let currLabel: LanLabelType;
    if (language == "pt" || language == "es" || language == "en") {
      currLabel = labelLanguage[language];
    } else {
      currLabel = labelLanguage.pt;
    }
    setLanLabel(currLabel);
    await lanInitializer();
  };

  const [selectOpstions, setSelectOpstions] = useState(defaultValues);
  useEffect(() => {
    const loading = async () => {
      if (!localStorage.getItem("lan")) {
        localStorage.setItem("lan", "pt");
      }
      const lan: string = localStorage.getItem("lan") || "pt";
      setSelectOpstions(defaultValues);

      let currLabel: LanLabelType;
      if (lan == "pt" || lan == "es" || lan == "en") {
        currLabel = labelLanguage[lan];
      } else {
        currLabel = labelLanguage.pt;
      }

      setLanLabel(currLabel);
      setCurrentLanguage(lan);
      setSelectOpstions((prevState) => ({
        ...prevState,
        [lan]: true,
      }));

      setIsLoading(false);
    };

    loading();
  }, []);

  return (
    <>
      <SpinnerModal isOpen={isLoading} setIsOpen={() => {}} />
      <div className="flex gap-x-1 p-2 items-center">
        <Icon
          iconType={IconTypes.DefaultIcon}
          styles=""
          src={currentLanguage}
        />
        <select
          onChange={handleChange}
          className="px-1  py-0 font-jura text-sm font-bold active:text-white active:bg-slate-700"
          name="language"
          id="language"
        >
          <option selected={selectOpstions.pt} className="mt-3 py-3" value="pt">
            {lanLabel.pt}
          </option>
          <option selected={selectOpstions.es} className="mt-3 py-3" value="es">
            {lanLabel.es}
          </option>
          <option selected={selectOpstions.en} className="mt-3 py-3" value="en">
            {lanLabel.en}
          </option>
        </select>
      </div>
    </>
  );
}

export default LanguageControl;
