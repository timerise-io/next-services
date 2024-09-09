"use client";

import { useMediaQuery } from "react-responsive";
import { useWhitelabel } from "@/context/Whitelabel";
import { mediaQueries } from "@/utlis/MediaQueries";
import { useTranslation } from "react-i18next";
import { useCallback, ChangeEvent, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Select } from "@headlessui/react";
import i18n from "@/utlis/i18n";

export default function Footer() {
  const { title, privacyUrl, termsUrl } = useWhitelabel();

  const isMobile = useMediaQuery({ query: mediaQueries.isMobile });
  const isTablet = useMediaQuery({ query: mediaQueries.isTablet });

  const { t } = useTranslation();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      e.preventDefault();
      const lang: string = e.target.value;
      i18n.changeLanguage(lang).then(() => {
        const newUrl = `/?${createQueryString("lang", lang)}`;
        window.location.href = newUrl;
      });
    },
    [createQueryString]
  );

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [searchParams]);

  const languages: string[] = [
    "bg",
    "cs",
    "de",
    "el",
    "en",
    "es",
    "fi",
    "fr",
    "hu",
    "it",
    "nb",
    "nl",
    "pl",
    "pt",
    "sk",
    "sv",
    "tr",
    "uk",
  ];

  return (
    <footer className="flex justify-between flex-row p-3 my-4">
      <div
        className={`flex justify-between items-center gap-6 ${
          isMobile || isTablet ? "flex-col" : "flex-row"
        } text-left`}
      >
        <p className="text-xs">{title} © 2024</p>
        <a className="text-xs" href={privacyUrl}>
          {t("pp")}
        </a>
        <a className="text-xs" href={termsUrl}>
          {t("t_and_c")}
        </a>
        <div className="flex items-center gap-1">
          <p className="text-xs">{t("language")}</p>
          <Select
            onChange={handleChange}
            value={i18n.language}
            className="border-none rounded-md outline-none text-xs font-semibold pl-1 bg-[#f6f6f6]"
          >
            {languages.map((lang: string, index: number) => (
              <option key={index} value={lang}>
                {lang.toUpperCase()}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </footer>
  );
}
