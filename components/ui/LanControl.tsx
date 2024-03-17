"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import SpinnerModal from "./SpinnerModal";
import { LanLabelType } from "@/types/types";
import { labelLanguage } from "@/constants/labels";

const defaultValues = {
  pt: false,
  es: false,
  en: false,
};

function LanguageControl() {
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt");
  const [isLoading, setIsLoading] = useState(true);

  const [lanLabel, setLanLabel] = useState<LanLabelType>({
    pt: "Português",
    es: "Espanhol",
    en: "Inglês",
  });

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
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

      //   const currLabel: LanLabelType = labelLanguage[lan];

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
        <Icon src={currentLanguage} />
        <select
          onChange={handleChange}
          className="p-1 active:text-white p-2 active:bg-slate-700"
          name="language" // Added a name for accessibility
          id="language" // Added an ID for potential targeting
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
