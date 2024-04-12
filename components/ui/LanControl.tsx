"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Icon from "./icons/Icon";
import SpinnerModal from "./SpinnerModal";
import { IconTypes, LanLabelType, PostTypes } from "@/types/types";
import { labelLanguage } from "@/constants/labels";
import { useContextApp } from "@/context/Context";
import { useMediaQuery } from "react-responsive";
import { fetchPosts } from "@/services/api";
import ErrorMessage from "./errorMsg/ErrorMessage";
import { useRouter } from "next/navigation";

const defaultValues = {
  pt: false,
  es: false,
  en: false,
};

function LanguageControl() {
  const [errorHandle, setErrorHandle] = useState<string | null>(null);
  const [currentLanguage, setCurrentLanguage] = useState<string>("pt");
  const [isLoading, setIsLoading] = useState(true);
  const { lanInitializer, postsSetter } = useContextApp();

  const [lanLabel, setLanLabel] = useState<LanLabelType>({
    pt: "PT",
    es: "ES",
    en: "IN",
  });

  const reloadFetchPost = async (lan: string) => {
    const resp = await fetchPosts(PostTypes.ALL, lan);

    if (resp.status) {
      postsSetter(resp.posts);
    } else {
      setErrorHandle(resp.error);
    }
  };

  const handleChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    setIsLoading(true);
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
    await reloadFetchPost(language);
    setIsLoading(false);
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

      await reloadFetchPost(lan);
      setIsLoading(false);
    };

    loading();
  }, []);

  return (
    <>
      <SpinnerModal isOpen={isLoading} setIsOpen={() => {}} />
      {!errorHandle ? (
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
            defaultValue={"pt"}
          >
            <option
              defaultValue={"DEFAULT"}
              selected={selectOpstions.pt}
              className="mt-3 py-3"
              value="pt"
            >
              {lanLabel.pt}
            </option>

            <option
              selected={selectOpstions.es}
              className="mt-3 py-3"
              value="es"
            >
              {lanLabel.es}
            </option>
            <option
              selected={selectOpstions.en}
              className="mt-3 py-3"
              value="en"
            >
              {lanLabel.en}
            </option>
          </select>
        </div>
      ) : (
        <ErrorMessage errorMsg={errorHandle} />
      )}
    </>
  );
}

export default LanguageControl;
